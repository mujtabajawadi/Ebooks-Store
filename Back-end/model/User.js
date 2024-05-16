const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required:true},
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: true,
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
  },
  token: String,
});

const virtual = userSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.User = mongoose.model("User", userSchema);
