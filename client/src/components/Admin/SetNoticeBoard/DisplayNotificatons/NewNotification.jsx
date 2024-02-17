import { useDispatch, useSelector } from "react-redux";
import {
  addNewNotice,
  newNoticeOnChangeReducer,
  newNotificationPopupReducer,
} from "../../../../slices/noticeBoardSlice";

const NewNotification = () => {
  const newNoticePopupState = useSelector(
    (state) => state.noticeBoard.newNotificationPopupDisplay
  );
  const newNotice = useSelector((state) => state.noticeBoard.newNotice);
  const dispatch = useDispatch();

  const closeAddNoticePopup = (e) => {
    e.preventDefault();
    dispatch(newNotificationPopupReducer(false));
  };
  return (
    <div
      className={
        newNoticePopupState
          ? "w-[60%] flex items-center flex-col py-5 px-10 border border-gray-400 bg-white absolute top-[25%] left-[23%] z-20 rounded-lg shadow-xl transition-all ease-linear  "
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
          name="headingInput"
          value={newNotice.headingInput}
          autoComplete="off"
          onChange={(e) => {
            dispatch(
              newNoticeOnChangeReducer({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          placeholder="Enter Notice Heading.."
          className="w-full py-3 px-2 rounded-md border-b  outline-none font-bold"
        />
        <input
          type="text"
          name="detailsInput"
          value={newNotice.detailsInput}
          onChange={(e) => {
            dispatch(
              newNoticeOnChangeReducer({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          placeholder="Type details"
          autoComplete="off"
          className="w-full py-3 px-2 rounded-md border-b  outline-none font-primaryFont tracking-wider"
        />
        <div className="w-full flex items-center p-2 gap-3 justify-end">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
            onClick={(e) => {
              const currDate = new Date().toLocaleDateString();
              e.preventDefault();
              dispatch(
                addNewNotice({
                  heading: newNotice.headingInput,
                  details: newNotice.detailsInput,
                  date: currDate,
                })
              );
            }}
          >
            Add
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
            onClick={closeAddNoticePopup}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNotification;
