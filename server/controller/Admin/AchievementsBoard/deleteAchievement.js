const express = require("express");
const fs = require("fs");
const Achievement = require("../../../models/achievementBoardSchema");

const deleteAchievement = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ status: "failed", msg: "id not found" });
    }
    const getImagePath = await Achievement.findOne({ _id: id });
    if (getImagePath) {
      const imagePath = getImagePath.imagePath;
      const deleteImage = fs.unlinkSync(imagePath);
      const deleteEvent = await Achievement.deleteOne({ _id: id });
      return await res.json({ status: "done", msg: "deleted" });
    } else {
      return res.json({ status: "failed", msg: "something went wrong" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", msg: error });
  }
};

module.exports = deleteAchievement;
