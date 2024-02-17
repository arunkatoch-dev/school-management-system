import { useDispatch, useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import {
  addNewAchievement,
  newAchievementOnChangeReducer,
  newAchievementPopupReducer,
} from "../../../../slices/achievementsBoardSlice";
import DragAndDropImg from "./DragAndDropImage/DragAndDropImg";

const NewAchievement = () => {
  const newAchievementPopupState = useSelector(
    (state) => state.achievementsBoard.newAchievementPopupDisplay
  );
  const newAchievement = useSelector(
    (state) => state.achievementsBoard.newAchievement
  );
  const dispatch = useDispatch();
  const closeAddAchievementPopup = (e) => {
    e.preventDefault();
    dispatch(newAchievementPopupReducer(false));
    dispatch(
      newAchievementOnChangeReducer({
        name: "imageInputVal",
        value: null,
      })
    );
    dispatch(
      newAchievementOnChangeReducer({
        name: "showImage",
        value: null,
      })
    );
  };

  return (
    <div
      className={
        newAchievementPopupState
          ? "w-[100%] md:w-[70%] flex items-center flex-col py-5 px-10 border border-gray-400 bg-white absolute top-0 md:top-[15%] md:left-[18%] rounded-lg shadow-xl transition-all ease-linear z-50 "
          : "hidden"
      }
    >
      <form
        className="w-full border border-white gap-5 flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-[70%]flex flex-col gap-3 ">
          <input
            type="text"
            name="studentNameIntputVal"
            value={newAchievement.studentNameIntputVal}
            autoComplete="off"
            onChange={(e) => {
              dispatch(
                newAchievementOnChangeReducer({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
            placeholder="Student Name"
            className="w-full py-3 px-2 rounded-md border-b  outline-none font-bold"
          />
          <input
            type="text"
            name="achievementDetailsInputVal"
            value={newAchievement.achievementDetailsInputVal}
            autoComplete="off"
            onChange={(e) => {
              dispatch(
                newAchievementOnChangeReducer({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
            placeholder="Achievement Details..."
            className="w-full py-3 px-2 rounded-md border-b  outline-none font-bold"
          />
          <DragAndDropImg />
        </div>
        <div className="w-[30%] flex items-center justify-center px-2">
          {newAchievement.imageInputVal ? (
            <img
              src={newAchievement.showImage}
              alt="studentAchievementImage"
              className="w-[12rem] h-[12rem]"
            />
          ) : (
            <div className="w-[12rem] h-[12rem] shadow-md bg-gray-100 flex items-center justify-center">
              <BiUser className="text-[5rem] text-gray-300" />
            </div>
          )}
        </div>
      </form>
      <div className="w-full flex items-center py-4 px-2 gap-3 justify-center">
        <button
          className="px-6 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const currDate = new Date().toLocaleDateString();
            const formData = new FormData();
            formData.append("studentName", newAchievement.studentNameIntputVal);
            formData.append(
              "achievementDetails",
              newAchievement.achievementDetailsInputVal
            );
            formData.append("achievementImage", newAchievement.imageInputVal);
            formData.append("achievementAddDate", currDate);
            dispatch(addNewAchievement(formData));
          }}
        >
          Add
        </button>
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
          onClick={closeAddAchievementPopup}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewAchievement;
