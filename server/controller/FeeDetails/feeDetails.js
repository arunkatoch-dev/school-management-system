const express = require("express");
const FeesDetail = require("../../models/feeDetailsSchema");

const feeDetails = async (req, res) => {
  try {
    const {
      studentClass,
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
    } = req.body;

    if (!studentClass) {
      return res.json({ msg: "StudentClass can't be empty" });
    }

    const totalFees =
      tutionFee +
      computerLabFund +
      scienceLabFund +
      sportsFund +
      buildingFund +
      smartClassFund +
      electricityCharges +
      stationaryCharges +
      uniformCharges +
      transportationCharges +
      propertyDamageCharge +
      prospectusFee +
      admissionFee +
      examinationFee +
      webSiteMaintenanceCharges +
      extraClassCharges;

    const checkClassExistence = await FeesDetail.findOne({ studentClass });
    if (checkClassExistence) {
      return res.json({ msg: `${studentClass} already exist.` });
    }

    const createFeeDetails = new FeesDetail({
      studentClass,
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

    const saveFeeDetails = await createFeeDetails.save();
    if (saveFeeDetails) {
      res.json({ status: "success", msg: "fee details added successfully." });
    } else {
      res.status(400).json({ status: "some error occured" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = feeDetails;
