const { json } = require("express");
const { Product } = require("../model/Product");

// exports.createProduct = async (req, res) => {
//   const product = new Product(req.body);
//   try {
//     const response = await product.save();
//     res.status(201).json(response);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
exports.createProduct = async (req, res) => {
  try {
    // Extract product data from request body
    const { title, price, category, rating, stock, thumbnail } = req.body;
    
    // Create a new product instance
    const product = new Product({
      title,
      price,
      category,
      rating,
      stock,
      thumbnail: req.file.path.replace(/\\/g, '/'), // Save the file path in the database
    });

    // Save the product to the database
    const response = await product.save();

    // Send success response
    res.status(201).json(response);
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message });
  }
};


// exports.fetchAllProducts = async (req, res) => {
//   let query = Product.find({});
//   try {
//     const response = await query.exec();
//     res.status(201).json(response);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

const path = require("path");

exports.fetchAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    // Modify each product object to include the image URL
    const productsWithImageURL = products.map((product) => ({
      ...product._doc,
      thumbnail: `${req.protocol}://${req.get("host")}/products/${product.thumbnail}`,
    }));

    // Send the modified product list as the response
    res.status(200).json(productsWithImageURL);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
};

exports.getProductImage = (req, res) => {
  // Get the filename from the request params
  const filename = req.params.filename;

  // Construct the file path
  const filePath = path.join(__dirname, "../uploads", filename);

  // Send the file as the response
  res.sendFile(filePath);
};


exports.fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate({_id:id}, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
