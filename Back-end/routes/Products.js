const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  fetchProductById,
  updateProduct,
  deleteProduct,
  getProductImage,
} = require("../controller/Product");

const router = express.Router();

router
  .get("/", fetchAllProducts)
  .get("/getImage", getProductImage)
  .post("/createProduct", createProduct)
  .get("/getProduct/:id", fetchProductById)
  .patch("/updateProduct/:id", updateProduct)
  .delete("/deleteProduct/:id", deleteProduct);

exports.router = router;
