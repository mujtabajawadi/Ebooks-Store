const mongoose = require("mongoose");
const { Schema } = mongoose;

const ebooksSchema = new Schema({
  title: { type: String, required: true, unique: true },
  price: { type: Number, min: [1, "Wrong minimum  price!"] },
  rating: {
    type: Number,
    min: [1, "Invalid Rating"],
    max: [5, "Invalid Rating"],
    default: 0,
  },
  author: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  deleted: { type: Boolean, default: false },
});

const virtual = ebooksSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
ebooksSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", ebooksSchema);
