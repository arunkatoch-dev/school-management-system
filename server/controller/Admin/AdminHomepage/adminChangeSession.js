const express = require("express");
const AdminControl = require("../../../models/adminControlSchema");

const adminChangeSession = async (req, res) => {
  try {
    const { id } = req.params;
    const { session } = req.body;

    const update = await AdminControl.findByIdAndUpdate(
      id,
      {
        currentSession: session,
      },
      { new: true }
    );
    if (update) {
      return res.json({ status: "updated" });
    } else {
      return res.json({ status: "failed" });
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = adminChangeSession;
