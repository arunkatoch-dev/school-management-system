const express = require("express");
const Notification = require("../../../models/noticeBoardSchema");

const updateNotice = async (req, res) => {
  try {
    const { id, updateNoticeHeading, updateNoticeDetails } = req.body;
    if (!id && !updateNoticeDetails && !updateNoticeHeading) {
      return res
        .status(400)
        .json({ status: "error", msg: "all fields are required..." });
    }
    const update = await Notification.findByIdAndUpdate(
      id,
      {
        notificationHeading: updateNoticeHeading,
        notificationdetails: updateNoticeDetails,
      },
      { new: true }
    );
    if (update) {
      return res.json({ status: "updated", msg: "updated successfully..." });
    } else {
      return res.json({ status: "failed", msg: "some error occured." });
    }
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", msg: error });
  }
};

module.exports = updateNotice;
