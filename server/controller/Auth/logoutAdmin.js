const express = require("express");

const logoutAdmin = async (req, res) => {
  try {
    await res
      .clearCookie("adminId", {
        sameSite: "none",
        secure: true,
      })
      .json({ msg: "logged out" });
  } catch (err) {
    res.json({ msg: "error", err });
  }
};

module.exports = logoutAdmin;
