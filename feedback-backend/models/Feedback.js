const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
