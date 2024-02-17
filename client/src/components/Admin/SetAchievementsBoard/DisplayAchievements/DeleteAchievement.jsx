import { useDispatch, useSelector } from "react-redux";
import {
  deleteAchievement,
  deleteAchievementReducer,
} from "../../../../slices/achievementsBoardSlice";

const DeleteAchievement = () => {
  const deleteAchievementPopupState = useSelector(
    (state) => state.achievementsBoard.deleteAchievementPopupDisplay
  );
  const achievementToUpdateId = useSelector(
    (state) => state.achievementsBoard.achievementToUpdateId
  );
  const dispatch = useDispatch();

  const deleteAchievementHandler = (e) => {
    e.preventDefault();
    dispatch(deleteAchievement(achievementToUpdateId));
  };

  const closeDeleteAchievementPopup = (e) => {
    e.preventDefault();
    dispatch(deleteAchievementReducer(false));
  };

  return (
    <div
      className={
        deleteAchievementPopupState
          ? "w-[60%] flex items-center flex-col py-5 px-10 border border-gray-400 bg-white absolute top-[25%] left-[23%] rounded-lg shadow-xl transition-all ease-linear z-50"
          : "hidden"
      }
    >
      <div className="w-full border border-white gap-5 flex flex-col">
        <span> Are you sure want to delete</span>
        <div className="w-full flex items-center p-2 gap-3 justify-end">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
            onClick={deleteAchievementHandler}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
            onClick={closeDeleteAchievementPopup}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAchievement;
