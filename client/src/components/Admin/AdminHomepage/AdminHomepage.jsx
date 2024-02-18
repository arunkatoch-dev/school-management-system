import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { PiSortAscending } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentSession,
  confirmSession,
  getAdminData,
  getCurrentSessionStudents,
  onSessionChangeHandler,
  toggleSessionWindow,
  toggleFullDetails,
  toggleFilterPopup,
  searchStudents,
} from "../../../slices/adminHomepageSlice";
import { Suspense, lazy, useEffect, useState } from "react";
import FullPageLoader from "../../Loaders/FullPageLoader";
import MsgPopup from "../../MsgPopup";
const FullDetails = lazy(() => import("./FullDetails"));

const AdminHomepage = () => {
  const [studentClass, setStudentClass] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const {
    isCurrentSessionDataLoading,
    studentsData,
    adminData,
    toggleFullDetailsDisplay,
    toggleFilterDisplay,
    toggleConfirmBoxDisplay,
    toggleSessionDisplay,
    isAdminDataPending,
    session,
    noStudentDataFound,
    userMsg,
  } = useSelector((state) => state.adminHomepageSlice);

  const dispatch = useDispatch();
  const onSearchHandler = () => {
    const fullSession = localStorage.getItem("currentSession");
    dispatch(toggleFilterPopup(false));
    dispatch(
      searchStudents({
        searchVal: searchVal,
        studentClass: studentClass,
        fullSession: fullSession,
      })
    );
  };

  const createSessionHandler = (e) => {
    e.preventDefault();
    dispatch(confirmSession(true));
  };

  useEffect(() => {
    dispatch(getAdminData());
    const currentSession = localStorage.getItem("currentSession");
    dispatch(getCurrentSessionStudents({ session: currentSession }));
  }, [dispatch]);
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="w-full flex items-center justify-between px-4 py-2 relative">
        <span className="text-base font-bold tracking-wide text-gray-700">
          Mordern Public School
        </span>
        <div className="flex items-center justify-center gap-2">
          <span className="text-base text-gray-700 font-bold">
            Current Session:
          </span>
          <span className="font-bold text-base text-blue-500">
            {isAdminDataPending ? "getting..." : adminData.currentSession}
          </span>
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              dispatch(toggleSessionWindow());
            }}
          >
            <FaEdit className="text-lg text-gray-600 hover:text-gray-700 font-bold" />
          </button>
        </div>
        {/* --------------- Create/Edit/set session ----------- */}
        <div
          className={
            toggleSessionDisplay
              ? "w-[18rem] border absolute top-[100%] right-0 shadow-xl bg-slate-100 flex flex-col items-center z-10 p-2"
              : "hidden"
          }
        >
          <div className="w-full border-b py-4 flex flex-col">
            <span className="flex items-center justify-center gap-3 tracking-widest text-base font-bold text-blue-400">
              Create New Session
            </span>
            <div className="w-full flex py-4 items-center px-2">
              <label htmlFor="startYear" className="text-base pr-3 font-bold">
                Start Year:
              </label>
              <select
                name="startYear"
                defaultValue={session.startYear}
                id="startYear"
                className="text-center border border-gray-500 px-5 w-full"
                onChange={(e) => {
                  e.preventDefault();
                  dispatch(
                    onSessionChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  );
                }}
              >
                <option value={`${new Date().getFullYear()}`}>
                  {`${new Date().getFullYear()}`}
                </option>
                <option value={`${new Date().getFullYear() + 1}`}>
                  {`${new Date().getFullYear() + 1}`}
                </option>
                <option value={`${new Date().getFullYear() + 2}`}>
                  {`${new Date().getFullYear() + 2} `}
                </option>
                <option value={`${new Date().getFullYear() + 3}`}>
                  {`${new Date().getFullYear() + 3}`}
                </option>
              </select>
            </div>
            {/* -------+-+-+-+-+-+-+-+-++-+-+-+-++-+-+-+-+-+-+-------- */}
            <div className="w-full flex items-center px-2">
              <label htmlFor="endYear" className="text-base pr-3 font-bold">
                End Year:
              </label>
              <select
                name="endYear"
                defaultValue={session.endYear}
                id="endYear"
                className="text-center border border-gray-500 px-5 w-full"
                onChange={(e) => {
                  e.preventDefault();
                  dispatch(
                    onSessionChangeHandler({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  );
                }}
              >
                <option value={`${new Date().getFullYear() + 1}`}>
                  {`${new Date().getFullYear() + 1}`}
                </option>
                <option value={`${new Date().getFullYear() + 2}`}>
                  {`${new Date().getFullYear() + 2}`}
                </option>
                <option value={`${new Date().getFullYear() + 3}`}>
                  {`${new Date().getFullYear() + 3} `}
                </option>
                <option value={`${new Date().getFullYear() + 4}`}>
                  {`${new Date().getFullYear() + 4}`}
                </option>
              </select>
            </div>
            {/* ---- */}
            <div className="w-full flex flex-col py-2 gap-3">
              <button
                className="w-full bg-green-800 text-white hover:bg-green-700"
                onClick={createSessionHandler}
              >
                Create
              </button>
              <div
                className={
                  toggleConfirmBoxDisplay
                    ? "flex flex-col px-4 py-2 border"
                    : "hidden"
                }
              >
                <span className="text-center text-base text-red-600">
                  Are you sure to create session :
                </span>
                <input
                  type="text"
                  readOnly
                  name="session"
                  value={`${session.startYear}-${session.endYear}`}
                  className="outline-none bg-transparent text-center text-base text-teal-900"
                />
                <div className="flex items-center justify-end px-3 py-2 gap-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const changedSession = `${session.startYear}-${session.endYear}`;
                      dispatch(
                        changeCurrentSession({
                          id: adminData._id,
                          changedSession: changedSession,
                        })
                      );
                      dispatch(toggleSessionWindow());
                    }}
                  >
                    <FaCheck className="text-xl text-green-800 hover:text-green-600" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(confirmSession(false));
                      dispatch(toggleSessionWindow());
                    }}
                  >
                    <RxCross2 className="text-xl text-red-800 hover:text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<-------------Seach cum menu bar--------->>>>>>>>>> */}

      <div className="w-full flex flex-col items-center justify-center px-4 py-2 bg-white relative">
        <div className="flex gap-5 md:w-[40%] border border-gray-400 p-2 rounded-md">
          <input
            type="text"
            name="searchVal"
            autoComplete="off"
            id="searchVal"
            value={searchVal}
            onChange={(e) => {
              e.preventDefault();
              setSearchVal(e.target.value);
            }}
            placeholder="Enter here to Search"
            className="w-full px-2 tracking-widest py-2 text-gray-700 outline-none"
          />
          <div className="flex gap-3 items-center justify-center">
            <button>
              <PiSortAscending
                title="Apply Filters"
                className="text-2xl text-gray-800 hover:text-gray-600"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleFilterPopup(!toggleFilterDisplay));
                }}
              />
            </button>
            <button
              className="text-base bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 border rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                onSearchHandler();
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Filter Menu */}
        <div
          className={
            toggleFilterDisplay
              ? "flex flex-col items-center justify-center z-30 absolute top-[100%] md:right-[25rem] w-[13rem] pb-5 bg-white shadow-xl rounded-b-xl border"
              : "hidden"
          }
        >
          <div className="w-full flex items-center justify-center py-4 border-b">
            <span className="text-base font-bold">Select Class</span>
          </div>
          <select
            name="studentClass"
            id="studentClass"
            value={studentClass}
            className="text-center border border-gray-500 px-5 w-[95%] "
            onChange={(e) => {
              e.preventDefault();
              // eslint-disable-next-line no-unused-vars
              setStudentClass(e.target.value);
            }}
          >
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
      </div>
      {/* ***************************** */}

      <div
        className="w-full flex-col flex justify-center items-center py-5 gap-3 relative"
        onClick={(e) => {
          e.preventDefault();
          dispatch(toggleFilterPopup(false));
        }}
      >
        {isCurrentSessionDataLoading ? (
          <FullPageLoader />
        ) : noStudentDataFound ? (
          <MsgPopup msg={userMsg} />
        ) : (
          studentsData?.map((currStudent, index) => {
            const { _id, studentName, studentClass, studentId } = currStudent;
            return (
              <div
                key={_id}
                className="w-[55%] rounded-lg border flex cursor-pointer hover:shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleFullDetails({ display: true, currStudent }));
                }}
              >
                <div className="bg-cyan-600 w-[15%] py-2 gap-3 flex items-center justify-center">
                  <span className="text-lg text-white">{index + 1}.</span>
                </div>
                <div className="w-full flex flex-col pl-5 py-2">
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">Student Name:</span>
                    <span className="text-base text-gray-700">
                      {studentName}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">Student Class:</span>
                    <span className="text-base text-gray-700">
                      {studentClass}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg font-bold">Id:</span>
                    <span className="text-base text-gray-700">{studentId}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {/* -------- Full Details ------ */}
        {toggleFullDetailsDisplay && (
          <Suspense fallback={<FullPageLoader />}>
            <FullDetails />
          </Suspense>
        )}
        {/* ---------- */}
      </div>
    </section>
  );
};

export default AdminHomepage;
