const express = require("express");
const fs = require("fs");
const Admission = require("../../models/admissionSchema");

const deleteAdmission = async (req, res) => {
  try {
    const { id } = await req.params;
    if (!id) {
      return res.json({ status: "failed", msg: "id not found" });
    }

    const getImagesPath = await Admission.findOne({ _id: id });
    if (getImagesPath) {
      const studentImagePath = getImagesPath.studentImagePath;
      const studentSignaturePath = getImagesPath.studentSignaturePath;
      const deleteStudentImagePath = fs.unlinkSync(studentImagePath);
      const deleteStudentSignaturePath = fs.unlinkSync(studentSignaturePath);
      const deleteEvent = await Admission.deleteOne({ _id: id });
      return await res.json({ status: "done", msg: "deleted" });
    } else {
      return res.json({ status: "failed", msg: "something went wrong" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", msg: err });
  }
};

module.exports = deleteAdmission;
