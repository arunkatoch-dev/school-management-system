export const baseURL = "https://school-management-system-dy5j.onrender.com";
// export const baseURL = "http://localhost:8080/";
// export const frontEndURL = "http://localhost:5173/";
export const frontEndURL = "https://school-management-system-umber.vercel.app/";
export const schoolName = "Model Public School";
export const newAdmissionComponentStyles = {
  inputOuterContainer:
    "w-[100%] md:w-[50%] lg:w-[30%] border md:h-24 p-2 flex gap-1 flex-col items-center justify-center",
  inputInnerContainer: "w-full flex items-center gap-2 justify-center",
  labelField: "text-sm md:text-base font-bold",
  inputField:
    "w-full border px-2 py-1 text-xs sm:text-sm md:text-base border-gray-500 outline-secondary",
  mandatoryFieldSign: "text-base md:text-xl tracking-wide text-red-500",
  errorContainer: "w-full flex items-center justify-center",
  errorField: "text-sm md:text-base tracking-wide text-red-500",
};

export const newAdmissionFormInitialValues = {
  session: "",
  studentClass: "",
  studentName: "",
  studentGender: "Male",
  studentDOB: "",
  studentPhone: "",
  studentEmail: "",
  studentReligion: "Hinduism",
  studentCatagory: "General",
  fatherName: "",
  fatherOccupation: "",
  fatherAnnualIncome: "",
  fatherPhone: "",
  fatherEmail: "",
  motherName: "",
  motherOccupation: "",
  motherAnnualIncome: "",
  motherPhone: "",
  motherEmail: "",
};

export const subjects = {
  Nursery: [
    "English",
    "Mathematics",
    "Environmental Studies(EVS)",
    "Rhymes and Stories",
    "Arts and Crafts",
    "General Activity",
  ],
  KG: [
    "English",
    "Mathematics",
    "Environmental Science (EVS)",
    "General Awareness",
    "Hindi",
  ],
  I: [
    "English",
    "Mathematics",
    "Environmental Science (EVS)",
    "Health and Physical Education",
    "General Knowledge(GK)",
    "Arts and Crafts",
    "Hindi",
  ],
  II: [
    "English",
    "Mathematics",
    "Environmental Science (EVS)",
    "Health and Physical Education",
    "General Knowledge(GK)",
    "Arts and Crafts",
    "Hindi",
  ],
  III: [
    "English",
    "Mathematics",
    "Environmental Science (EVS)",
    "Health and Physical Education",
    "General Knowledge(GK)",
    "Arts and Crafts",
    "Hindi",
  ],
  IV: [
    "English",
    "Mathematics",
    "Environmental Science (EVS)",
    "Health and Physical Education",
    "General Knowledge(GK)",
    "Arts and Crafts",
    "Hindi",
  ],
  V: [
    "English",
    "Mathematics",
    "Environmental Science (EVS)",
    "Drawing",
    "General Knowledge(GK)",
    "Hindi",
  ],
  VI: [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Drawing",
    "General Knowledge(GK)",
    "Social Science",
  ],
  VII: [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Drawing",
    "General Knowledge(GK)",
    "Social Science",
  ],
  VIII: [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Drawing",
    "General Knowledge(GK)",
    "Social Science",
  ],
  IX: [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Computer Science",
    "Social Science",
    "Sanskrit",
  ],
  X: [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Computer Science",
    "Social Science",
    "Sanskrit",
  ],
  XI_Arts: [
    "History",
    "English",
    "Political Science",
    "Mathematics",
    "Computer Science",
  ],
  XI_Commerce: [
    "Bussiness Management",
    "Accounts",
    "English",
    "Mathematics",
    "Computer Science",
  ],
  XI_Non_Med: [
    "English",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Computer Science",
  ],
  XI_Medical: [
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
  ],
  XII_Arts: [
    "History",
    "English",
    "Political Science",
    "Mathematics",
    "Computer Science",
  ],
  XII_Commerce: [
    "Bussiness Management",
    "Accounts",
    "English",
    "Mathematics",
    "Computer Science",
  ],
  XII_Non_Med: [
    "English",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Computer Science",
  ],
  XII_Medical: [
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
  ],
};

export const previewApplicationStyles = {
  superHeadingsContainer: "sm:px-5 sm:py-4",
  superHeadings: "text-sm sm:text-base md:text-xl font-semibold",
  headingsContainer: "flex items-center justify-between p-2 md:px-5 md:py-2",
  headingName: "text-xs md:text-base font-semibold",
  headingValue: "text-xs md:text-base",
};
