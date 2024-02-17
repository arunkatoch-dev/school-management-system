import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentSessionStudentDetails,
  deleteAdmission,
} from "../../../../slices/admissionFormSlice";
import { Navigate } from "react-router-dom";
const DownloadPreview = lazy(() =>
  import("./DownloadApplication/DownloadPreview")
);

import FullPageLoader from "../../../Loaders/FullPageLoader";
import UsePdfGenerator from "../../../CustomHooks/UsePdfGenerator";
import MsgPopup from "../../../MsgPopup";

const ApplicationStatus = () => {
  const {
    userMsg,
    gettingAdmissionStatusError,
    noApplicationFound,
    applicationPendingState,
    applicationRejectionState,
    applicationApprovalState,
    isStudentDetailsLoading,
    rejectionMsg,
    rejected_Form_Deletion_Loading,
    studentDetails,
    rejectedFormDelition,
  } = useSelector((state) => state.admissionFormSlice);
  const dispatch = useDispatch();

  const deleteRejectedApplication = () => {
    dispatch(deleteAdmission(studentDetails._id));
  };
  const generatePdf = (e) => {
    e.preventDefault();
    UsePdfGenerator(studentDetails);
  };

  useEffect(() => {
    if (rejectedFormDelition) {
      Navigate("/admissions/newAdmission");
    }
    const studentId = localStorage.getItem("userId");
    const getSession = localStorage.getItem("currentSession");
    dispatch(
      currentSessionStudentDetails({
        studentId: studentId,
        session: getSession,
      })
    );
  }, [rejectedFormDelition, dispatch]);
  return (
    <>
      {isStudentDetailsLoading ? (
        <div className="w-full flex items-center justify-center">
          <FullPageLoader />
        </div>
      ) : (
        <section className="w-full flex flex-col">
          {noApplicationFound && (
            <Suspense fallback={<FullPageLoader />}>
              <MsgPopup msg={userMsg} />
            </Suspense>
          )}
          {gettingAdmissionStatusError && (
            <Suspense fallback={<FullPageLoader />}>
              <MsgPopup msg={userMsg} />
            </Suspense>
          )}
          {applicationPendingState && (
            <Suspense fallback={<FullPageLoader />}>
              <MsgPopup msg={userMsg} />
            </Suspense>
          )}
          {applicationRejectionState && (
            <div className="flex flex-col gap-3 items-center justify-center pt-5">
              <span className="text-sm sm:text-base md:text-xl text-red-600 font-bold">
                Oops! Your application is rejected. Check your email for details
                or check rejection msg below:
              </span>
              <div className="flex flex-col p-2 gap-2 w-[98%] border shadow-lg">
                <span className="text-sm sm:text-base md:text-xl text-blue-600 font-bold">
                  Rejection Details:
                </span>
                <p className="text-sm sm:text-base text-gray-700 tracking-wide">
                  {rejectionMsg}
                </p>
                <div className="w-full flex items-center justify-center pt-5 pb-1 md:pt-10 md:pb-3">
                  <button
                    className="px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 rounded-lg"
                    onClick={deleteRejectedApplication}
                  >
                    {rejected_Form_Deletion_Loading
                      ? "Deleting..."
                      : "Delete Application"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {applicationApprovalState && (
            <div className="flex flex-col py-2 gap-2 sm:py-5 sm:gap-5 items-center justify-center">
              <span className="text-xs sm:text-sm md:text-xl text-green-600 font-bold">
                Your Application is Approved. Scroll below to download your
                application:
              </span>
              <Suspense fallback={<FullPageLoader />}>
                <DownloadPreview />
              </Suspense>
              <button
                className="px-4 py-2 text-white bg-teal-600 tracking-wider hover:bg-teal-500 cursor-pointer"
                onClick={generatePdf}
              >
                Download
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default ApplicationStatus;
