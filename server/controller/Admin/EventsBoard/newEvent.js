const express = require("express");
const Event = require("../../../models/eventsBoardSchema");

const newEvent = async (req, res) => {
  try {
    const { event, eventAddDate } = req.body;
    if (!event && !eventAddDate) {
      return res.json({
        status: "failed",
        msg: "blank fields are not allowed.",
      });
    } else {
      const findSimilarity = await Event.findOne({
        event,
      });
      if (findSimilarity) {
        return res.json({
          status: "failed",
          msg: "same event already exists.",
        });
      } else {
        const addNewEvent = new Event({
          event,
          eventAddDate,
        });
        await addNewEvent.save();
        await res.json({
          status: "success",
          msg: "Event added successfully.",
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", msg: err });
  }
};

module.exports = newEvent;
