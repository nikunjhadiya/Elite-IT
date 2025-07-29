const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const HireForm = require("../models/HireForm");

// Storage config for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Correct path
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

// POST /api/hire
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, skills, position, message } = req.body;

    // Domains may come as JSON string or comma-separated
    let domains = [];
    if (req.body.domains) {
      try {
        domains = JSON.parse(req.body.domains);
      } catch {
        domains = req.body.domains.split(",").map((d) => d.trim());
      }
    }

    // Validate
    if (!fullName || !email || !phone || !skills || !req.file) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newForm = new HireForm({
      fullName,
      email,
      phone,
      skills,
      position,
      message,
      domains,
      resume: req.file.filename,
    });

    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
