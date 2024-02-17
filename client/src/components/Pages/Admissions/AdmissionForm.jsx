import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import newAdmissionSchema from "../../../schemas/newAdmissionSchema";
import StudentPersonalDetails from "./FormComponents/StudentPersonalDetails";
import StudentFamilyDetails from "./FormComponents/StudentFamilyDetails";
import StudentImageAndSign from "./FormComponents/StudentImageAndSign";
import { newAdmissionFormInitialValues } from "../../constants";
import PreviewApplication from "./FormComponents/PreviewApplication";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeeDetails,
  studentFormData,
  toggleApplicationPreview,
} from "../../../slices/admissionFormSlice";
import SubjectsDetails from "./FormComponents/SubjectsDetails";

const AdmissionForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const imageValue = useSelector((state) => state.admissionFormSlice.images);
  const previewApplication = useSelector(
    (state) => state.admissionFormSlice.previewApplication
  );

  const { currentSession } = useSelector(
    (state) => state.adminHomepageSlice.adminData
  );
  const isAdminDataPending = useSelector(
    (state) => state.adminHomepageSlice.isAdminDataPending
  );
  const selectedClass = params.class;
  const admissionFormData = useFormik({
    initialValues: newAdmissionFormInitialValues,
    validationSchema: newAdmissionSchema,
    onSubmit: (values) => {
      const { fatherEmail, fatherPhone, motherEmail, motherPhone } = values;
      dispatch(studentFormData(values));
      if (!fatherEmail && !motherEmail) {
        window.alert(
          `Please provide at least 1 email. Either is of your father or of your mother.`
        );
      } else if (!fatherPhone && !motherPhone) {
        window.alert(
          `Please provide at least 1 Phone Number. Either is of your Father or of your mother. `
        );
      } else if (
        imageValue.studentImage === null &&
        imageValue.studentSignature === null
      ) {
        window.alert(`Plz upload Image and signature`);
      } else {
        dispatch(toggleApplicationPreview(true));
        dispatch(getFeeDetails(selectedClass));
      }
    },
  });

  const { handleSubmit } = admissionFormData;

  return (
    <>
      <section className="w-full flex flex-wrap md:flex-nowrap items-center justify-center">
        <div className="w-full flex flex-col shadow-xl">
          {!previewApplication ? (
            <>
              <div className="w-full flex flex-col items-center justify-center py-2 bg-secondary">
                <span className="text-base md:text-lg text-primaryText font-bold font-primaryFont tracking-wider">
                  {selectedClass} Class Admission Form
                </span>
              </div>

              {/* Body */}

              <form
                className="w-full flex flex-col md:pl-2"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-wrap items-center justify-between px-2 py-3">
                  <span className="text-base tracking-wider font-primaryFont text-red-500 font-light">
                    Required Fields are marked with *
                  </span>
                  <div className="flex gap-2 items-center justify-center">
                    <span className="text-sm md:text-base font-bold text-blue-500">
                      Academic Session:
                    </span>
                    <input
                      type="text"
                      name="session"
                      id="session"
                      readOnly
                      value={
                        isAdminDataPending ? "getting..." : ` ${currentSession}`
                      }
                      className="text-sm md:text-base font-bold text-blue-500 outline-none bg-transparent "
                    />
                  </div>
                </div>

                <StudentPersonalDetails admissionFormData={admissionFormData} />
                <StudentFamilyDetails admissionFormData={admissionFormData} />
                <SubjectsDetails />
                <StudentImageAndSign admissionFormData={admissionFormData} />
                <div className="w-full flex items-center justify-center py-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-5 py-2 bg-secondary text-base text-primaryText rounded-md hover:bg-teal-600"
                  >
                    Next
                  </button>
                </div>
              </form>
            </>
          ) : (
            <PreviewApplication />
          )}
          {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ */}
        </div>
      </section>
    </>
  );
};

export default AdmissionForm;
