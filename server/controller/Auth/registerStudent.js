const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../../models/studentsSchema");

const registerStudent = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    if (!(username && password)) {
      return res
        .status(422)
        .json({ error: "plz fill all the required fields..." });
    }
    if (password !== confirmPassword) {
      return res
        .status(422)
        .json({ error: "password and confirmPassword mismatch" });
    }

    const userExist = await Student.findOne({ username: username });
    if (userExist) {
      return res.json({ msg: "Email already exists" });
    } else {
      bcrypt.hash(password, 10, async function (err, hashedPassword) {
        if (err) {
          return res.status(400).json({ msg: err });
        } else {
          const password = hashedPassword;
          const user = new Student({ username, password });
          await user.save();
          res
            .status(201)
            .json({ status: "ok", msg: "user registered successfully..." });
        }
      });
    }
  } catch (e) {
    return res.status(400).json({ msg: "some error occured" });
  }
};

module.exports = registerStudent;
