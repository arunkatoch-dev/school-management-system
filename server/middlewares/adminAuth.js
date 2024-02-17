const express = require("express");
const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  try {
    const loginToken = req.cookies.adminId;
    const verifyAdmin = jwt.verify(loginToken, process.env.ADMIN_SECRET_KEY);
    if (verifyAdmin) {
      next();
    } else {
      return res.json({ msg: "admin not authenticated" });
    }
  } catch (err) {
    return res.json({ msg: "admin not authenticated" });
  }
};

module.exports = adminAuth;
