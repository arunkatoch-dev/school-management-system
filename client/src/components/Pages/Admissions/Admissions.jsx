import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import { getAdminData } from "../../../slices/adminHomepageSlice";
import { currentSessionStudentDetails } from "../../../slices/admissionFormSlice";
import FullPageLoader from "../../Loaders/FullPageLoader";
const asideLinksCss =
  "text-xs sm:text-base font-medium text-gray-800 hover:text-primary focus:text-sm sm:focus:text-lg focus:text-primary transition ease-linear delay-200";

const Admissions = () => {
  const { loginStatus, isLoginPending } = useSelector(
    (state) => state.authSlice
  );
  const { currentSession } = useSelector(
    (state) => state.adminHomepageSlice.adminData
  );
  const isAdminDataPending = useSelector(
    (state) => state.adminHomepageSlice.isAdminDataPending
  );
  const { togglePaymentDetails, applicationApprovalState } = useSelector(
    (state) => state.admissionFormSlice
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const studentId = localStorage.getItem("userId");
    const getSession = localStorage.getItem("currentSession") || currentSession;
    dispatch(
      currentSessionStudentDetails({
        studentId: studentId,
        session: getSession,
      })
    );
    dispatch(getAdminData());
  }, [dispatch, currentSession]);

  return (
    <>
      <Header />
      <section className="w-full flex items-center justify-center ">
        {isLoginPending ? (
          <FullPageLoader />
        ) : loginStatus ? (
          <section className="w-full flex">
            {/* aside bar */}
            <aside className="w-[25%] gap-2 p-2 md:w-[20%] border-r sm:min-h-screen flex text flex-col sm:gap-5 sm:pl-5 sm:pt-5 ">
              <NavLink
                className={asideLinksCss}
                to="/admissions/latestInformation"
              >
                Latest Information
              </NavLink>
              <NavLink className={asideLinksCss} to="/admissions/prospectus">
                Prospectus
              </NavLink>
              <NavLink
                className={asideLinksCss}
                to="/admissions/academicCalander"
              >
                Academic Calander
              </NavLink>
              <NavLink className={asideLinksCss} to="/admissions/newAdmission">
                New Admission
              </NavLink>
              <NavLink
                className={asideLinksCss}
                to="/admissions/studentDetails"
              >
                Student Details
              </NavLink>
              <NavLink
                className={asideLinksCss}
                to="/admissions/admissionStatus"
              >
                Admission Status
              </NavLink>
              {applicationApprovalState && (
                <NavLink
                  className={asideLinksCss}
                  to="/admissions/paymentsHomepage"
                >
                  Fee Payment
                </NavLink>
              )}

              {togglePaymentDetails && (
                <NavLink className={asideLinksCss} to="/admissions/allpayments">
                  Payment Details
                </NavLink>
              )}
            </aside>

            {/* details */}

            <div className="w-[75%] md:w-[80%] min-h-screen">
              <Outlet />
            </div>
          </section>
        ) : null}

        {!loginStatus ? (
          <section className="w-full flex items-center justify-center">
            <div className="w-[90%] md:w-[60%] p-5 border flex flex-col items-center justify-center md:mt-40 gap-3">
              <span className="text-xl">
                Admissions are open for session
                {isAdminDataPending ? "getting..." : ` ${currentSession}`}
              </span>
              <span>
                Register/login to your account for new admission/fee
                payment/Instructions / courses details.
              </span>
            </div>
          </section>
        ) : null}
      </section>
    </>
  );
};

export default Admissions;
