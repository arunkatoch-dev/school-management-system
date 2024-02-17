const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/adminsSchema");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res.status(400).json({
        error: "plz fill all the required fields...",
        status: "failed",
      });
    }
    const userEmail = await Admin.findOne({ username: username });
    if (userEmail) {
      const checkPass = await bcrypt.compare(password, userEmail.password);
      if (checkPass) {
        const token = jwt.sign(
          { adminId: username },
          process.env.ADMIN_SECRET_KEY
        );
        return res
          .cookie("adminId", token, {
            expires: new Date(Date.now() + 258920000),
            sameSite: "none",
            secure: true,
          })
          .json({ status: "success", adminId: username });
      } else {
        return res.status(400).json({
          error: "username and password mismatch",
          status: "failed",
        });
      }
    } else {
      return res.status(400).json({
        error: "username and password mismatch",
        status: "failed",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({ error: `${err}`, status: "failed" });
  }
};

module.exports = loginAdmin;
