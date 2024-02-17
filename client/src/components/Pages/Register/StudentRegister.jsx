import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import login from "../../../assets/login.svg";
import { FaUserCircle } from "react-icons/fa";
import Header from "../../Header/Header";
import {
  registerInputOnChangeReducer,
  registration,
} from "../../../slices/authSlice";
const inputCss = "w-[18rem] border px-1 py-2 outline-primary rounded-sm";

const StudentRegister = () => {
  const dispatch = useDispatch();
  const registrationCredentials = useSelector(
    (state) => state.authSlice.registrationCredentials
  );
  const isRegisterPending = useSelector(
    (state) => state.authSlice.isRegisterPending
  );
  const registerStatus = useSelector((state) => state.authSlice.registerStatus);
  if (registerStatus) {
    Navigate("/login");
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
              value={registrationCredentials.username}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  registerInputOnChangeReducer({
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
              value={registrationCredentials.password}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  registerInputOnChangeReducer({
                    name: "password",
                    value: e.target.value,
                  })
                );
              }}
              autoComplete="off"
            />
            <input
              type="text"
              name="confirmPassword"
              placeholder="confirm your password"
              className={inputCss}
              required
              value={registrationCredentials.confirmPassword}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  registerInputOnChangeReducer({
                    name: e.target.name,
                    value: e.target.value,
                  })
                );
              }}
              autoComplete="off"
            />
            {isRegisterPending ? (
              <button className="py-2 bg-primary text-white text-lg hover:bg-primaryHover hover:cursor-pointer">
                Registering...
              </button>
            ) : (
              <button
                className="py-2 bg-primary text-white text-lg hover:bg-primaryHover hover:cursor-pointer"
                type="submit"
                onClick={(e) => {
                  const { username, password, confirmPassword } =
                    registrationCredentials;
                  e.preventDefault();
                  if (!(username && password)) {
                    return window.alert(`All fields are required`);
                  }
                  if (password !== confirmPassword) {
                    return window.alert(
                      `password and confirmPassword mismatch.`
                    );
                  }
                  dispatch(registration(registrationCredentials));
                }}
              >
                Register Now
              </button>
            )}
            <div className="flex items-center justify-center gap-2">
              <NavLink
                to="/login"
                className="text-base text-gray-600 hover:underline hover:text-blue-500"
              >
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default StudentRegister;
