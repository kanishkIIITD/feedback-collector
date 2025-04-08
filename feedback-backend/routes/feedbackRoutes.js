const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router();

// POST /submit-feedback
router.post("/submit-feedback", async (req, res) => {
  const { fullName, email, message } = req.body;
  if (!fullName || !email || !message)
    return res.status(400).json({ error: "All fields are required." });
  try {
    const newFeedback = await Feedback.create({ fullName, email, message });
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: "Error saving feedback." });
  }
});

// GET /feedbacks
router.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving feedbacks." });
  }
});

module.exports = router;
