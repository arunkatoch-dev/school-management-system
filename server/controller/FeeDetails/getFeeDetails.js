const express = require("express");
const FeesDetail = require("../../models/feeDetailsSchema");

const getFeeDetails = async (req, res) => {
  try {
    const { studentClass } = req.params;
    if (!studentClass) {
      return res.json({ status: "failed", msg: "cannot get sudent class" });
    }

    const findClassDetails = await FeesDetail.findOne({ studentClass });
    if (findClassDetails) {
      return res.json(findClassDetails);
    }
    return res.json({ status: "error", msg: "No such class Found." });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

module.exports = getFeeDetails;
