const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  notificationHeading: {
    type: String,
    trim: true,
    minlength: 5,
  },
  notificationdetails: {
    type: String,
    trim: true,
    minlength: 10,
    required: true,
  },
  notificationAddDate: {
    type: String,
    trim: true,
    required: true,
  },
});

const Notification = mongoose.model("NOTIFICATION", notificationSchema);
module.exports = Notification;
