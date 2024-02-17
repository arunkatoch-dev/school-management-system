import { useDispatch, useSelector } from "react-redux";
import { toggleFullDetails } from "../../../slices/adminHomepageSlice";
import { baseURL, previewApplicationStyles } from "../../constants";

const FullDetails = () => {
  const dispatch = useDispatch();
  const {
    superHeadingsContainer,
    superHeadings,
    headingsContainer,
    headingName,
    headingValue,
  } = previewApplicationStyles;
  const currentStudentData = useSelector(
    (state) => state.adminHomepageSlice.currentStudentData
  );

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
    totalFees,
    paymentData,
  } = currentStudentData;

  return (
    <div className="w-[95%] flex flex-col h-[38rem] absolute -top-24 overflow-auto shadow-lg z-20 bg-gray-50 border rounded-lg">
      <div
        className="absolute top-2 right-4 rounded-lg bg-pink-600 text-white cursor-pointer hover:bg-pink-700 px-4 py-2 hover:shadow-lg"
        onClick={(e) => {
          e.preventDefault();
          dispatch(toggleFullDetails(false));
        }}
      >
        Close
      </div>
      <div className="w-full pt-5">
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
              <span className={headingName}>Session:</span>
              <span className={headingValue}>{session ? session : "-"}</span>
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
            <div className="w-full p-5 gap-5 flex items-center flex-wrap">
              <span className={headingValue}>
                {subjectsDetails ? subjectsDetails : "-"}
              </span>
            </div>
            {/* +-+-+-+-+-+- */}
            <div className={superHeadingsContainer}>
              <span className={superHeadings}>Fees Details:</span>
            </div>
            {/* +-+-+-+-+-+-+-+- */}
            <div className="w-full p-5 gap-5 flex items-center flex-wrap">
              <span className={headingName}>Total Fees:</span>
              <span className={headingValue}>
                {totalFees ? `Rs ${totalFees}/-` : "-"}
              </span>
            </div>

            {paymentData.map((currElm) => {
              const {
                paymentId,
                paymentDate,
                paymentMonth,
                paymentYear,
                feeStatus,
              } = currElm;
              return (
                <div className={headingsContainer} key={paymentId}>
                  <span className={headingName}>Payment Id:</span>
                  <span className={headingValue}>{paymentId}</span>
                  <span className={headingName}>Payment Date:</span>
                  <span className={headingValue}>
                    {paymentDate}-{paymentMonth}-{paymentYear}
                  </span>
                  <span className={headingName}>Fee Status:</span>
                  <span className={headingValue}>{feeStatus}</span>
                </div>
              );
            })}
          </div>

          {/* To show photo and signature  (Right Body)*/}
          <div className="w-[20%] flex flex-col pt-10">
            <div className="flex items-center justify-center py-2">
              <span className="text-base uppercase tracking-widest text-green-700 font-bold">
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
      </div>
    </div>
  );
};

export default FullDetails;
