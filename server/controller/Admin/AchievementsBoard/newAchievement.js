const express = require("express");
const multer = require("multer");
const Achievement = require("../../../models/achievementBoardSchema");

const newAchievement = async (req, res) => {
  try {
    const imagePath = await req.file.path;
    const { studentName, achievementDetails, achievementAddDate } = req.body;
    if (
      !imagePath &&
      !studentName &&
      !achievementDetails &&
      !achievementAddDate
    ) {
      return res.json({
        status: "error",
        msg: "one or more fields are missing or file uploading failed..",
      });
    } else {
      const addNewAchievement = await Achievement.create({
        studentName,
        achievementDetails,
        imagePath,
        achievementAddDate,
      });
      await addNewAchievement.save();
      await res.json({
        status: "ok",
        msg: "achievement added successfully.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", msg: error });
  }
};

module.exports = newAchievement;
