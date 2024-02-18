import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let newAdmissionSchema = Yup.object({
  session: Yup.string(),
  studentName: Yup.string()
    .min(3, "(Too Short!)")
    .max(30, "(Too Long!)")
    .required("(Please Enter your Full Name)"),
  studentGender: Yup.string().required("(Please Enter your Gender)"),
  studentDOB: Yup.string().required("(Please Enter your DOB)"),
  studentReligion: Yup.string().required("(Please Select your Religion)"),
  studentCatagory: Yup.string().required("(Please Select your Catagory)"),
  fatherName: Yup.string()
    .min(3, "(Too Short!)")
    .max(30, "(Too Long!)")
    .required("(Please Enter your Father's Name)"),
  fatherOccupation: Yup.string()
    .min(2, "(Too Short!)")
    .max(50, "(Too Long!)")
    .required("(Please Enter your Father's Occupation)"),
  fatherAnnualIncome: Yup.string(),
  fatherPhone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "(Phone number must be of 10 digits)")
    .max(10, "(Phone number not greate than 10 digits)"),
  fatherEmail: Yup.string().email("Please type a valid email"),
  motherName: Yup.string()
    .min(2, "(Too Short!)")
    .max(30, "(Too Long!)")
    .required("(Please Enter your Mother's Name)"),
  motherOccupation: Yup.string()
    .min(2, "(Too Short!)")
    .max(50, "(Too Long!)")
    .required("(Please Enter your Father's Occupation)"),
  motherAnnualIncome: Yup.string(),
  motherPhone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "(Phone number must be of 10 digits)")
    .max(10, "(Phone number not greate than 10 digits)"),
  motherEmail: Yup.string().email("Please type a valid email"),
});

export default newAdmissionSchema;
