const express = require("express");
const Event = require("../../../models/eventsBoardSchema");

const events = async (req, res) => {
  try {
    const getEvents = await Event.find();
    res.json(getEvents);
  } catch (error) {
    console.log(error);
    res.json({ status: "error", msg: error });
  }
};

module.exports = events;
