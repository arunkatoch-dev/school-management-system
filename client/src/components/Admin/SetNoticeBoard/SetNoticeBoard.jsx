import { Suspense, lazy } from "react";
import DeleteNotification from "./DisplayNotificatons/DeleteNotification";
const DisplayNotificatons = lazy(() =>
  import("./DisplayNotificatons/DisplayNotificatons")
);
import EditNotice from "./DisplayNotificatons/EditNotice";
import NewNotification from "./DisplayNotificatons/NewNotification";
import AdminBoardSkeleton from "../Skeletons/AdminBoardSkeleton";
import Toolbar from "./DisplayNotificatons/Toolbar/Toolbar";



const SetNoticeBoard = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 -z-30 ">
      <div className="md:w-[80%] md:h-[70%] border flex flex-col rounded-xl shadow-xl relative">
        {/* Heading  */}
        <div className="w-full flex items-center rounded-tl-xl rounded-tr-xl justify-center bg-secondary  py-2">
          <span className="text-base md:text-xl text-primaryText">
            Notice Board (Admin)
          </span>
        </div>
        <Toolbar />
        <NewNotification />
        <EditNotice />
        <DeleteNotification />
        <Suspense fallback={<AdminBoardSkeleton />}>
          <DisplayNotificatons />
        </Suspense>
      </div>
    </section>
  );
};

export default SetNoticeBoard;
