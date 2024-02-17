import { useDispatch, useSelector } from "react-redux";
import {
  deleteNoticeReducer,
  deleteNotice,
} from "../../../../slices/noticeBoardSlice";

const DeleteNotification = () => {
  const deleteNoticePopupState = useSelector(
    (state) => state.noticeBoard.deleteNotificationPopupDisplay
  );
  const notificationToUpdateId = useSelector(
    (state) => state.noticeBoard.notificationToUpdateId
  );
  const dispatch = useDispatch();

  const deleteNotification = (e) => {
    e.preventDefault();
    dispatch(deleteNotice(notificationToUpdateId));
  };

  const closeDeleteNoticePopup = (e) => {
    e.preventDefault();
    dispatch(deleteNoticeReducer(false));
  };

  return (
    <div
      className={
        deleteNoticePopupState
          ? "w-[60%] flex items-center flex-col py-5 px-10 border border-gray-400 bg-white absolute top-[25%] left-[23%] rounded-lg shadow-xl transition-all ease-linear z-50"
          : "hidden"
      }
    >
      <div className="w-full border border-white gap-5 flex flex-col">
        <span> Are you sure want to delete</span>
        <div className="w-full flex items-center p-2 gap-3 justify-end">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white"
            onClick={deleteNotification}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
            onClick={closeDeleteNoticePopup}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNotification;
