import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getAchievements } from "../../../../slices/achievementsBoardSlice";
import { useEffect } from "react";
import { baseURL } from "../../../constants";
import AchievementsBoardSkeleton from "../../../Skeletons/Boards/AchievementsBoardSkeleton";

const HomeAchievements = () => {
  const { achievements, isAchievementsLoading, deleteState, newAchievement } =
    useSelector((state) => state.achievementsBoard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAchievements());
  }, [dispatch, deleteState, newAchievement]);

  return (
    <>
      {isAchievementsLoading ? (
        <AchievementsBoardSkeleton />
      ) : (
        <section className="w-full md:w-[40%] flex flex-col h-full">
          <div className="w-full flex items-center justify-center">
            <span className="inline-block p-2 md:px-5 md:py-2 border-b capitalize  text-gray-700 border-b-primary text-2xl tracking-widest font-primaryFont">
              Latest Achievements
            </span>
          </div>
          <div className="w-full flex">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              lazy={true.toString()}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className={`mySwiper w-full `}
            >
              {achievements.map((currAchievement) => {
                return (
                  <SwiperSlide key={currAchievement._id}>
                    <div className="flex flex-col flex-wrap items-center justify-center md:p-5">
                      <div className="w-[23rem] h-[23rem] md:w-[20rem] md:h-[20rem] border">
                        <img
                          src={`${baseURL}${currAchievement.imagePath}`}
                          alt={currAchievement.imagePath}
                          className="w-full h-full"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-[23rem] md:w-[20rem] flex flex-col items-center justify-center bg-blue-400 text-white">
                        <span className="text-lg font-semibold">
                          {currAchievement.studentName}
                        </span>
                        <span className="text-base">
                          {currAchievement.achievementDetails}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeAchievements;
