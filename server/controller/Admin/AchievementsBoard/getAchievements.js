const express = require("express");
const Achievement = require("../../../models/achievementBoardSchema");


const achievements = async (req, res) => {
  try {
    const getAchievements = await Achievement.find();
    if (getAchievements) {
      return await res.json(getAchievements);
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error", msg: error });
  }
};

module.exports = achievements;
