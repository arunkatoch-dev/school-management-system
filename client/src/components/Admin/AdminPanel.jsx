import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";
import { sidebarReducer } from "../../slices/sidebarSlice";
import { Outlet } from "react-router-dom";
import { checkAdminLoginStatus } from "../../slices/adminAuthSlice";
import { useEffect } from "react";
import AdminLogin from "./AdminAuth/AdminLogin";
import FullPageLoader from "../Loaders/FullPageLoader";

const AdminPanel = () => {
  const displaySidebar = useSelector((state) => state.sidebar.sidebarDisplay);
  const dispatch = useDispatch();

  const openSidebar = (e) => {
    e.preventDefault();
    dispatch(sidebarReducer(displaySidebar ? false : true));
  };

  const { adminLoginStatus, isAdminLoginPending } = useSelector(
    (state) => state.adminAuthSlice
  );

  useEffect(() => {
    dispatch(checkAdminLoginStatus());
  }, [dispatch]);

  return (
    <>
      {isAdminLoginPending ? (
        <FullPageLoader />
      ) : adminLoginStatus ? (
        <>
          <div className="flex  min-h-[20rem] sm:hidden w-screen px-2 items-center justify-center text-base font-bold text-red-600">
            Admin Panel can be accessed only from larger screens.
            (Laptop/monitor etc.)
          </div>
          <section className="w-full hidden sm:block">
            <nav className=" w-full px-5 py-4 bg-primary flex relative">
              <AiOutlineMenu
                className="text-lg text-primaryText hover:cursor-pointer absolute top-2 left-2 z-20"
                onClick={openSidebar}
              />
              <Sidebar />
            </nav>
            <Outlet />
          </section>
        </>
      ) : (
        <AdminLogin />
      )}
    </>
  );
};

export default AdminPanel;
