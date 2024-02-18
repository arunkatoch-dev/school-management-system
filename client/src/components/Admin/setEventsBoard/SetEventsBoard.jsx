import { Suspense, lazy } from "react";
const DisplayEvents = lazy(() => import("./DisplayEvents/DisplayEvents"));
import NewEvent from "./DisplayEvents/NewEvent";
import EditEvent from "./DisplayEvents/EditEvent";
import DeleteEvent from "./DisplayEvents/DeleteEvent";
import Toolbar from "./DisplayEvents/Toolbar/Toolbar";
import FullPageLoader from "../../Loaders/FullPageLoader";

const SetEventsBoard = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 -z-30 ">
      <div className="md:w-[80%] md:h-[70%] border flex flex-col rounded-xl shadow-xl relative">
        {/* Heading  */}
        <div className="w-full flex items-center rounded-tl-xl rounded-tr-xl justify-center bg-secondary  py-2">
          <span className="text-base md:text-xl text-primaryText">
            Events Board (Admin)
          </span>
        </div>
        <Toolbar />
        <NewEvent />
        <EditEvent />
        <DeleteEvent />
        <Suspense fallback={<FullPageLoader />}>
          <DisplayEvents />
        </Suspense>
      </div>
    </section>
  );
};

export default SetEventsBoard;
