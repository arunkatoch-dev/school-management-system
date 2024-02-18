import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../../slices/eventsBoardSlice";
import FullPageLoader from "../../../Loaders/FullPageLoader";

const EventsBoard = () => {
  const events = useSelector((state) => state.eventsBoard.events);
  const updateState = useSelector((state) => state.eventsBoard.isUpdateLoading);
  const deleteState = useSelector((state) => state.eventsBoard.isDeleteLoading);
  const newEvent = useSelector((state) => state.eventsBoard.isNewEventLoading);
  const isEventsLoading = useSelector(
    (state) => state.eventsBoard.isEventsLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch, updateState, deleteState, newEvent]);

  return (
    <>
      {isEventsLoading ? (
        <FullPageLoader />
      ) : (
        <section className="w-full md:w-[50%] h-[30rem] border flex flex-col items-center justify-center shadow-xl">
          <div className="w-full py-2 flex items-center justify-center bg-primary">
            <span className="text-base md:text-lg text-primaryText">
              Events Board
            </span>
          </div>
          <div className="w-full h-full bg-gray-100 px-2 py-3 scrollbar-thin  overflow-y-auto">
            {events.map((currEvent) => {
              return (
                <div
                  className="w-full flex rounded-sm border shadow-md p-2 bg-white"
                  key={currEvent._id}
                >
                  <div className="w-[1%] flex items-center justify-center mr-3 ">
                    <div className="w-full h-full rounded-full bg-primary"></div>
                  </div>
                  <div className="w-[74%] bg-white flex px-1 tracking-wider">
                    <p className="text-lg">{currEvent.event}</p>
                  </div>
                  <div className="w-[25%] flex items-center justify-center">
                    <span className="text-lg text-gray-400">
                      {currEvent.eventAddDate}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default EventsBoard;
