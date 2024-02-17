const express = require("express");
const Notification = require("../../../models/noticeBoardSchema");

const notifications = async (req, res) => {
  try {
    const getNotifications = await Notification.find();
    res.json(getNotifications);
  } catch (error) {
    console.log(error);
    res.json({ status: "error", msg: error });
  }
};

module.exports = notifications;
