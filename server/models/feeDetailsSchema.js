const mongoose = require("mongoose");

const feeDetailsSchema = new mongoose.Schema({
  studentClass: { type: String, required: true },
  tutionFee: { type: Number },
  computerLabFund: { type: Number },
  scienceLabFund: { type: Number },
  sportsFund: { type: Number },
  buildingFund: { type: Number },
  smartClassFund: { type: Number },
  electricityCharges: { type: Number },
  stationaryCharges: { type: Number },
  uniformCharges: { type: Number },
  transportationCharges: { type: Number },
  propertyDamageCharge: { type: Number },
  prospectusFee: { type: Number },
  admissionFee: { type: Number },
  examinationFee: { type: Number },
  webSiteMaintenanceCharges: { type: Number },
  extraClassCharges: { type: Number },
  totalFees: { type: Number },
});

const FeesDetail = mongoose.model("FEESDETAIL", feeDetailsSchema);
module.exports = FeesDetail;
