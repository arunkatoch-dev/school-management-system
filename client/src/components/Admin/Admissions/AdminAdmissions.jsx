import { Suspense, lazy } from "react";
// import AdminBoardSkeleton from "../Skeletons/AdminBoardSkeleton";
const DisplayAdmissions = lazy(() =>
  import("./DisplayAdmissions/DisplayAdmissions")
);
import AdminAdmissionPreview from "./DisplayAdmissions/AdminAdmissionPreview";
import { useSelector } from "react-redux";
import FullPageLoader from "../../Loaders/FullPageLoader";

const AdminAdmissions = () => {
  const toggleAdminAdmissionPanel = useSelector(
    (state) => state.admissionFormSlice.toggle_Admin_Admission_Panel_Preview
  );
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 -z-30 ">
      <div className="md:w-[80%] md:h-[70%] border flex flex-col rounded-xl shadow-xl relative">
        {/* Heading  */}
        <div className="w-full flex items-center rounded-tl-xl rounded-tr-xl justify-center bg-secondary  py-2">
          <span className="text-base md:text-xl text-primaryText">
            Admissions (Admin)
          </span>
        </div>
        {toggleAdminAdmissionPanel ? <AdminAdmissionPreview /> : null}
        <Suspense fallback={<FullPageLoader />}>
          <DisplayAdmissions />
        </Suspense>
      </div>
    </section>
  );
};

export default AdminAdmissions;
