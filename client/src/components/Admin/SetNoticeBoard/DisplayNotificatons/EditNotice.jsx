import { useDispatch, useSelector } from "react-redux";
import {
  editNoticeOnChangeReducer,
  updateNotice,
  closeEditPopupReducer,
} from "../../../../slices/noticeBoardSlice";

const EditNotice = () => {
  const editNoticePopupState = useSelector(
    (state) => state.noticeBoard.editNotificationPopupDisplay
  );
  const editNoticeInputVal = useSelector(
    (state) => state.noticeBoard.editNotice
  );
  const dispatch = useDispatch();

  const updateDetails = (e) => {
    e.preventDefault();
    if (
      !editNoticeInputVal.id &&
      !editNoticeInputVal.headingInput &&
      !editNoticeInputVal.detailsInput
    ) {
      window.alert(`All fields are required...`);
      return;
    }
    dispatch(
      updateNotice({
        id: editNoticeInputVal.id,
        heading: editNoticeInputVal.headingInput,
        details: editNoticeInputVal.detailsInput,
      })
    );
  };

  const closeEditNoticePopup = (e) => {
    e.preventDefault();
    dispatch(closeEditPopupReducer(false));
  };
  return (
    <div
      className={
        editNoticePopupState
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
          name="updateNoticeHeading"
          autoComplete="off"
          value={editNoticeInputVal.headingInput}
          onChange={(e) => {
            dispatch(
              editNoticeOnChangeReducer({
                name: "headingInput",
                value: e.target.value,
              })
            );
          }}
          placeholder="Edit heading"
          className="w-full py-3 px-2 rounded-md border-b  outline-none font-bold"
        />
        <input
          type="text"
          name="updateNoticeDetails"
          placeholder="edit details"
          value={editNoticeInputVal.detailsInput}
          onChange={(e) => {
            dispatch(
              editNoticeOnChangeReducer({
                name: "detailsInput",
                value: e.target.value,
              })
            );
          }}
          autoComplete="off"
          className="w-full py-3 px-2 rounded-md border-b  outline-none font-primaryFont tracking-wider"
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
            onClick={closeEditNoticePopup}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNotice;
