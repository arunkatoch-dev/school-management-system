const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    trim: true,
    minlength: 5,
  },
  eventAddDate: {
    type: String,
    trim: true,
    required: true,
  },
});

const Event = mongoose.model("EVENT", eventSchema);
module.exports = Event;
