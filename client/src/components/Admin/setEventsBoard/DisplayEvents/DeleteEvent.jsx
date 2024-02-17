import { useDispatch, useSelector } from "react-redux";
import {
  deleteEvent,
  deleteEventReducer,
} from "../../../../slices/eventsBoardSlice";

const DeleteEvent = () => {
  const deleteEventPopupState = useSelector(
    (state) => state.eventsBoard.deleteEventPopupDisplay
  );
  const eventToUpdateId = useSelector(
    (state) => state.eventsBoard.eventToUpdateId
  );
  const dispatch = useDispatch();

  const deleteEventHandler = (e) => {
    e.preventDefault();
    dispatch(deleteEvent(eventToUpdateId));
  };

  const closeDeleteEventPopup = (e) => {
    e.preventDefault();
    dispatch(deleteEventReducer(false));
  };
  return (
    <div
      className={
        deleteEventPopupState
          ? "w-[60%] flex items-center flex-col py-5 px-10 border border-gray-400 bg-white absolute top-[25%] left-[23%] rounded-lg shadow-xl transition-all ease-linear z-50"
          : "hidden"
      }
    >
      <div className="w-full border border-white gap-5 flex flex-col">
        <span> Are you sure want to delete</span>
        <div className="w-full flex items-center p-2 gap-3 justify-end">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
            onClick={deleteEventHandler}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
            onClick={closeDeleteEventPopup}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEvent;
