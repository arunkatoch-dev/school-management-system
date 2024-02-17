import { IoCreateOutline } from "react-icons/io5";
import { newAchievementPopupReducer } from "../../../../../slices/achievementsBoardSlice";
import { useDispatch } from "react-redux";

const btnsCss = "flex items-center justify-center gap-1 hover:text-gray-700";
const btnIconsCss = "text-base md:text-lg text-gray-500";
const btnsSpanCss = "text-base md:text-lg text-gray-500 tracking-wide";

const Toolbar = () => {
  const dispatch = useDispatch();
  const openAddAchievementPopup = (e) => {
    e.preventDefault();
    dispatch(newAchievementPopupReducer(true));
  };
  return (
    <div className="w-full flex items-center justify-end py-1 px-2 bg-gray-100 border-b">
      <button className={btnsCss} onClick={openAddAchievementPopup}>
        <IoCreateOutline
          className={btnIconsCss}
          title="Create latest Achievement"
        />
        <span className={btnsSpanCss}>New</span>
      </button>
    </div>
  );
};

export default Toolbar;
