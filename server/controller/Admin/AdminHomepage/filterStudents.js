const express = require("express");
const Admission = require("../../../models/admissionSchema");

const filterStudents = async (req, res) => {
  try {
    const { studentClass, searchVal } = req.body;

    const findData = await Admission.find({
      $or: [{ studentName: searchVal }, { studentClass: studentClass }],
    });

    if (findData) {
      res.json(findData);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

module.exports = filterStudents;
