const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const multer = require("multer");
const newAdmission = require("../controller/Admissions/newAdmission");
const uploadMultiple = require("../config/admissionStorageConfiguration");
const registerStudent = require("../controller/Auth/registerStudent");
const loginStudent = require("../controller/Auth/loginStudent");
const studentAuth = require("../middlewares/studentAuth");
const logoutStudent = require("../controller/Auth/logoutStudent");
const currentSessionStudentDetails = require("../controller/Students/currentSessionStudentDetails");
const allSessionsStudentDetails = require("../controller/Students/allSessionsStudentDetails");
const feeDetails = require("../controller/FeeDetails/feeDetails");
const getFeeDetails = require("../controller/FeeDetails/getFeeDetails");
const newPayment = require("../controller/Payments/newPayment");

const router = express.Router();

// Student Auth Routes ------ >>>>>>>
router.post("/student/register", registerStudent);
router.post("/student/login", loginStudent);
// check student login
router.get("/", studentAuth, (req, res) => {
  res.json({ msg: "verified student" });
});
router.get("/studentLogout", logoutStudent);

// Fee Details Routes -------->>>>>>>>>
router.post("/feeDetails", feeDetails);
router.get("/feeDetails/:studentClass", getFeeDetails);

// Payment Routes----->>>>>>
router.post("/create-intent", newPayment);

// Admissions Routes -------->>>>>>>>>
router.post(
  "/admissions",
  uploadMultiple.fields([
    { name: "studentImage", maxCount: 1 },
    { name: "studentSignature", maxCount: 1 },
  ]),
  newAdmission
);

// Student Routes ----->>>>>
router.get(
  "/currentSessionStudentDetails/:studentId/:session",
  currentSessionStudentDetails
);
router.get("/allSessionsStudentDetails/:studentId", allSessionsStudentDetails);

module.exports = router;
