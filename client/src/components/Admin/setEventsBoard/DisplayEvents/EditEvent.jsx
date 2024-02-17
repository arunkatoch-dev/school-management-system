import { useDispatch, useSelector } from "react-redux";
import {
  closeEditPopupReducer,
  editEventOnChangeReducer,
  updateEvent,
} from "../../../../slices/eventsBoardSlice";

const EditEvent = () => {
  const editEventPopupState = useSelector(
    (state) => state.eventsBoard.editEventPopupDisplay
  );
  const editEventInputVal = useSelector((state) => state.eventsBoard.editEvent);
  const dispatch = useDispatch();

  const updateDetails = (e) => {
    e.preventDefault();
    if (!editEventInputVal.id && !editEventInputVal.eventInput) {
      window.alert(`All fields are required...`);
      return;
    }
    dispatch(
      updateEvent({
        id: editEventInputVal.id,
        event: editEventInputVal.eventInput,
      })
    );
  };

  const closeEditEventPopup = (e) => {
    e.preventDefault();
    dispatch(closeEditPopupReducer(false));
  };
  return (
    <div
      className={
        editEventPopupState
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
          autoComplete="off"
          value={editEventInputVal.eventInput}
          onChange={(e) => {
            dispatch(
              editEventOnChangeReducer({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          placeholder="Edit heading"
          className="w-full py-3 px-2 rounded-md border-b  outline-none font-bold"
        />
        <div className="w-full flex items-center p-2 gap-3 justify-end">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
            onClick={updateDetails}
          >
            update
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
            onClick={closeEditEventPopup}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEvent;
