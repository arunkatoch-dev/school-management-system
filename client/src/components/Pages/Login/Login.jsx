import {  NavLink } from "react-router-dom";
import login from "../../../assets/login.svg";
import { FaUserCircle } from "react-icons/fa";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { inputOnChangeReducer, studentLogin } from "../../../slices/authSlice";
import { Navigate } from "react-router-dom";
// import baseURL from "./baseUrl";
const inputCss = "w-[18rem] border px-1 py-2 outline-primary rounded-sm";

const Login = () => {
  const dispatch = useDispatch();
  const loginCredentials = useSelector(
    (state) => state.authSlice.loginCredentials
  );
  const isLoginPending = useSelector((state) => state.authSlice.isLoginPending);
  const loginStatus = useSelector((state) => state.authSlice.loginStatus);
  if (loginStatus) {
    Navigate("/");
  }

  return (
    <>
      <Header />
      <section className="w-full flex items-center justify-center md:h-screen">
        <div className=" hidden md:flex items-center justify-center w-[50%] h-full">
          <img src={login} alt="signIn_img" className="w-[80%]" />
        </div>
        <div className="w-[98%] flex items-center justify-center md:w-[50%] py-5 h-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col p-4 gap-5 rounded-xl shadow-xl border"
            autoComplete="off"
          >
            <div className="w-full flex items-center justify-center">
              <FaUserCircle className="text-6xl text-gray-500" />
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
            {isLoginPending ? (
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
                  dispatch(studentLogin(loginCredentials));
                }}
              >
                Log In
              </button>
            )}
            <div className="flex items-center justify-center gap-2">
              <NavLink
                to="/studentregister"
                className="text-base text-gray-600 hover:underline hover:text-blue-500"
              >
                Register
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
