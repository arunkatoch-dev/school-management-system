const express = require("express");
const Admission = require("../../../models/admissionSchema");

const allStudentsAdmin = async (req, res) => {
  try {
    const { session } = req.params;
    // Filter students on the basis of current session

    const findStudents = await Admission.find({ session });
    if (findStudents) {
      return res.json(findStudents);
    }
    res.json({ error: "no Data found" });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = allStudentsAdmin;
