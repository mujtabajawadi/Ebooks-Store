const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

app.use(
  cors({
    origin: "*",
  })
);

// Middleware
app.use(express.json());


// Serve Static Images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Category");
const userRouter = require("./routes/User");
const authRouter = require("./routes/Auth");
app.use("/products", productsRouter.router);
app.use("/categories", categoriesRouter.router);
app.use("/user", userRouter.router);
app.use("/auth/", authRouter.router);

// Database Connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.MONGODB_URI}/PaperlessPages`);
  console.log("Database Connected!");
}

//AI Content Generator Code

const { GoogleGenAI } = require("@google/genai");
const { upload } = require("./middleware/multer.js");

app.use(express.static(path.join(__dirname, "Modules")));

// app.post("/generateContent", upload.single("image"), async (req, res) => {
//   try {
//     const { buffer } = req.file;

//     const genAI = new GoogleGenerativeAI(process.env.API_KEY);
//     const generationConfig = {
//       temperature: 0.4,
//       topP: 1,
//       topK: 32,
//       maxOutputTokens: 4096,
//     };
//     const model = genAI.getGenerativeModel({
//       model: "gemini-pro-vision",
//       generationConfig,
//     });

//     const parts = [
//       { text: "Describe this image:\n" },
//       {
//         inlineData: {
//           mimeType: "image/jpeg",
//           data: buffer.toString("base64"),
//         },
//       },
//     ];

//     const result = await model.generateContent({
//       contents: [{ role: "user", parts }],
//     });
//     const response = await result.response;

//     res.json({ success: true, description: response.text() });
//   } catch (error) {
//     console.error("Error generating content:", error);
//     res.json({ success: false, error: "Error generating content" });
//   }
// });

app.get("/config", (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API_KEY is not set.");
    }

    // Log a masked or generic message instead of the actual API key
    console.log("API_KEY: ****");

    res.json({ success: true, message: "API success" });
  } catch (error) {
    console.error("Error in /config endpoint:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/generateContent/:prompt", async (req, res) => {
  try {
    const prompt = req.params.prompt;

    console.log(prompt);
    const apiKey = process.env.API_KEY;

    console.log("Gemini Api key: ", apiKey);
    if (!apiKey) {
      throw new Error("API_KEY is not set.");
    }

    const ai = new GoogleGenAI({ apiKey: `${apiKey}` });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${prompt}`,
    });

    // console.log(response)
    const text = response.text;
    console.log(text);

    return res.send(text);
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).send("Error generating content");
  }
});

//End Content Generator Code

// Checkout Route
app.post("/checkout", async (req, res) => {
  try {
    if (!req.body.items || !Array.isArray(req.body.items)) {
      throw new Error("Invalid items array");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        console.log(item);
        return {
          price_data: {
            currency: "pkr",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),
      success_url:
        "https://drive.google.com/file/d/1T4B7oDpT_UMbdlaf_SBMYq3Ywh90sjh6/view?usp=sharing",
      cancel_url: "https://paperlesspages.netlify.app/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
