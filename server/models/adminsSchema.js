const mongoose = require("mongoose");

const adminsSchema = new mongoose.Schema({
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

const Admin = mongoose.model("ADMIN", adminsSchema);
module.exports = Admin;
