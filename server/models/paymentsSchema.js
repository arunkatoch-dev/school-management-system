const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
  studentId: { type: String },
  paymentData: [],
  paymentDate: {
    type: Date,
    default: Date.now(),
  },
});

const Payment = mongoose.model("PAYMENT", paymentsSchema);
module.exports = Payment;
