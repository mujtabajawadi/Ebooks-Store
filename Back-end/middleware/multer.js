const multer = require("multer");
const path = require("path");

const upload_Dir = path.resolve(__dirname, "..", "uploads");

const storage = multer.memoryStorage()

//multer instance
exports.upload = multer({ storage: storage });
