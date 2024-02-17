const express = require("express");
const Event = require("../../../models/eventsBoardSchema");

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ status: "failed", msg: "id not found" });
    } else {
      const deleteEvent = await Event.findByIdAndDelete(id);
      return await res.json({ status: "done", msg: "deleted" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ status: "error", msg: error });
  }
};

module.exports = deleteEvent;
