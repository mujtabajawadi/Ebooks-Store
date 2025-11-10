const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchProductById,
  updateProduct,
  deleteProduct,
  getProductImage,
} = require("../controller/Product");
const { upload } = require("../middleware/multer.js");

const router = express.Router();






router
  .get("/", fetchAllProducts)
  .get("/getImage", getProductImage)
  .post("/createProduct", upload.single("thumbnail"), createProduct)
  .get("/getProduct/:id", fetchProductById)
  .patch("/updateProduct/:id", updateProduct)
  .delete("/deleteProduct/:id", deleteProduct);

exports.router = router;
