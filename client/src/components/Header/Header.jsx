import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { checkStudentLoginStatus, studentLogout } from "../../slices/authSlice";
import { useEffect, useState } from "react";
import { clearAllDataReducer } from "../../slices/admissionFormSlice";
const navlinksCss = "text-white font-primaryFont text-base hover:text-gray-200";
const loginBtnCss =
  "flex items-center justify-center bg-secondary text-white px-5 py-2 rounded-lg hover:bg-teal-500 text-base";

const Header = () => {
  const [mobileNavDisplay, setMobileNavDisplay] = useState(false);
  const loginStatus = useSelector((state) => state.authSlice.loginStatus);
  const isLogoutPending = useSelector(
    (state) => state.authSlice.isLogoutPending
  );

  const dispatch = useDispatch();
  const onMenuClickHandler = (e) => {
    e.preventDefault();
    setMobileNavDisplay((mobileNavDisplay) => !mobileNavDisplay);
  };

  useEffect(() => {
    dispatch(checkStudentLoginStatus());
  }, [dispatch]);
  return (
    <>
      <header className="hidden w-full bg-primary sm:flex items-center justify-between px-5 py-2">
        <NavLink
          to="/"
          className="text-white font-primaryFont text-base sm:text-sm md:text-lg tracking-wide"
        >
          Model Public School
        </NavLink>

        <nav>
          <ul className="flex items-center justify-center gap-5">
            <li>
              <NavLink to="/" className={navlinksCss}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navlinksCss}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navlinksCss}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/admissions" className={navlinksCss}>
                Admissions
              </NavLink>
            </li>
          </ul>
        </nav>
        {loginStatus ? (
          <button
            className={loginBtnCss}
            onClick={(e) => {
              e.preventDefault();
              dispatch(clearAllDataReducer());
              dispatch(studentLogout());
            }}
          >
            {isLogoutPending ? "Logging out" : "Logout"}
          </button>
        ) : (
          <NavLink to="/login" className={loginBtnCss}>
            Login
          </NavLink>
        )}
      </header>

      {/* Header for Mobile phones or small screens: ------->>>>> */}
      <header className="sm:hidden w-full bg-primary flex items-center justify-between p-2 relative">
        <NavLink
          to="/"
          className="text-white font-primaryFont text-base tracking-wide"
        >
          Model Public School
        </NavLink>
        <AiOutlineMenu
          className="text-lg text-primaryText hover:cursor-pointer"
          onClick={onMenuClickHandler}
        />
        <nav
          className={
            mobileNavDisplay
              ? "absolute top-[100%] py-2 px-5 h-[15rem] right-0 bg-teal-300 z-50"
              : "hidden"
          }
        >
          <ul className="flex  flex-col items-center justify-center gap-5">
            <li>
              <NavLink to="/" className={navlinksCss}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navlinksCss}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navlinksCss}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/admissions" className={navlinksCss}>
                Admissions
              </NavLink>
            </li>
            {loginStatus ? (
              <button
                className={navlinksCss}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(clearAllDataReducer());
                  dispatch(studentLogout());
                }}
              >
                {isLogoutPending ? "Logging out" : "Logout"}
              </button>
            ) : (
              <NavLink to="/login" className={loginBtnCss}>
                Login
              </NavLink>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
