const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/User");

const router = express.Router();

router
  .get("/", getAllUsers)
  .get("/:id", getUserById)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

exports.router = router;
