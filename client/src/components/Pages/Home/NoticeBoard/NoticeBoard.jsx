import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../../../slices/noticeBoardSlice";
import BoardSkeleton from "../../../Skeletons/Boards/BoardSkeleton";

const NoticeBoard = () => {
  const notifications = useSelector((state) => state.noticeBoard.notifications);
  const notificationLoading = useSelector(
    (state) => state.noticeBoard.isNotificationsLoading
  );
  const updateState = useSelector((state) => state.noticeBoard.isUpdateLoading);
  const deleteState = useSelector((state) => state.noticeBoard.isDeleteLoading);
  const newNotice = useSelector(
    (state) => state.noticeBoard.isNewNoticeLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch, updateState, deleteState, newNotice]);

  return (
    <>
      {notificationLoading ? (
        <BoardSkeleton />
      ) : (
        <section className="w-full md:w-[50%] h-[30rem] border flex flex-col items-center justify-center shadow-xl">
          <div className="w-full py-2 flex items-center justify-center bg-secondary">
            <span className="text-base md:text-lg text-primaryText">
              Notice Board
            </span>
          </div>
          <div className="w-full h-full bg-gray-100 px-2 py-3 scrollbar-thin  overflow-y-auto">
            {notifications?.map((currNotification) => {
              return (
                <div
                  className="w-full flex rounded-sm border shadow-md p-2 bg-white"
                  key={currNotification._id}
                >
                  <div className="w-[1%] flex items-center justify-center mr-3 ">
                    <div className="w-full h-full rounded-full bg-secondary"></div>
                  </div>
                  <div className="w-[74%] bg-white flex flex-col gap-1 px-1 tracking-wider">
                    <p className="text-lg font-bold">
                      {currNotification.notificationHeading}
                    </p>

                    <p className=" text-base font-light tracking-wider">
                      {currNotification.notificationdetails}
                    </p>
                  </div>
                  <div className="w-[25%] flex items-center justify-center">
                    <span className="text-lg text-gray-400">
                      {currNotification.notificationAddDate}
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

export default NoticeBoard;
