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

app.use(cors());

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

// Serve Static Images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Other Routes
//...

// Content Generator Code
//...

// Checkout Route
app.post("/checkout", async (req, res) => {
  try {
    if (!req.body.items || !Array.isArray(req.body.items)) {
      throw new Error('Invalid items array');
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        return {
          price_data: {
            currency: "pkr",
            product_data: {
              name: item.name
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity
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
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
