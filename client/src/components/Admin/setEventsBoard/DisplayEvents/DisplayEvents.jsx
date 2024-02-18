import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEventReducer,
  editEventPopupReducer,
  getEvents,
} from "../../../../slices/eventsBoardSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import FullPageLoader from "../../../Loaders/FullPageLoader";


const DisplayEvents = () => {
  const { events, updateState, deleteState, isEventsLoading } = useSelector(
    (state) => state.eventsBoard
  );

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Admin Panel - Add | Update | Delete Events.";
    dispatch(getEvents());
  }, [dispatch, updateState, deleteState]);
  return (
    <div className="w-full h-full bg-gray-100 px-2 py-3 overflow-y-auto">
      {isEventsLoading ? (
        <FullPageLoader />
      ) : (
        events.map((currEvent, index) => {
          return (
            <div
              className="w-full flex rounded-sm shadow-md p-2 bg-white"
              key={currEvent._id}
            >
              <div className="w-[10%] flex items-center justify-center bg-secondary">
                <span className="text-base md:text-lg text-primaryText">
                  {index + 1}.
                </span>
              </div>
              <div className="w-[70%] flex items-center gap-2 border px-2 tracking-wider">
                <span className="flex gap-2 px-2 text-base font-light items-center">
                  {currEvent.event}
                </span>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <button
                  className="px-5 py-2 flex item-center justify-center border"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      editEventPopupReducer({
                        editDisplay: true,
                        id: currEvent._id,
                        eventInput: currEvent.event,
                      })
                    );
                  }}
                >
                  <AiFillEdit className="text-[1.3rem] text-gray-500 hover:text-gray-600" />
                </button>
                <button
                  className="px-5 py-2 flex item-center justify-center border"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      deleteEventReducer({
                        value: true,
                        id: currEvent._id,
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

export default DisplayEvents;
