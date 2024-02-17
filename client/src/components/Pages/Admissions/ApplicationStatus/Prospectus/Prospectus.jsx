import { useSelector } from "react-redux";

const Prospectus = () => {
  const adminData = useSelector((state) => state.adminHomepageSlice.adminData);
  const isAdminDataPending = useSelector(
    (state) => state.adminHomepageSlice.isAdminDataPending
  );
  return (
    <div className="w-full flex items-center justify-center h-[20rem] px-2 sm:min-h-screen">
      <span className="text-sm sm:text-2xl font-bold text-red-600">
        Prospectus for the session 
        {isAdminDataPending ? "getting..." : ` ${adminData.currentSession}`} may
        upload soon.
      </span>
    </div>
  );
};

export default Prospectus;
