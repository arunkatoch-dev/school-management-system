const express = require("express");
const Admission = require("../../models/admissionSchema");

const allSessionsStudentDetails = async (req, res) => {
  try {
    const { studentId } = await req.params;
    if (!studentId) {
      return res.json({
        status: "failed",
        msg: "studentId not found",
      });
    }
    const getStudentDetails = await Admission.find({ studentId });
    if (!getStudentDetails) {
      return res.json({
        status: "failed",
        msg: "studentId and current session not found",
      });
    }
    return res.json({
      getStudentDetails,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = allSessionsStudentDetails;
