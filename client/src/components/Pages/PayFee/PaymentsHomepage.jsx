import { useDispatch, useSelector } from "react-redux";
import FullPageLoader from "../../Loaders/FullPageLoader";
import { Suspense, lazy, useEffect } from "react";
import { currentSessionStudentDetails } from "../../../slices/admissionFormSlice";
import MsgPopup from "../../MsgPopup";
const PaymentDetails = lazy(() => import("./PaymentDetails"));

const PaymentsHomepage = () => {
  const {
    userMsg,
    noApplicationFound,
    applicationApprovalState,
    isStudentDetailsLoading,
  } = useSelector((state) => state.admissionFormSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    const studentId = localStorage.getItem("userId");
    const getSession = localStorage.getItem("currentSession");
    dispatch(
      currentSessionStudentDetails({
        studentId: studentId,
        session: getSession,
      })
    );
  }, [dispatch]);
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
          {applicationApprovalState && (
            <Suspense fallback={<FullPageLoader />}>
              <PaymentDetails />
            </Suspense>
          )}
        </section>
      )}
    </>
  );
};

export default PaymentsHomepage;
