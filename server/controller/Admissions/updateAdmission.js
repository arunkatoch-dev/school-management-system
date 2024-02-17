const express = require("express");
const Admission = require("../../models/admissionSchema");

const updateAdmission = async (req, res) => {
  try {
    const { id, admissionStatus } = await req.body;
    const { rejectionMsg } = await req.params;
    if (!(id && admissionStatus)) {
      return res.json({
        status: "failed",
        msg: "One or more field is missing",
      });
    }
    if (rejectionMsg) {
      const updateAdmission = await Admission.findByIdAndUpdate(
        id,
        {
          admissionStatus,
          rejectionMsg,
        },
        { new: true }
      );
      if (updateAdmission) {
        return res.json({
          status: "success",
          msg: "rejected successfully.",
        });
      } else {
        return res.json({ status: "failed", msg: "some error occured." });
      }
    } else {
      const updateAdmission = await Admission.findByIdAndUpdate(
        id,
        {
          admissionStatus,
        },
        { new: true }
      );
      if (updateAdmission) {
        return res.json({
          status: "success",
          msg: "approved successfully.",
        });
      } else {
        return res.json({ status: "failed", msg: "some error occured." });
      }
    }
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", details: err });
  }
};

module.exports = updateAdmission;
