const mongoose = require("mongoose");

const adminControlSchema = new mongoose.Schema({
  currentSession: {
    type: String,
    trim: true,
    required: true,
  },
  toggleAdmission: {
    // Allow or disallow new admissions
    type: Boolean,
    required: true,
  },
  admissionStartDate: {
    type: String,
    trim: true,
    required: true,
  },
  admissionEndDate: {
    type: String,
    trim: true,
    required: true,
  },
});

const AdminControl = mongoose.model("ADMINCONTROL", adminControlSchema);
module.exports = AdminControl;
