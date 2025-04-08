require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", feedbackRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));
