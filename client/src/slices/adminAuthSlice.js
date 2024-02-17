import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";

const initialState = {
  loginCredentials: {
    username: "",
    password: "",
  },
  adminId: "",
  adminLoginStatus: false, // if true: student loggedin if false: not logged in
  isAdminLoginPending: false,
  isRegisterPending: false,
  isRegisterError: false,
  isAdminLoginError: false,
  isLogoutError: false,
  isLogoutPending: false,
};

const adminAuthSlice = createSlice({
  name: "adminAuthentication",
  initialState: initialState,
  reducers: {
    inputOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.loginCredentials[name] = action.payload.value;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state) => {
      state.isAdminLoginPending = true;
    });

    builder.addCase(adminLogin.fulfilled, (state, action) => {
      if (action.payload.status === "success") {
        state.isAdminLoginPending = false;
        state.adminLoginStatus = true;
        state.loginCredentials.username = "";
        state.loginCredentials.password = "";
        state.adminId = action.payload.adminId;
      }
      if (action.payload.status === "failed") {
        window.alert(`Invalid Credentials Found or Some error occured.`);
      }
    });
    builder.addCase(adminLogin.rejected, (state) => {
      window.alert(`Invalid Credentials`);
      state.isAdminLoginPending = false;
      state.adminLoginStatus = false;
      state.isAdminLoginError = true;
      state.loginCredentials.username = "";
      state.loginCredentials.password = "";
    });

    //  track Admin login status
    builder.addCase(checkAdminLoginStatus.pending, (state) => {
      state.isAdminLoginPending = true;
    });
    builder.addCase(checkAdminLoginStatus.fulfilled, (state, action) => {
      // console.log(action.payload);
      if (action.payload.msg === "admin not authenticated") {
        state.isAdminLoginPending = false;
        state.adminLoginStatus = false;
      }
      if (action.payload.msg === "verified Admin") {
        state.isAdminLoginPending = false;
        state.adminLoginStatus = true;
      }
    });

    builder.addCase(checkAdminLoginStatus.rejected, (state) => {
      state.isAdminLoginPending = false;
      console.error("can't get login status. some error occured.");
    });
    // Logout Admin
    builder.addCase(adminLogout.pending, (state) => {
      state.isLogoutPending = true;
    });
    builder.addCase(adminLogout.fulfilled, (state, action) => {
      if (action.payload.msg === "logged out") {
        state.adminLoginStatus = false;
        state.isLogoutPending = false;
        window.alert("Logout Successfully.");
      }
      if (action.payload.msg === "error") {
        state.adminLoginStatus = true;
        state.isLogoutPending = false;
        window.alert("failed to logout Admin...");
      }
    });
    builder.addCase(adminLogout.rejected, (state) => {
      state.isLogoutError = true;
      state.isLogoutPending = false;
      window.alert("failed to logout");
      console.error("some error occured while logging out.");
    });
  },
});

export const adminLogin = createAsyncThunk("AdminLogin", async (details) => {
  const adminLogin = await axios.post(`${baseURL}admin/login`, details, {
    credentials: "include",
    withCredentials: true,
  });
  return await adminLogin.data;
});

// track login status
export const checkAdminLoginStatus = createAsyncThunk(
  "checkAdminLoginStatus",
  async () => {
    const checkAdminLoginStatus = await axios.get(`${baseURL}admin`, {
      credentials: "include",
      withCredentials: true,
    });
    return await checkAdminLoginStatus.data;
  }
);

// Admin logout
export const adminLogout = createAsyncThunk("adminLogout", async () => {
  const adminLogout = await axios.get(`${baseURL}admin/logout`, {
    credentials: "include",
    withCredentials: true,
  });
  return await adminLogout.data;
});

export const { inputOnChangeReducer } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
