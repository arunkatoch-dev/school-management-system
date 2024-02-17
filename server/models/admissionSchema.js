const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  session: {
    type: String,
    trim: true,
  },
  studentId: {
    type: String,
    trim: true,
  },
  studentClass: {
    type: String,
    trim: true,
  },
  studentName: {
    minlength: 3,
    type: String,
    trim: true,
    required: true,
  },
  studentGender: {
    type: String,
    trim: true,
    required: true,
  },
  studentDOB: {
    type: String,
    trim: true,
    required: true,
  },
  studentReligion: {
    type: String,
    trim: true,
    required: true,
  },
  studentCatagory: {
    type: String,
    trim: true,
    required: true,
  },
  studentImagePath: {
    type: String,
    trim: true,
    required: true,
  },
  studentSignaturePath: {
    type: String,
    trim: true,
    required: true,
  },
  fatherName: {
    minlength: 3,
    type: String,
    trim: true,
    required: true,
  },
  fatherOccupation: {
    minlength: 2,
    type: String,
    trim: true,
    required: true,
  },
  fatherAnnualIncome: {
    type: String,
    trim: true,
  },
  fatherPhone: {
    minlength: 10,
    type: String,
    trim: true,
  },
  fatherEmail: {
    type: String,
    trim: true,
  },
  motherName: {
    minlength: 2,
    type: String,
    trim: true,
    required: true,
  },
  motherOccupation: {
    minlength: 2,
    type: String,
    trim: true,
  },
  motherAnnualIncome: {
    type: String,
    trim: true,
  },
  motherPhone: {
    minlength: 10,
    type: String,
    trim: true,
  },
  motherEmail: {
    type: String,
    trim: true,
  },
  subjectsDetails: {
    type: String,
    trim: true,
    required: true,
  },
  admissionStatus: {
    type: String,
    required: true,
    default: "false",
  },
  rejectionMsg: {
    type: String,
    trim: true,
    default: "Admission Rejection Message...",
  },
  tutionFee: { type: Number, default: 0 },
  computerLabFund: { type: Number, default: 0 },
  scienceLabFund: { type: Number, default: 0 },
  sportsFund: { type: Number, default: 0 },
  buildingFund: { type: Number, default: 0 },
  smartClassFund: { type: Number, default: 0 },
  electricityCharges: { type: Number, default: 0 },
  stationaryCharges: { type: Number, default: 0 },
  uniformCharges: { type: Number, default: 0 },
  transportationCharges: { type: Number, default: 0 },
  propertyDamageCharge: { type: Number, default: 0 },
  prospectusFee: { type: Number, default: 0 },
  admissionFee: { type: Number, default: 0 },
  examinationFee: { type: Number, default: 0 },
  webSiteMaintenanceCharges: { type: Number, default: 0 },
  extraClassCharges: { type: Number, default: 0 },
  totalFees: { type: Number, default: 0 },
  paymentData: [],
});

const Admission = mongoose.model("ADMISSION", admissionSchema);
module.exports = Admission;
