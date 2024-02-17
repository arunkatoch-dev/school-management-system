/* eslint-disable react/prop-types */
import { newAdmissionComponentStyles } from "../../../constants";

const {
  inputOuterContainer,
  inputInnerContainer,
  labelField,
  inputField,
  mandatoryFieldSign,
  errorContainer,
  errorField,
} = newAdmissionComponentStyles;

const StudentFamilyDetails = ({admissionFormData}) => {
  const { values, errors, touched, handleBlur, handleChange } =
    admissionFormData;
  return (
    <>
      <div className="w-full items-center md:pl-3">
        <span className="text-base md:text-xl tracking-wider font-bold py-2">
          Family Details:
        </span>
      </div>
      <div className="w-full p-1 gap-2 md:px-5 md:py-2 md:gap-5 flex items-center flex-wrap">
        {/* ----------   Student's Father Name  ----------- */}
        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="fatherName" className={labelField}>
              Father&#39;s Name:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="fatherName"
              value={values.fatherName}
              id="fatherName"
              className={inputField}
              placeholder="Enter your Father's Name"
            />
          </div>
          {errors.fatherName && touched.fatherName ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.fatherName}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Father Occupation  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="fatherOccupation" className={labelField}>
              Occupation:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="fatherOccupation"
              value={values.fatherOccupation}
              id="fatherOccupation"
              className={inputField}
              placeholder="Enter your Father's Occupation"
            />
          </div>
          {errors.fatherOccupation && touched.fatherOccupation ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.fatherOccupation}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Father  Annual Income  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="fatherAnnualIncome" className={labelField}>
              Annual Income:
            </label>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="fatherAnnualIncome"
              value={values.fatherAnnualIncome}
              id="fatherAnnualIncome"
              className={inputField}
              placeholder="Enter your Father's Annual Income"
            />
          </div>
          {errors.fatherAnnualIncome && touched.fatherAnnualIncome ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.fatherAnnualIncome}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Father Phone  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="fatherPhone" className={labelField}>
              Phone:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="fatherPhone"
              value={values.fatherPhone}
              id="fatherPhone"
              className={inputField}
              placeholder="Enter your Father's Phone Number"
            />
          </div>
          {errors.fatherPhone && touched.fatherPhone ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.fatherPhone}</span>
            </div>
          ) : null}
        </div>
        {/* ----------   Student's Father Email  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="fatherEmail" className={labelField}>
              Email:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="email"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="fatherEmail"
              value={values.fatherEmail}
              id="fatherEmail"
              className={inputField}
              placeholder="Enter your Father's Email"
            />
          </div>
          {errors.fatherEmail && touched.fatherEmail ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.fatherEmail}</span>
            </div>
          ) : null}
        </div>
        {/* ----------   Student Mother's Name  ----------- */}
        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="motherName" className={labelField}>
              Mother&#39;s Name:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="motherName"
              value={values.motherName}
              id="motherName"
              className={inputField}
              placeholder="Enter your Mother's Name"
            />
          </div>
          {errors.motherName && touched.motherName ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.motherName}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Mother's Occupation  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="motherOccupation" className={labelField}>
              Occupation:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="motherOccupation"
              value={values.motherOccupation}
              id="motherOccupation"
              className={inputField}
              placeholder="Enter your Father's Occupation"
            />
          </div>
          {errors.motherOccupation && touched.motherOccupation ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.motherOccupation}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Mother's  Annual Income  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="motherAnnualIncome" className={labelField}>
              Annual Income:
            </label>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="motherAnnualIncome"
              value={values.motherAnnualIncome}
              id="motherAnnualIncome"
              className={inputField}
              placeholder="Enter your mother's Annual Income"
            />
          </div>
          {errors.motherAnnualIncome && touched.motherAnnualIncome ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.motherAnnualIncome}</span>
            </div>
          ) : null}
        </div>

        {/* ----------   Student's Mother's Phone  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="motherPhone" className={labelField}>
              Phone:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="motherPhone"
              value={values.motherPhone}
              id="motherPhone"
              className={inputField}
              placeholder="Enter your Mother's Phone Number"
            />
          </div>
          {errors.motherPhone && touched.motherPhone ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.motherPhone}</span>
            </div>
          ) : null}
        </div>
        {/* ----------   Student's Mother's Email  ----------- */}

        <div className={inputOuterContainer}>
          <div className={inputInnerContainer}>
            <label htmlFor="fatherEmail" className={labelField}>
              Email:
            </label>
            <span className={mandatoryFieldSign}>*</span>
            <input
              type="email"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              name="motherEmail"
              value={values.motherEmail}
              id="motherEmail"
              className={inputField}
              placeholder="Enter your Mother's Email"
            />
          </div>
          {errors.motherEmail && touched.motherEmail ? (
            <div className={errorContainer}>
              <span className={errorField}>{errors.motherEmail}</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default StudentFamilyDetails;
