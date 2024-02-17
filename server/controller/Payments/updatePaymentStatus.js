const express = require("express");

const updatePaymentStatus = async (req, res) => {
  try {
    const { studentId, session } = req.body;

    const updateStatus = await Admission.findOneAndUpdate(
      {
        studentId,
        session,
      },
      {
        feeStatus: "received",
      },
      { new: true }
    );
    const saveStatus = await updateStatus.save();
    if (saveStatus) {
      res.json({ status: "received", msg: "success" });
    } else {
      res.json({ msg: "error", status: "pending" });
    }
  } catch (err) {
    res.json({ err });
  }
};

module.exports = updatePaymentStatus;