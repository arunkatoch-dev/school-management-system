const express = require("express");
const bcrypt = require("bcrypt");
const Admin = require("../../models/adminsSchema");

const registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(422)
        .json({ error: "plz fill all the required fields..." });
    }

    const userExist = await Admin.findOne({ username: username });
    if (userExist) {
      return res.json({ msg: "Id already exists" });
    } else {
      bcrypt.hash(password, 10, async function (err, hashedPassword) {
        if (err) {
          return res.status(400).json({ msg: err });
        } else {
          const password = hashedPassword;
          const admin = new Admin({ username, password });
          await admin.save();
          res
            .status(201)
            .json({ status: "ok", msg: "Admin registered successfully..." });
        }
      });
    }
  } catch (e) {
    return res.status(400).json({ msg: "some error occured" });
  }
};

module.exports = registerAdmin;
