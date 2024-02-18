import { Suspense } from "react";
import NewAchievement from "./DisplayAchievements/NewAchievement";
import Toolbar from "./DisplayAchievements/Toolbar/Toolbar";
import DisplayAchievements from "./DisplayAchievements/DisplayAchievements";
import DeleteAchievement from "./DisplayAchievements/DeleteAchievement";
import FullPageLoader from "../../Loaders/FullPageLoader";

const SetAchievementsBoard = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 -z-30 ">
      <div className="md:w-[80%] md:h-[70%] border flex flex-col rounded-xl shadow-xl relative">
        {/* Heading  */}
        <div className="w-full flex items-center rounded-tl-xl rounded-tr-xl justify-center bg-secondary  py-2">
          <span className="text-base md:text-xl text-primaryText">
            Achievements Board (Admin)
          </span>
        </div>
        <Toolbar />
        <NewAchievement />
        <DeleteAchievement />
        <Suspense fallback={<FullPageLoader />}>
          <DisplayAchievements />
        </Suspense>
      </div>
    </section>
  );
};

export default SetAchievementsBoard;
