const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  studentName: {
    type: String,
    trim: true,
  },
  achievementDetails: {
    type: String,
    trim: true,
    required: true,
  },
  imagePath: {
    type: String,
    trim: true,
    required: true,
  },
  achievementAddDate: {
    type: String,
    trim: true,
    required: true,
  },
});

const Achievement = mongoose.model("ACHIEVEMENT", achievementSchema);
module.exports = Achievement;
