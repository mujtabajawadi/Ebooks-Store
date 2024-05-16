const { isUtf8 } = require("buffer");
const express = require("express");
const app = express();
const fs = require("fs");
//const { promises: fs } = require('fs');
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const multer = require('multer');

// Set storage engine
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


// const { createProduct } = require("./controller/Product");
const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Category");
const userRouter = require("./routes/User");
const authRouter = require("./routes/Auth");
const cookieParser = require("cookie-parser");

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/products", productsRouter.router);
app.use("/categories", categoriesRouter.router);
app.use("/user", userRouter.router);
app.use("/auth/", authRouter.router);
app.use(express.json());
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
//   })
// );
// app.use(passport.authenticate("session"));
// //Passport Strategy
// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     User.findOne({ username: username });
//   })
// );
// //create session variable req.user when called from callbacks
// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, {
//       id: user.id,
//       username: user.username,
//       picture: user.picture,
//     });
//   });
// });
// //changes session variable req.user when called from authorized request
// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ebooks");
  console.log("Database Connected!");
}

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// app.get("/", (req, res) => {
//   res.json(products);
// });



//AI COntent Generator Code

//const express = require("express");
const path = require("path");
//const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const dotenv = require("dotenv");
//const cors = require("cors");

dotenv.config();

//const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




//End Content Generator Code




app.listen(3000, () => {
  console.log("Server Started");
});
