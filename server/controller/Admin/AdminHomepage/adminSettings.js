const express = require("express");
const AdminControl = require("../../../models/adminControlSchema");

const adminSettings = async (req, res) => {
  try {
    const getSettings = await AdminControl.find();
    res.status(200).json(getSettings);
  } catch (err) {
    res.json({ status: "error", error: err });
  }
};

module.exports = adminSettings;
