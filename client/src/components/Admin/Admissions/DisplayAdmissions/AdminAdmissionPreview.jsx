/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import {
  adminAdmissionPanelReducer,
  updateAdmission,
  deleteAdmission,
} from "../../../../slices/admissionFormSlice";
import { baseURL, previewApplicationStyles } from "../../../constants";

const AdminAdmissionPreview = () => {
  const adminPreviewDetails = useSelector(
    (state) => state.admissionFormSlice.adminPreviewDetails
  );
  const {
    superHeadingsContainer,
    superHeadings,
    headingsContainer,
    headingName,
    headingValue,
  } = previewApplicationStyles;
  const {
    _id,
    studentName,
    studentClass,
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
    admissionStatus,
    subjectsDetails,
    studentImagePath,
    studentSignaturePath,
  } = adminPreviewDetails;

  const dispatch = useDispatch();

  // Event Handlers ----------->>>>>>>

  const closeBtnHandler = (e) => {
    e.preventDefault();
    dispatch(adminAdmissionPanelReducer(false));
  };

  const approveAdmissionHandler = (e) => {
    e.preventDefault();
    const approvalConfirmation = window.confirm(
      `Are you sure want to approve Admission Form.`
    );
    if (approvalConfirmation) {
      dispatch(updateAdmission({ id: _id, admissionStatus: "approved" }));
    }
  };
  const rejectAdmissionHandler = (e) => {
    e.preventDefault();
    const rejectionMsg = window.prompt(`Rejection Message`);
    if (rejectionMsg) {
      dispatch(
        updateAdmission({ id: _id, admissionStatus: "rejected", rejectionMsg })
      );
    } else {
      window.alert(`rejection message is necessary to inform user.`);
    }
  };

  const deleteRejectedFormHandler = (e) => {
    e.preventDefault();
    const deletionConfirmation = window.confirm(
      `Are you sure? Once deleted it will permanently delete application from database. `
    );
    if (deletionConfirmation) {
      dispatch(deleteAdmission(_id));
    }
  };

  return (
    <div className="w-[80rem] min-h-[35rem] flex flex-col border absolute top-[-5rem] left-[-6rem] bg-white shadow-lg">
      <div className="w-full flex items-center justify-between bg-secondary px-5">
        <span className="text-lg text-white font-semibold py-2">
          Preview Student Admission Form (Accept or Reject Application Panel)
        </span>
        <span
          className="text-lg text-white font-semibold py-2 hover:cursor-pointer hover:text-gray-200"
          onClick={closeBtnHandler}
        >
          Close
        </span>
      </div>
      {/* +-+-+-+-+-+-+-+-+-+-+- */}
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center relative">
          <div className="w-[70%] flex flex-col pb-5">
            {/* +-+-+-+-+-+- */}
            <div className={superHeadingsContainer}>
              <span className={superHeadings}>Personal Details:</span>
            </div>
            {/* +-+-+-+-+-+-+-+- */}
            <div className={headingsContainer}>
              <span className={headingName}>Application Id:</span>
              <span className={`${headingValue} font-bold font-mono`}>
                {_id ? _id : "-"}
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

            <div className={headingsContainer}>
              <span className={headingValue}>
                {subjectsDetails ? subjectsDetails : "-"}
              </span>
            </div>

            {/* +-+-+-+-+-+-+-+- */}
          </div>
          <div className="w-[23%] h-[20rem] absolute top-8 right-0 flex flex-col gap-2 items-center justify-center">
            <img
              src={`${baseURL}${studentImagePath}`}
              alt="student_image"
              loading="lazy"
              className="w-[70%] h-[70%]"
            />
            <img
              src={`${baseURL}${studentSignaturePath}`}
              alt="student_signature"
              loading="lazy"
              className="w-[70%] h-[20%]"
            />

            {admissionStatus === "approved" && (
              <span className="text-sm md:text-xl uppercase tracking-wider font-semibold text-green-600">
                Approved
              </span>
            )}
            {admissionStatus === "rejected" && (
              <span className="text-sm md:text-lg uppercase tracking-wider font-semibold text-red-600">
                Rejected
              </span>
            )}
            {admissionStatus === "pending" && (
              <span className="text-sm md:text-lg uppercase tracking-wider font-semibold text-red-600">
                Pending
              </span>
            )}
          </div>
        </div>
      </div>
      {/* -------- */}
      {admissionStatus === "pending" ? (
        <div className="w-full flex items-center justify-center gap-5 py-5">
          <button
            className="px-4 py-3 rounded-md bg-green-600 hover:bg-green-500 text-white text-lg font-semibold"
            onClick={approveAdmissionHandler}
          >
            Approve
          </button>
          <button
            className="px-4 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white text-lg font-semibold"
            onClick={rejectAdmissionHandler}
          >
            Reject
          </button>
        </div>
      ) : null}

      {admissionStatus === "rejected" && (
        <div className="w-full flex items-center justify-center gap-5 py-5">
          <button
            className="px-4 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white text-lg font-semibold"
            onClick={deleteRejectedFormHandler}
          >
            Delete
          </button>
        </div>
      )}
      {/* +-+-+-+-+-+-+-+-+-+-+- */}
    </div>
  );
};

export default AdminAdmissionPreview;
