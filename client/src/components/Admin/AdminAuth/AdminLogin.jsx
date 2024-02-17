import { useDispatch, useSelector } from "react-redux";
import login from "../../../assets/login.svg";
import { Navigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  adminLogin,
  inputOnChangeReducer,
} from "../../../slices/adminAuthSlice";
const inputCss = "w-[18rem] border px-1 py-2 outline-primary rounded-sm";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { loginCredentials, isAdminLoginPending, adminLoginStatus } =
    useSelector((state) => state.adminAuthSlice);
  if (adminLoginStatus) {
    Navigate("/admin/");
  }

  return (
    <>
      <section className="w-full flex items-center justify-center md:h-screen">
        <div className=" hidden md:flex items-center justify-center w-[50%] h-full">
          <img src={login} alt="signIn_img" className="w-[80%]" />
        </div>
        <div className="w-[98%] gap-5 flex flex-col items-center justify-center md:w-[50%] py-5 h-full">
          <div className="p-4 flex rounded-sm flex-col border items-center justify-center">
            <span className="text-base font-semibold underline">
              Use these credentials for testing:
            </span>
            <div className="flex gap-3 items-center justify-center">
              <span className="text-sm font-semibold">Id:</span>
              <span className="text-sm">guestadmin@gmail.com</span>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <span className="text-sm font-semibold">Password:</span>
              <span className="text-sm">guestadmin123</span>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col p-4 gap-5 rounded-xl shadow-xl border"
            autoComplete="off"
          >
            <div className="w-full gap-3 flex flex-col items-center justify-center">
              <FaUserCircle className="text-6xl text-gray-500" />
              <span className="text-xl text-gray-500 font-bold">
                Admin Panel
              </span>
            </div>
            <input
              type="email"
              name="username"
              placeholder="Enter your email"
              className={inputCss}
              required
              value={loginCredentials.username}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  inputOnChangeReducer({
                    name: "username",
                    value: e.target.value,
                  })
                );
              }}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className={inputCss}
              required
              value={loginCredentials.password}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  inputOnChangeReducer({
                    name: "password",
                    value: e.target.value,
                  })
                );
              }}
              autoComplete="off"
            />
            {isAdminLoginPending ? (
              <button className="py-2 bg-primary text-white text-lg hover:bg-primaryHover hover:cursor-pointer">
                Logging In...
              </button>
            ) : (
              <button
                className="py-2 bg-primary text-white text-lg hover:bg-primaryHover hover:cursor-pointer"
                type="submit"
                onClick={(e) => {
                  const { username, password } = loginCredentials;
                  e.preventDefault();
                  if (!(username && password)) {
                    return window.alert(`username and password is required`);
                  }
                  dispatch(adminLogin(loginCredentials));
                }}
              >
                Log In
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
