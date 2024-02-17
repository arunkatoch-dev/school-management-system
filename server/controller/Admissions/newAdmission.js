const express = require("express");
const fs = require("fs");
const Admission = require("../../models/admissionSchema");

const newAdmission = async (req, res) => {
  try {
    console.log(req.body);
    const { studentImage, studentSignature } = await req.files;
    const studentImagePath = await studentImage[0].path;
    const studentSignaturePath = await studentSignature[0].path;
    const {
      session,
      studentId,
      studentClass,
      studentName,
      studentGender,
      studentDOB,
      studentReligion,
      studentCatagory,
      fatherName,
      fatherOccupation,
      fatherAnnualIncome,
      fatherPhone,
      fatherEmail,
      motherName,
      motherOccupation,
      motherAnnualIncome,
      motherPhone,
      motherEmail,
      subjectsDetails,
      admissionStatus,
    } = await req.body;

    const tutionFee = +req.body.tutionFee;
    const computerLabFund = +req.body.computerLabFund;
    const scienceLabFund = +req.body.scienceLabFund;
    const sportsFund = +req.body.sportsFund;
    const buildingFund = +req.body.buildingFund;
    const smartClassFund = +req.body.smartClassFund;
    const electricityCharges = +req.body.electricityCharges;
    const stationaryCharges = +req.body.stationaryCharges;
    const uniformCharges = +req.body.uniformCharges;
    const transportationCharges = +req.body.transportationCharges;
    const propertyDamageCharge = +req.body.propertyDamageCharge;
    const prospectusFee = +req.body.prospectusFee;
    const admissionFee = +req.body.admissionFee;
    const examinationFee = +req.body.examinationFee;
    const webSiteMaintenanceCharges = +req.body.webSiteMaintenanceCharges;
    const extraClassCharges = +req.body.extraClassCharges;
    const totalFees = +req.body.totalFees;

    if (
      !(
        session &&
        studentId &&
        studentClass &&
        studentName &&
        studentGender &&
        studentDOB &&
        studentReligion &&
        studentCatagory &&
        fatherName &&
        fatherOccupation &&
        motherName &&
        motherOccupation &&
        subjectsDetails &&
        admissionStatus
      )
    ) {
      return res.json({
        status: "error",
        msg: "One or more required field have no data entered.",
      });
    }

    const checkAlreadyExist = await Admission.findOne({
      studentId: studentId,
      session: session,
    });

    if (checkAlreadyExist) {
      return res.json({
        status: "already exist",
      });
    }

    const newAdmission = await Admission.create({
      session,
      studentId,
      studentClass,
      studentName,
      studentGender,
      studentDOB,
      studentReligion,
      studentCatagory,
      studentImagePath,
      studentSignaturePath,
      fatherName,
      fatherOccupation,
      fatherAnnualIncome,
      fatherPhone,
      fatherEmail,
      motherName,
      motherOccupation,
      motherAnnualIncome,
      motherPhone,
      motherEmail,
      subjectsDetails,
      admissionStatus,
      tutionFee,
      computerLabFund,
      scienceLabFund,
      sportsFund,
      buildingFund,
      smartClassFund,
      electricityCharges,
      stationaryCharges,
      uniformCharges,
      transportationCharges,
      propertyDamageCharge,
      prospectusFee,
      admissionFee,
      examinationFee,
      webSiteMaintenanceCharges,
      extraClassCharges,
      totalFees,
    });

    await newAdmission.save();
    await res.json({
      status: "ok",
      msg: "Admission Form sent successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

module.exports = newAdmission;
