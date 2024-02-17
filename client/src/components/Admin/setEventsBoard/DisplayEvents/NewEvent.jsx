import { useDispatch, useSelector } from "react-redux";
import {
  addNewEvent,
  newEventOnChangeReducer,
  newEventPopupReducer,
} from "../../../../slices/eventsBoardSlice";
const NewEvent = () => {
  const newEventPopupState = useSelector(
    (state) => state.eventsBoard.newEventPopupDisplay
  );
  const newEvent = useSelector((state) => state.eventsBoard.newEvent);
  const dispatch = useDispatch();

  const closeAddEventPopup = (e) => {
    e.preventDefault();
    dispatch(newEventPopupReducer(false));
  };
  return (
    <div
      className={
        newEventPopupState
          ? "w-[60%] flex items-center flex-col py-5 px-10 border border-gray-400 bg-white absolute top-[25%] left-[23%] rounded-lg shadow-xl transition-all ease-linear z-50 "
          : "hidden"
      }
    >
      <form
        className="w-full border border-white gap-5 flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="eventInput"
          value={newEvent.eventInput}
          autoComplete="off"
          onChange={(e) => {
            dispatch(
              newEventOnChangeReducer({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          placeholder="Type new Event..."
          className="w-full py-3 px-2 rounded-md border-b  outline-none font-bold"
        />

        <div className="w-full flex items-center p-2 gap-3 justify-end">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
            onClick={(e) => {
              const currDate = new Date().toLocaleDateString();
              e.preventDefault();
              dispatch(
                addNewEvent({
                  event: newEvent.eventInput,
                  date: currDate,
                })
              );
            }}
          >
            Add
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
            onClick={closeAddEventPopup}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
