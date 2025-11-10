const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const uploaderResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "paperless_pages",
    });
    console.log(uploaderResponse);
    // fs.unlinkSync(localFilePath);
    return uploaderResponse;
  } catch (error) {
    console.log("Cloudinary upload error: ", error);
    // fs.unlinkSync(localFilePath);
  }
};

exports.deleteFromCloudinary = async (url) => {
  try {
    if (!url) return null;

    const urlParts = url.split("/");
    const resource_type = urlParts[urlParts.indexOf("upload") - 1];

    const publicId = urlParts.pop().split(".")[0];
    const deleteResponse = await cloudinary.uploader.destroy(publicId, {
      resource_type: resource_type,
    });
    return deleteResponse;
  } catch (error) {
    throw error;
  }
};
