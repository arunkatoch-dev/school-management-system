const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 6,
  },
});

const Student = mongoose.model("STUDENT", studentsSchema);
module.exports = Student;