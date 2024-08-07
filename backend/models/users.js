import mongoose from "mongoose";
import isEmail from "validator/lib/isemail.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    default: "",
    unique: true,
    required: [true, "Please enter your email"],
    lowercase: true,
    validate: [isEmail, "Please eneter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  avatar: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  if (!this.avatar) {
    this.avatar = this.username[0]
  }

  next();
});

const User = mongoose.model("user", userSchema)
export default User