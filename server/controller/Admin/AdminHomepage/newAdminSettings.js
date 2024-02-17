const express = require("express");
const AdminControl = require("../../../models/adminControlSchema");

const newAdminSettings = async (req, res) => {
  try {
    const {
      currentSession,
      toggleAdmission,
      admissionStartDate,
      admissionEndDate,
    } = req.body;
    if (
      !(
        currentSession &&
        toggleAdmission &&
        admissionStartDate &&
        admissionEndDate
      )
    ) {
      res.json({ msg: "All fields are required." });
    }
    const newSettings = new AdminControl({
      currentSession,
      toggleAdmission,
      admissionStartDate,
      admissionEndDate,
    });
    await newSettings.save();
    await res.status(200).json({
      status: "success",
      msg: "New Settings Added.",
    });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = newAdminSettings;
