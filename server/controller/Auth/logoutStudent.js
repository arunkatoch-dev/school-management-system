const express = require("express");

const logoutStudent = async (req, res) => {
  try {
    await res
      .clearCookie("uid", {
        sameSite: "none",
        secure: true,
      })
      .json({ msg: "logged out" });
  } catch (err) {
    res.json({ msg: "error", err });
  }
};
module.exports = logoutStudent;
