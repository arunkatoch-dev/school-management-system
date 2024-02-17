const express = require("express");
const Admission = require("../../models/admissionSchema");

const currentSessionStudentDetails = async (req, res) => {
  try {
    const { studentId, session } = await req.params;
    if (!(studentId && session)) {
      return res.json({
        status: "failed",
        msg: "studentId and current session not found",
      });
    }
    const getStudentDetails = await Admission.findOne({
      studentId: studentId,
      session: session,
    });
    if (!getStudentDetails) {
      return res.json({
        status: "failed",
        msg: "studentId and current session not found",
      });
    }

    return res.json({ getStudentDetails, status: "success" });
  } catch (error) {
    console.log(error);
    res.json({ error, msg: "error occured" });
  }
};

module.exports = currentSessionStudentDetails;
