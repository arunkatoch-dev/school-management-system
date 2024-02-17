import { IoCreateOutline } from "react-icons/io5";
import { newNotificationPopupReducer } from "../../../../../slices/noticeBoardSlice";
import { useDispatch } from "react-redux";

const btnsCss = "flex items-center justify-center gap-1 hover:text-gray-700";
const btnIconsCss = "text-base md:text-lg text-gray-500";
const btnsSpanCss = "text-base md:text-lg text-gray-500 tracking-wide";

const Toolbar = () => {
  const dispatch = useDispatch();
  const openAddNoticePopup = (e) => {
    e.preventDefault();
    dispatch(newNotificationPopupReducer(true));
  };
  return (
    <div className="w-full flex items-center justify-end py-1 px-2 bg-gray-100 border-b">
      <button className={btnsCss} onClick={openAddNoticePopup}>
        <IoCreateOutline className={btnIconsCss} title="Create new Notice" />
        <span className={btnsSpanCss}>New</span>
      </button>
    </div>
  );
};

export default Toolbar;
