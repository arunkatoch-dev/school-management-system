import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentSessionStudentDetails } from "../../../slices/admissionFormSlice";
const SelectClass = lazy(() => import("./AdmissionsHomepage/SelectClass"));
const ConditionalSelectClass = lazy(() =>
  import("./AdmissionsHomepage/ConditionalSelectClass")
);
import FullPageLoader from "../../Loaders/FullPageLoader";

const ChooseClass = () => {
  const { currentSession } = useSelector(
    (state) => state.adminHomepageSlice.adminData
  );
  const { noApplicationFound } = useSelector(
    (state) => state.admissionFormSlice
  );

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
  }, [dispatch, currentSession]);

  return (
    <>
      {noApplicationFound ? (
        <Suspense fallback={<FullPageLoader />}>
          <SelectClass />
        </Suspense>
      ) : (
        <Suspense fallback={<FullPageLoader />}>
          <ConditionalSelectClass />
        </Suspense>
      )}
    </>
  );
};

export default ChooseClass;
