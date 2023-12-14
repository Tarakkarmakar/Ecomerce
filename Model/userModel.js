const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  answer : {
    type : String,
    required : true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Customer", "Manager"],
    default: "Customer",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
