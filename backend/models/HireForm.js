const mongoose = require("mongoose");

const hireFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required"],
    trim: true,
    minlength: [2, "Full Name must be at least 2 characters"],
    maxlength: [50, "Full Name must be under 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  position: {
    type: String,
    default: "",
  },
  domains: {
    type: [String],
    default: [],
  },
  skills: {
    type: String,
    required: [true, "Skills are required"],
  },
  message: {
    type: String,
    default: "",
  },
  resume: {
    type: String,
    required: [true, "Resume is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HireForm", hireFormSchema);
