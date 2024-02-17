import { useDispatch, useSelector } from "react-redux";
import { toggleStudentDetailsrReducer } from "../../../../slices/admissionFormSlice";
import {
  baseURL,
  previewApplicationStyles,
  schoolName,
} from "../../../constants";
import UsePdfGenerator from "../../../CustomHooks/UsePdfGenerator";

const DownloadStudentDetail = () => {
  const studentSessionDetailsDownload = useSelector(
    (state) => state.admissionFormSlice.studentSessionDetailsDownload
  );
  const {
    superHeadingsContainer,
    superHeadings,
    headingsContainer,
    headingName,
    headingValue,
  } = previewApplicationStyles;
  const generatePdf = (e) => {
    e.preventDefault();
    UsePdfGenerator(studentSessionDetailsDownload);
  };
  const {
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
  } = studentSessionDetailsDownload;
  const dispatch = useDispatch();

  return (
    <div className="absolute flex flex-col top-5 w-[95%] bg-gray-50 h-[36rem] rounded-lg shadow-lg z-20">
      <div className="w-full relative flex flex-col overflow-auto">
        <span
          className="absolute right-5 top-2 font-bold text-base tracking-wider text-red-500 hover:text-red-600 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              toggleStudentDetailsrReducer({
                expandView: false,
                studentDetails: {},
              })
            );
          }}
        >
          Close
        </span>
        {/* Header  */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-sm sm:text-base md:text-2xl font-bold tracking-wider text-blue-900">
            {schoolName}
          </span>
          <span className="text-sm md:text-base font-bold capitalize text-gray-700 tracking-wider">
            An Educated Mind can teach many
          </span>
          <span className="text-sm sm:text-base font-semibold text-gray-800">
            Session {session}
          </span>
        </div>
        {/* Body */}
        <div className="flex">
          {/* Left Body */}
          <div className="w-[80%] flex flex-col">
            <div className={superHeadingsContainer}>
              <span className={superHeadings}>Personal Details:</span>
            </div>
            {/* +-+-+-+-+-+-+-+- */}
            <div className={headingsContainer}>
              <span className={headingName}>Student Id:</span>
              <span className={headingValue}>
                {studentId ? studentId : "-"}
              </span>
            </div>
            <div className={headingsContainer}>
              <span className={headingName}>Name:</span>
              <span className={headingValue}>
                {studentName ? studentName : "-"}
              </span>
            </div>

            <div className={headingsContainer}>
              <span className={headingName}>Class:</span>
              <span className={headingValue}>
                {studentClass ? studentClass : "-"}
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
              <span className={headingName}>Father&apos;s Name:</span>
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
              <span className={headingName}>Mother&apos;s Name:</span>
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
            <div className="w-full p-2 sm:p-5 sm:gap-5 flex items-center flex-wrap">
              <span className={headingValue}>
                {subjectsDetails ? subjectsDetails : "-"}
              </span>
            </div>
          </div>

          {/* To show photo and signature  (Right Body)*/}
          <div className="w-[20%] flex flex-col sm:p-4">
            <div className="flex items-center justify-center py-2">
              <span className="text-xs md:text-base uppercase tracking-widest text-green-700 font-bold">
                {admissionStatus ? "Accepted" : "Not Confirmed"}
              </span>
            </div>
            <div className="w-full flex flex-col">
              <img
                src={`${baseURL}${studentImagePath}`}
                alt="student_image"
                loading="lazy"
                className="w-full border"
              />
              <img
                src={`${baseURL}${studentSignaturePath}`}
                alt="student_signature"
                loading="lazy"
                className="w-full h-16"
              />
            </div>
          </div>
        </div>
        <button
          className="py-2 text-white bg-teal-600 tracking-wider hover:bg-teal-500 cursor-pointer"
          onClick={generatePdf}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default DownloadStudentDetail;
