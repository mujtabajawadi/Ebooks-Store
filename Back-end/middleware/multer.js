const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage()

//multer instance
exports.upload = multer({ storage: storage });
