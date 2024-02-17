import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { adminLogout } from "../../../slices/adminAuthSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const displaySidebar = useSelector((state) => state.sidebar.sidebarDisplay);
  const { adminLoginStatus, isLogoutPending } = useSelector(
    (state) => state.adminAuthSlice
  );
  return (
    <aside
      className={
        displaySidebar
          ? "w-[40%] md:w-[20%] xl:w-[25%] z-10 px-5 py-2 min-h-screen bg-secondary2 absolute top-0 left-0 transition-all"
          : "hidden"
      }
    >
      <div className="w-full flex flex-col gap-3 justify-center pt-12">
        <NavLink
          className="text-primaryText text-base md:text-lg lg:text-xl tracking-wider  hover:tracking-widest hover:transition-all ease-in-out"
          to="/admin/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-primaryText text-base md:text-lg lg:text-xl tracking-wider  hover:tracking-widest hover:transition-all ease-in-out"
          to="/admin/noticeboard"
        >
          Notice Board
        </NavLink>
        <NavLink
          className="text-primaryText text-base md:text-lg lg:text-xl tracking-wider  hover:tracking-widest hover:transition-all ease-in-out"
          to="/admin/eventsboard"
        >
          Events Board
        </NavLink>
        <NavLink
          className="text-primaryText text-base md:text-lg lg:text-xl tracking-wider  hover:tracking-widest hover:transition-all ease-in-out"
          to="/admin/achievementsboard"
        >
          Achievements Board
        </NavLink>
        <NavLink
          className="text-primaryText text-base md:text-lg lg:text-xl tracking-wider  hover:tracking-widest hover:transition-all ease-in-out"
          to="/admin/admissions"
        >
          Admissions
        </NavLink>
        {adminLoginStatus && (
          <button
            className="text-red-600 font-bold py-2 border-t text-base md:text-lg lg:text-xl tracking-wider hover:text-red-500  hover:tracking-widest hover:transition-all ease-in-out inline-flex "
            onClick={(e) => {
              e.preventDefault();
              dispatch(adminLogout());
            }}
          >
            {isLogoutPending ? "Logging out" : "Logout"}
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
