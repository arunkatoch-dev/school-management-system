const express = require("express");
const Admission = require("../../models/admissionSchema");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const newPayment = async (req, res) => {
  const { studentId, session, studentClass } = req.body;
  const totalFees = +req.body.totalFees;


  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalFees * 100, // for decimal compensation
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      studentId: studentId,
      session: session,
      studentClass: studentClass,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = newPayment;
