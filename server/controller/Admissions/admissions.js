const express = require("express");
const Admission = require("../../models/admissionSchema");

const admissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    if (admissions) {
      return res.json(admissions);
    }
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
};

module.exports = admissions;
