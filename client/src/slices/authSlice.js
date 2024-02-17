/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";

const initialState = {
  loginCredentials: {
    username: "",
    password: "",
  },
  registrationCredentials: {
    username: "",
    password: "",
    confirmPassword: "",
  },
  // userId: "", // unique id which is used in all over the admission process. (comes from backend after authentication.)
  loginStatus: false, // if true: student loggedin if false: not logged in
  registerStatus: false,
  isLoginPending: false,
  isRegisterPending: false,
  isRegisterError: false,
  isLoginError: false,
  isLogoutError: false,
  isLogoutPending: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    inputOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.loginCredentials[name] = action.payload.value;
    },

    registerInputOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.registrationCredentials[name] = action.payload.value;
    },
  },

  extraReducers: (builder) => {
    // Registration (New user registration) -------->>>>>>>>
    builder.addCase(registration.pending, (state) => {
      state.isRegisterPending = true;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.isRegisterPending = false;
      state.registerStatus = true;
      window.alert("register successful.");
    });
    builder.addCase(registration.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isRegisterError = true;
      window.alert(action.payload);
    });

    //  Student Login ---------->>>>>>>>
    builder.addCase(studentLogin.pending, (state) => {
      state.isLoginPending = true;
    });
    builder.addCase(studentLogin.fulfilled, (state, action) => {
      state.isLoginPending = false;
      state.loginStatus = true;
      state.loginCredentials.username = "";
      state.loginCredentials.password = "";
      localStorage.setItem("userId", action.payload.userId);
    });
    builder.addCase(studentLogin.rejected, (state, action) => {
      state.isLoginPending = false;
      state.isLoginError = true;
      window.alert(`Oops something went wrong plz try again`);
      state.loginCredentials.username = "";
      state.loginCredentials.password = "";
    });

    //  track student login status
    builder.addCase(checkStudentLoginStatus.pending, (state, action) => {
      state.isLoginPending = true;
    });
    builder.addCase(checkStudentLoginStatus.fulfilled, (state, action) => {
      if (action.payload.msg === "user not authenticated") {
        state.isLoginPending = false;
        state.loginStatus = false;
      }
      if (action.payload.msg === "verified student") {
        state.isLoginPending = false;
        state.loginStatus = true;
      }
    });

    builder.addCase(checkStudentLoginStatus.rejected, (state, action) => {
      console.error("can't get login status. some error occured.");
    });

    // Logout student
    builder.addCase(studentLogout.pending, (state, action) => {
      state.isLogoutPending = true;
    });
    builder.addCase(studentLogout.fulfilled, (state, action) => {
      if (action.payload.msg === "logged out") {
        state.loginStatus = false;
        state.isLogoutPending = false;
        localStorage.removeItem("userId");
        localStorage.removeItem("currentSession");
        window.alert("Logout Successfully.");
      }
      if (action.payload.msg === "error") {
        state.loginStatus = true;
        state.isLogoutPending = false;
        alert("failed to logut student...");
      }
    });
    builder.addCase(studentLogout.rejected, (state, action) => {
      state.isLogoutError = true;
      state.isLogoutPending = false;
      alert("failed to logout");
      console.error("some error occured while logging out.");
    });
  },
});

export const registration = createAsyncThunk(
  "registration",
  async (details) => {
    const registration = await axios.post(
      `${baseURL}student/register`,
      details,
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    return await registration.data;
  }
);
export const studentLogin = createAsyncThunk(
  "studentLogin",
  async (details) => {
    const studentLogin = await axios.post(`${baseURL}student/login`, details, {
      credentials: "include",
      withCredentials: true,
    });
    return await studentLogin.data;
  }
);

// track login status
export const checkStudentLoginStatus = createAsyncThunk(
  "checkStudentLoginStatus",
  async () => {
    const checkStudentLoginStatus = await axios.get(`${baseURL}`, {
      credentials: "include",
      withCredentials: true,
    });
    return await checkStudentLoginStatus.data;
  }
);

// student logout
export const studentLogout = createAsyncThunk("studentLogout", async () => {
  const studentLogout = await axios.get(`${baseURL}studentLogout`, {
    credentials: "include",
    withCredentials: true,
  });
  return await studentLogout.data;
});

export const { inputOnChangeReducer, registerInputOnChangeReducer } =
  authSlice.actions;
export default authSlice.reducer;
