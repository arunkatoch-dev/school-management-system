/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import {
  newAdmission,
  toggleApplicationPreview,
} from "../../../../slices/admissionFormSlice";
import { previewApplicationStyles, subjects } from "../../../constants";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const {
  superHeadingsContainer,
  superHeadings,
  headingsContainer,
  headingName,
  headingValue,
} = previewApplicationStyles;
const PreviewApplication = () => {
  const formData = useSelector((state) => state.admissionFormSlice.formData);
  const isNewAdmissionLoading = useSelector(
    (state) => state.admissionFormSlice.isNewAdmissionLoading
  );
  const newAdmissionSent = useSelector(
    (state) => state.admissionFormSlice.newAdmissionSent
  );
  const imageData = useSelector((state) => state.admissionFormSlice.images);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const feesDetails = useSelector(
    (state) => state.admissionFormSlice.feesDetails
  );
  const { currentSession } = useSelector(
    (state) => state.adminHomepageSlice.adminData
  );
  const studentId = localStorage.getItem("userId");

  const {
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
  } = feesDetails;

  const selectedClass = params.class;
  const {
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
  } = formData;
  const { showImage, showSignature } = imageData;
  const clickHandler = (e) => {
    e.preventDefault();
    const confirmBox = window.confirm(
      `I confirm that all the information given by me is correct/true as per my knowledge. If any information given by me is false or incorrect then your admission form will be rejected`
    );
    if (confirmBox) {
      const formData = new FormData();
      formData.append("session", currentSession);
      formData.append("studentId", studentId);
      formData.append("studentClass", selectedClass);
      formData.append("studentName", studentName);
      formData.append("studentGender", studentGender);
      formData.append("studentDOB", studentDOB);
      formData.append("studentReligion", studentReligion);
      formData.append("studentCatagory", studentCatagory);
      formData.append("fatherName", fatherName);
      formData.append("fatherOccupation", fatherOccupation);
      formData.append("fatherAnnualIncome", fatherAnnualIncome);
      formData.append("fatherPhone", fatherPhone);
      formData.append("fatherEmail", fatherEmail);
      formData.append("motherName", motherName);
      formData.append("motherOccupation", motherOccupation);
      formData.append("motherAnnualIncome", motherAnnualIncome);
      formData.append("motherPhone", motherPhone);
      formData.append("motherEmail", motherEmail);
      formData.append("subjectsDetails", subjects[selectedClass]);
      formData.append("studentImage", imageData.studentImage);
      formData.append("studentSignature", imageData.studentSignature);
      formData.append("admissionStatus", "pending");
      formData.append("tutionFee", tutionFee);
      formData.append("computerLabFund", computerLabFund);
      formData.append("scienceLabFund", scienceLabFund);
      formData.append("sportsFund", sportsFund);
      formData.append("buildingFund", buildingFund);
      formData.append("smartClassFund", smartClassFund);
      formData.append("electricityCharges", electricityCharges);
      formData.append("stationaryCharges", stationaryCharges);
      formData.append("uniformCharges", uniformCharges);
      formData.append("transportationCharges", transportationCharges);
      formData.append("propertyDamageCharge", propertyDamageCharge);
      formData.append("prospectusFee", prospectusFee);
      formData.append("admissionFee", admissionFee);
      formData.append("examinationFee", examinationFee);
      formData.append("webSiteMaintenanceCharges", webSiteMaintenanceCharges);
      formData.append("extraClassCharges", extraClassCharges);
      formData.append("totalFees", totalFees);
      dispatch(newAdmission(formData));
    } else {
      window.alert(`Plz accept the conformation to proceed further.`);
    }
  };

  useEffect(() => {
    if (newAdmissionSent) {
      navigate("/admissions/admissionStatus");
    }
  }, [navigate, newAdmissionSent]);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-2 bg-secondary">
        <span className="text-base md:text-lg text-primaryText font-bold font-primaryFont tracking-wider">
          Preview Admission Form
        </span>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center relative">
          <div className="w-[70%] flex flex-col">
            {/* +-+-+-+-+-+- */}
            <div className={superHeadingsContainer}>
              <span className={superHeadings}>Personal Details:</span>
            </div>
            {/* +-+-+-+-+-+-+-+- */}
            <div className={headingsContainer}>
              <span className={headingName}>Name:</span>
              <span className={headingValue}>
                {studentName ? studentName : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Student Id:</span>
              <span className={headingValue}>
                {studentId ? studentId : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Gender:</span>
              <span className={headingValue}>
                {studentGender ? studentGender : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>DOB:</span>
              <span className={headingValue}>
                {studentDOB ? studentDOB : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Religion:</span>
              <span className={headingValue}>
                {studentReligion ? studentReligion : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Catagory:</span>
              <span className={headingValue}>
                {studentCatagory ? studentCatagory : "-"}
              </span>
            </div>
            {/* +-+-+-+-+-+- */}
            <div className={superHeadingsContainer}>
              <span className={superHeadings}>Family Details:</span>
            </div>
            {/* +-+-+-+-+-+-+-+- */}
            <div className={headingsContainer}>
              <span className={headingName}>Father's Name:</span>
              <span className={headingValue}>
                {fatherName ? fatherName : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Occupation:</span>
              <span className={headingValue}>
                {fatherOccupation ? fatherOccupation : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>AnnualIncome:</span>
              <span className={headingValue}>
                {fatherAnnualIncome ? fatherAnnualIncome : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Phone:</span>
              <span className={headingValue}>
                {fatherPhone ? fatherPhone : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Email:</span>
              <span className={headingValue}>
                {fatherEmail ? fatherEmail : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Mother's Name:</span>
              <span className={headingValue}>
                {motherName ? motherName : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Occupation:</span>
              <span className={headingValue}>
                {motherOccupation ? motherOccupation : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>AnnualIncome:</span>
              <span className={headingValue}>
                {motherAnnualIncome ? motherAnnualIncome : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Phone:</span>
              <span className={headingValue}>
                {motherPhone ? motherPhone : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Email:</span>
              <span className={headingValue}>
                {motherEmail ? motherEmail : "-"}
              </span>
            </div>
            {/* +-+-+-+-+-+- */}
            <div className={superHeadingsContainer}>
              <span className={superHeadings}>Subjects Details:</span>
            </div>
            {/* +-+-+-+-+-+-+-+- */}
            <div className="w-full p-2 gap-2 md:p-5 md:gap-5 flex items-center flex-wrap">
              {subjects[selectedClass]?.map((subjectName, index) => (
                <div className="border p-3 text-xs md:text-base" key={index}>
                  {subjectName}
                </div>
              ))}
            </div>
            {/* +-+-+-+-+-+-+-+- */}
          </div>
          <div className="w-[23%] h-[20rem] absolute top-8 right-0 flex flex-col gap-2 items-center justify-center">
            <span className="text-center text-xs md:text-base font-bold pb-2">
              session: {currentSession}
            </span>
            <img
              src={showImage}
              alt="student_image"
              loading="lazy"
              className="w-[70%] h-[40%] md:h-[70%]"
            />
            <img
              src={showSignature}
              alt="student_signature"
              loading="lazy"
              className="w-[70%] h-[20%]"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-5 py-5">
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-base font-bold text-white rounded-md"
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleApplicationPreview(false));
            }}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-base font-bold text-white rounded-md"
            onClick={clickHandler}
          >
            {isNewAdmissionLoading ? "Submitting" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PreviewApplication;
