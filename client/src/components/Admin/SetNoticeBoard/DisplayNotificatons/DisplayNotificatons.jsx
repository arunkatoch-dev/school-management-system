import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  editNotificationPopupReducer,
  deleteNoticeReducer,
} from "../../../../slices/noticeBoardSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import FullPageLoader from "../../../Loaders/FullPageLoader";


const DisplayNotificatons = () => {
  const { notifications, updateState, deleteState, isNotificationsLoading } =
    useSelector((state) => state.noticeBoard);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Admin Panel - Add | Update | Delete Notifications.";
    dispatch(getNotifications());
  }, [dispatch, updateState, deleteState]);
  return (
    <div className="w-full h-full bg-gray-100 px-2 py-3 overflow-y-auto">
      {isNotificationsLoading ? (
        <FullPageLoader />
      ) : (
        notifications.map((currNotification, index) => {
          return (
            <div
              className="w-full flex rounded-sm shadow-md p-2 bg-white"
              key={currNotification._id}
            >
              <div className="w-[10%] flex items-center justify-center bg-secondary">
                <span className="text-base md:text-lg text-primaryText">
                  {index + 1}.
                </span>
              </div>
              <div className="w-[70%] flex flex-col gap-2 border px-2 tracking-wider">
                <span className="flex gap-2 px-2 text-sm md:text-base font-light items-center">
                  <strong className="font-bold text-base md:text-lg">
                    Heading:{" "}
                  </strong>
                  {currNotification.notificationHeading}
                </span>
                <span className="flex gap-2 px-2 text-sm md:text-base font-light items-center tracking-wider">
                  <strong className="font-bold text-base md:text-lg">
                    Details:
                  </strong>
                  {currNotification.notificationdetails}
                </span>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <button
                  className="px-5 py-2 flex item-center justify-center border"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      editNotificationPopupReducer({
                        editDisplay: true,
                        id: currNotification._id,
                        headingValue: currNotification.notificationHeading,
                        detailsValue: currNotification.notificationdetails,
                      })
                    );
                  }}
                >
                  <AiFillEdit className="text-[1rem] md:text-[1.3rem] text-gray-500 hover:text-gray-600" />
                </button>
                <button
                  className="px-5 py-2 flex item-center justify-center border"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      deleteNoticeReducer({
                        value: true,
                        id: currNotification._id,
                      })
                    );
                  }}
                >
                  <AiFillDelete className="text-[1rem] md:text-[1.3rem] text-red-400 hover:text-red-500" />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayNotificatons;
