import { Suspense, lazy } from "react";
const NoticeBoard = lazy(() => import("./NoticeBoard/NoticeBoard"));
const EventsBoard = lazy(() => import("./EventsBoard/EventsBoard"));
import SchoolTagLine from "./SchoolTagLine/SchoolTagLine";
import Slideshow from "./SlideShow/Slideshow";
import BoardSkeleton from "../../Skeletons/Boards/BoardSkeleton";
import HomepageAbout from "./HomepageAbout/HomepageAbout";
import HomeAchievements from "./HomepageAchievements/HomeAchievements";

const Home = () => {
  return (
    <>
      <Slideshow />
      <SchoolTagLine />
      <section className="w-full sm:px-5 sm:py-5 flex flex-wrap md:flex-nowrap items-center justify-center gap-3 bg-gray-100">
        <Suspense fallback={<BoardSkeleton />}>
          <NoticeBoard />
        </Suspense>
        <Suspense fallback={<BoardSkeleton />}>
          <EventsBoard />
        </Suspense>
      </section>
      <section className="w-full md:h-[70vh] px-5 py-5 flex flex-wrap md:flex-nowrap items-center justify-center gap-3 bg-gray-100 ">
        <HomepageAbout />
        <HomeAchievements />
      </section>
    </>
  );
};

export default Home;
