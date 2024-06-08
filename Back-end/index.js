const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const multer = require('multer');
const path = require("path");

require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type',
}));

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    // Generate unique filename (you can customize this as needed)
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Initialize multer instance
const upload = multer({ storage: storage });

// Use multer middleware for handling file uploads
app.use(upload.single('thumbnail')); // 'thumbnail' should match the name attribute in your frontend form

// Middleware
app.use(express.json());

// Serve Static Images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
  await mongoose.connect("mongodb://127.0.0.1:27017/ebooks");
  console.log("Database Connected!");
}

//AI COntent Generator Code

//const express = require("express");
// const path = require("path");
//const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const dotenv = require("dotenv");
//const cors = require("cors");

dotenv.config();

//const app = express();
//const port = process.env.PORT || 3000;

//app.use(cors());
app.use(express.static(path.join(__dirname, "Modules")));

//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });

app.post('/generateContent', upload.single('image'), async (req, res) => {
  try {
    const { buffer } = req.file;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const generationConfig = { temperature: 0.4, topP: 1, topK: 32, maxOutputTokens: 4096 };
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision", generationConfig });

    const parts = [
      { text: "Describe this image:\n" },
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: buffer.toString('base64'),
        },
      },
    ];

    const result = await model.generateContent({ contents: [{ role: "user", parts }] });
    const response = await result.response;

    res.json({ success: true, description: response.text() });
  } catch (error) {
    console.error('Error generating content:', error);
    res.json({ success: false, error: 'Error generating content' });
  }
});

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

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API_KEY is not set.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = await result.response;
    const text = await response.text();
    res.send(text);
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).send("Error generating content");
  }
});

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

//End Content Generator Code

// Checkout Route
app.post("/checkout", async (req, res) => {
  try {
    if (!req.body.items || !Array.isArray(req.body.items)) {
      throw new Error('Invalid items array');
    }
    // console.log(req.body.items[0])
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        console.log(item)
        return {
          price_data: {
            currency: "pkr",
            product_data: {
              name: item.name
            },
            unit_amount: item.price * 100,
          },
          quantity: 1
        };
      }),
      success_url: "https://drive.google.com/file/d/1HlHLg1hqNagZ_aJUSr67BciHXUFRNJRk/view?usp=sharing",
      cancel_url: "http://localhost:5173/cancel"
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
});
