const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../../models/studentsSchema");

const loginStudent = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res
        .status(400)
        .json({ error: "plz fill all the required fields..." });
    }
    const userEmail = await Student.findOne({ username: username });
    if (userEmail) {
      const checkPass = await bcrypt.compare(password, userEmail.password);
      if (checkPass) {
        const token = jwt.sign({ UID: username }, process.env.SECRET_KEY);
        return res
          .cookie("uid", token, {
            expires: new Date(Date.now() + 25892000000),
            sameSite: "none",
            secure: true,
          })
          .json({ msg: "user login Successfully...", userId: username });
      } else {
        return res.status(400).json({
          error: "username and password mismatch",
          msg: "error occured",
        });
      }
    } else {
      return res.status(400).json({
        error: "username and password mismatch",
        msg: "error occured",
      });
    }
  } catch (err) {
    return res.status(400).json({ error: `${err}`, msg: "error occured." });
  }
};

module.exports = loginStudent;
