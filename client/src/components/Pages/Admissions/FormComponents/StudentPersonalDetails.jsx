/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { newAdmissionComponentStyles } from "../../../constants";
// import { useSelector } from "react-redux";

const {
  inputOuterContainer,
  inputInnerContainer,
  labelField,
  inputField,
  mandatoryFieldSign,
  errorContainer,
  errorField,
} = newAdmissionComponentStyles;

const StudentPersonalDetails = ({ admissionFormData }) => {
  const params = useParams();
  const userId = localStorage.getItem("userId");
  const studentClass = params.class;
  const { values, errors, touched, handleBlur, handleChange } =
    admissionFormData;
  return (
    <>
      <div className="w-full items-center md:pl-3">
        <span className="text-base md:text-xl tracking-wider font-bold py-2">
          Personal Details:
        </span>
      </div>
      <div className="w-full p-1 gap-2 md:px-5 md:py-2 md:gap-5 flex items-center flex-wrap">
        {/* ----------  Student's Email (user-ID) ----------- */}
        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentId" className={labelField}>
              UserId:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="email"
              autoComplete="off"
              name="studentId"
              value={userId}
              id="studentId"
              readOnly
              className={`${inputField} cursor-not-allowed`}
            />
          </div>
        </div>

        {/* ----------   Student's Name  ----------- */}
        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentName" className={labelField}>
              Name:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="studentName"
              value={values.studentName}
              id="studentName"
              className={inputField}
              placeholder="Enter your Full Name"
            />
          </div>
          {errors.studentName && touched.studentName ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.studentName}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Gender  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentGender" className={labelField}>
              Gender:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <select
              name="studentGender"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.studentGender}
              id="studentGender"
              className={inputField}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {errors.studentGender && touched.studentGender ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.studentGender}</span>
            </div>
          ) : null}
        </div>
        {/* ----------   Student's Class  ----------- */}
        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentClass" className={labelField}>
              Class:
            </label>
            <input
              type="text"
              name="studentClass"
              value={studentClass}
              id="studentClass"
              readOnly
              className={`${inputField} cursor-not-allowed`}
            />
          </div>
        </div>

        {/* ----------   Student's Date of Birth  ----------- */}
        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentDOB" className={labelField}>
              DOB:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="date"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="studentDOB"
              value={values.studentDOB}
              id="studentDOB"
              className={inputField}
              placeholder="DOB"
            />
          </div>
          {errors.studentDOB && touched.studentDOB ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.studentDOB}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Religion  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentReligion" className={labelField}>
              Religion:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <select
              name="studentReligion"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.studentReligion}
              id="studentReligion"
              className={inputField}
            >
              <option value="Hinduism">Hinduism</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Jainism">Jainism</option>
              <option value="Sikhism">Sikhism</option>
              <option value="Christianity">Christianity</option>
              <option value="Judaism">Judaism</option>
              <option value="Islam">Islam</option>
              <option value="Muslim">Muslim</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {errors.studentReligion && touched.studentReligion ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.studentReligion}</span>
            </div>
          ) : null}
        </div>
        {/* ----------   Student's Catagory  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="studentReligion" className={labelField}>
              Catagory:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <select
              name="studentCatagory"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.studentCatagory}
              id="studentCatagory"
              className={inputField}
            >
              <option value="General">General</option>
              <option value="Scheduled Castes">Scheduled Castes (SCs)</option>
              <option value="Scheduled Tribes">Scheduled Tribes (STs)</option>
              <option value="Other Backward Classes">
                Other Backward Classes (OBCs)
              </option>
              <option value="Economically Weaker Sections">
                Economically Weaker Sections (EWS)
              </option>
              <option value="Others">Others</option>
            </select>
          </div>
          {errors.studentCatagory && touched.studentCatagory ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.studentCatagory}</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default StudentPersonalDetails;
