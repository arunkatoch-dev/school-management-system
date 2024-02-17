import { useSelector } from "react-redux";
import { schoolName } from "../../../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const SelectClass = () => {
  const [studentClass, setStudentClass] = useState("Select Class");
  const { admissionStartDate, admissionEndDate, currentSession } = useSelector(
    (state) => state.adminHomepageSlice.adminData
  );
  const isAdminDataPending = useSelector(
    (state) => state.adminHomepageSlice.isAdminDataPending
  );
  return (
    <div className="w-full md:w-[90%] flex flex-col m-auto sm:mt-10 md:mt-24 shadow-xl">
      {/* --------  Head  ------ */}
      <div className="w-full flex flex-col items-center justify-center py-2 bg-secondary">
        <span className="text-sm sm:text-base md:text-lg text-primaryText font-bold font-primaryFont tracking-wider">
          {schoolName}
        </span>
        <span className="text-sm md:text-base text-primaryText">
          Academic Session
          {isAdminDataPending ? "getting..." : ` ${currentSession}`}
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-1 border border-b-0">
        <span className="text-xs md:text-sm text-gray-500">
          Admissions open from
          {`${admissionStartDate} to ${admissionEndDate}`}
        </span>
        <span className="text-sm text-red-500">(Limited Seats only)</span>
      </div>
      {/* --------  Body  ------ */}
      <div className="w-full flex flex-col py-2 md:py-5 items-center justify-center border border-t-0">
        <div className="px-5 md:px-0 md:py-2">
          <label htmlFor="studentClass" className="text-base pr-3 font-bold">
            Choose Class:
          </label>
          <select
            name="studentClass"
            value={studentClass}
            id="studentClass"
            className="text-center border border-gray-500 md:px-5 "
            onChange={(e) => {
              e.preventDefault();
              // eslint-disable-next-line no-unused-vars
              setStudentClass((studentClass) => e.target.value);
            }}
          >
            <option value="Select Class">Select Class</option>
            <option value="Nursery">Nursery</option>
            <option value="KG">KG</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI_Arts">XI (Arts)</option>
            <option value="XI_Commerce">XI (Commerce)</option>
            <option value="XI_Non_Med">XI (Non-Med)</option>
            <option value="XI_Medical">XI (Medical)</option>
            <option value="XII_Arts">XII (Arts)</option>
            <option value="XII_Commerce">XII (Commerce)</option>
            <option value="XII_Non_Med">XII (Non-Med)</option>
            <option value="XII_Medical">XII (Medical)</option>
          </select>
        </div>
        <div className="w-full flex items-center justify-center py-5">
          <Link
            to={`/admissions/${studentClass}`}
            className="px-20 py-2 bg-secondary text-base font-bold hover:bg-cyan-500 rounded-md text-white"
            onClick={(e) => {
              e.stopPropagation();
              if (studentClass === "Select Class") {
                e.preventDefault();
                return window.alert(`Please Select Class`);
              }
            }}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectClass;
