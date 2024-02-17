import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminAdmissionPanelReducer,
  adminAdmissionPreviewDetailsReducer,
  getAdmissions,
} from "../../../../slices/admissionFormSlice";
import { baseURL } from "../../../constants";

const DisplayAdmissions = () => {
  const { admissions, admissionStatusLoading, deleteAdmissionLoading } =
    useSelector((state) => state.admissionFormSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    document.title =
      "Admin Panel - Admissions ---> Approve | Reject | Admission Status.";
    dispatch(getAdmissions());
  }, [dispatch, admissionStatusLoading, deleteAdmissionLoading]);

  return (
    <>
      {admissions.map((currAdmission, index) => {
        return (
          <div
            className="w-full flex rounded-sm shadow-md p-2 bg-white"
            key={currAdmission._id}
          >
            <div className="w-[10%] flex items-center justify-center bg-secondary">
              <span className="text-base md:text-lg text-primaryText">
                {index + 1}.
              </span>
            </div>
            <div className="w-[70%] flex justify-center flex-col gap-2 border px-2 tracking-wider">
              <span className="flex gap-2 px-2 text-base font-light items-center">
                <strong className="font-bold text-xs md:text-lg">
                  Student Name:{" "}
                </strong>
                {currAdmission.studentName}
              </span>
              <span className="flex gap-2 px-2 text-base font-light items-center tracking-wider">
                <strong className="font-bold text-xs md:text-lg">DOB:</strong>
                {currAdmission.studentDOB}
              </span>

              {currAdmission.admissionStatus === "pending" && (
                <span className="flex gap-2 px-2 text-base font-light items-center tracking-wider">
                  <strong className="font-bold text-xs md:text-lg">
                    Admission status:
                  </strong>
                  <span className="text-secondary uppercase">Pending</span>
                </span>
              )}
              {currAdmission.admissionStatus === "approved" && (
                <span className="flex gap-2 px-2 text-base font-light items-center tracking-wider">
                  <strong className="font-bold text-xs md:text-lg">
                    Admission status:
                  </strong>
                  <span className="text-green-600 uppercase text-xs md:text-lg">
                    Approved
                  </span>
                </span>
              )}
              {currAdmission.admissionStatus === "rejected" && (
                <span className="flex gap-2 px-2 text-base font-light items-center tracking-wider">
                  <strong className="font-bold text-xs md:text-lg">
                    Admission status:
                  </strong>
                  <span className="text-red-600 uppercase text-xs md:text-lg">
                    Rejected
                  </span>
                </span>
              )}
            </div>
            <div className="md:w-[10%] flex items-center justify-end ">
              <img
                src={`${baseURL}${currAdmission.studentImagePath}`}
                alt={currAdmission.studentImagePath}
                className="w-[5rem]"
              />
            </div>
            <div className="md:w-[20%] flex items-center justify-center">
              <button
                className="text-lg text-white font-medium border p-1 md:px-4 md:py-2 rounded-sm bg-green-600  hover:bg-green-700 hover:cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(adminAdmissionPanelReducer(true));
                  dispatch(adminAdmissionPreviewDetailsReducer(currAdmission));
                }}
              >
                Preview
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAdmissions;
