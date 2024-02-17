const express = require("express");
const jwt = require("jsonwebtoken");

const studentAuth = (req, res, next) => {
  try {
    const loginToken = req.cookies.uid;
    const verifyStudent = jwt.verify(loginToken, process.env.SECRET_KEY);
    if (verifyStudent) {
      next();
    } else {
      return res.json({ msg: "user not authenticated" });
    }
  } catch (err) {
    return res.json({ msg: "user not authenticated" });
  }
};

module.exports = studentAuth;
