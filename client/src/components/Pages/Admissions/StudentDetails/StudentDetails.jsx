import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allSessionsStudentDetails,
  toggleStudentDetailsrReducer,
} from "../../../../slices/admissionFormSlice";
import FullPageLoader from "../../../Loaders/FullPageLoader";
import { baseURL } from "../../../constants";
const DownloadStudentDetail = lazy(() => import("./DownloadStudentDetail"));

const StudentDetails = () => {
  const {
    noStudentDetailsFound,
    studentDetailsUserMsg,
    allSessionsDetails,
    toggleDetailsPreview,
    isAllSessionsDetailsLoading,
  } = useSelector((state) => state.admissionFormSlice);

  const dispatch = useDispatch();
  const fullScreenPreview = (e, details) => {
    e.preventDefault();
    dispatch(
      toggleStudentDetailsrReducer({
        expandView: true,
        studentDetails: details,
      })
    );
  };

  useEffect(() => {
    const studentId = localStorage.getItem("userId");
    dispatch(allSessionsStudentDetails({ studentId }));
  }, [dispatch]);
  return (
    <>
      {isAllSessionsDetailsLoading ? (
        <FullPageLoader />
      ) : noStudentDetailsFound ? (
        <div className="w-[90%] flex flex-col m-auto mt-24 shadow-xl">
          <div className="w-full flex flex-col items-center justify-center p-5 border rounded-lg">
            <span className="text-sm sm:text-lg text-red-500 font-bold">
              {studentDetailsUserMsg}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-5 px-2 py-10 items-center bg-white justify-center relative">
          {allSessionsDetails.map((details) => {
            const { _id, studentImagePath, session, admissionStatus } = details;
            if (admissionStatus === "approved") {
              return (
                <div
                  className="w-40 h-40 sm:w-56 sm:h-56 border cursor-pointer flex flex-col items-center justify-center hover:shadow-lg"
                  key={_id + 1}
                  onClick={(e) => {
                    fullScreenPreview(e, details);
                  }}
                >
                  <img
                    src={`${baseURL}${studentImagePath}`}
                    alt="student image"
                    className="w-full h-[80%]"
                    loading="lazy"
                  />
                  <div className="w-full h-[20%] flex items-center justify-center">
                    <span className="text-sm sm:text-base text-blue-600">
                      Session: {session}
                    </span>
                  </div>
                </div>
              );
            }

            if (admissionStatus === "pending") {
              return (
                <div
                  className="w-[90%] flex flex-col m-auto mt-24 shadow-xl"
                  key={_id + 2}
                >
                  <div className="w-full flex flex-col items-center justify-center p-5 border rounded-lg">
                    <span className="text-sm sm:text-lg text-red-500 font-bold">
                      Your current application is in pending stage
                    </span>
                  </div>
                </div>
              );
            }
            if (admissionStatus === "rejected") {
              return (
                <div
                  className="w-[90%] flex flex-col m-auto mt-24 shadow-xl"
                  key={_id + 3}
                >
                  <div className="w-full flex flex-col items-center justify-center p-5 border rounded-lg">
                    <span className="text-sm sm:text-lg text-red-500 font-bold">
                      Your current application is rejected. Apply with new
                      application
                    </span>
                  </div>
                </div>
              );
            }
          })}
          {toggleDetailsPreview ? (
            <Suspense fallback={<FullPageLoader />}>
              <DownloadStudentDetail />
            </Suspense>
          ) : null}
        </div>
      )}
    </>
  );
};
export default StudentDetails;
