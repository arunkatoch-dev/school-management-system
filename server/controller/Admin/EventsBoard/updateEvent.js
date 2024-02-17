const express = require("express");
const Event = require("../../../models/eventsBoardSchema");

const updateEvent = async (req, res) => {
  try {
    const { id, event, eventAddDate } = req.body;
    if (!id && !event && !eventAddDate) {
      return res.json({ status: "error", msg: "all fields are required..." });
    }
    const update = await Event.findByIdAndUpdate(
      id,       
      {
        event,
        eventAddDate,
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

module.exports = updateEvent;
