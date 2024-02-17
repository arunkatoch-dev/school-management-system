import { AiFillDelete } from "react-icons/ai";
import AdminBoardSkeleton from "../../Skeletons/AdminBoardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteAchievementReducer,
  getAchievements,
} from "../../../../slices/achievementsBoardSlice";
import { baseURL } from "../../../constants";

const DisplayAchievements = () => {
  const {
    achievements,
    updateState,
    deleteState,
    newAchievement,
    isAchievementsLoading,
  } = useSelector((state) => state.achievementsBoard);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Admin Panel - Add | Update | Delete Achievements.";
    dispatch(getAchievements());
  }, [dispatch, updateState, deleteState, newAchievement]);

  return (
    <div className="w-full h-full bg-gray-100 px-2 py-3 overflow-y-auto">
      {isAchievementsLoading ? (
        <AdminBoardSkeleton />
      ) : (
        achievements.map((currAchievement, index) => {
          return (
            <div
              className="w-full flex rounded-sm shadow-md p-2 bg-white"
              key={currAchievement._id}
            >
              <div className="w-[10%] flex items-center justify-center bg-secondary">
                <span className="text-base md:text-lg text-primaryText">{index + 1}.</span>
              </div>
              <div className="w-[70%] flex justify-center flex-col gap-2 border px-2 tracking-wider">
                <span className="flex gap-2 px-2 text-sm md:text-base font-light items-center">
                  <strong className="font-bold text-xs md:text-lg">Student Name: </strong>
                  {currAchievement.studentName}
                </span>
                <span className="flex gap-2 px-2 text-xs md:text-base font-light items-center tracking-wider">
                  <strong className="font-bold text-xs md:text-lg">
                    Achievement Details:
                  </strong>
                  {currAchievement.achievementDetails}
                </span>
              </div>
              <div className="w-[10%] flex items-center justify-end ">
                <img
                  src={`${baseURL}${currAchievement.imagePath}`}
                  alt={currAchievement.imagePath}
                  className="w-[5rem]"
                />
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <button
                  className="px-5 py-2 flex item-center justify-center border"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      deleteAchievementReducer({
                        value: true,
                        id: currAchievement._id,
                      })
                    );
                  }}
                >
                  <AiFillDelete className="text-[1.3rem] text-red-400 hover:text-red-500" />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayAchievements;
