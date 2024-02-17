const express = require("express");
const Notification = require("../../../models/noticeBoardSchema");

const newNotice = async (req, res) => {
  try {
    const { notificationHeading, notificationdetails, notificationAddDate } =
      req.body;
    if (!notificationHeading && !notificationdetails && notificationAddDate) {
      return res.json({
        status: "failed",
        msg: "blank fields are not allowed.",
      });
    } else {
      const findSimilarity = await Notification.findOne({
        notificationdetails,
      });
      if (findSimilarity) {
        return res.json({
          status: "failed",
          msg: "notification with same details already exists.",
        });
      } else {
        const addNewNotification = new Notification({
          notificationHeading,
          notificationdetails,
          notificationAddDate,
        });
        await addNewNotification.save();
        await res.json({
          status: "success",
          msg: "notification added successfully.",
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", msg: err });
  }
};

module.exports = newNotice;
