import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";

const initialState = {
  toggleSessionDisplay: false,
  toggleConfirmBoxDisplay: false,
  session: {
    startYear: "",
    endYear: "",
  },
  isAdminDataPending: false,
  adminData: {},
  isCurrentSessionDataLoading: false,
  noStudentDataFound: false,
  userMsg: "",
  studentsData: [],
  toggleFullDetailsDisplay: false,
  currentStudentData: {},
  toggleFilterDisplay: false,
};
const adminHomepageSlice = createSlice({
  name: "adminHomepageSlice",
  initialState: initialState,
  reducers: {
    toggleSessionWindow: (state) => {
      state.toggleSessionDisplay = !state.toggleSessionDisplay;
    },
    confirmSession: (state, action) => {
      state.toggleConfirmBoxDisplay = action.payload;
    },
    onSessionChangeHandler: (state, action) => {
      const name = action.payload.name;
      state.session[name] = action.payload.value;
    },
    toggleFullDetails: (state, action) => {
      state.toggleFullDetailsDisplay = action.payload.display;
      state.currentStudentData = action.payload.currStudent;
    },
    toggleFilterPopup: (state, action) => {
      state.toggleFilterDisplay = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get Admin Settings i.e admission last date, change session, etc -------->>>>>>>>
    builder.addCase(getAdminData.pending, (state) => {
      state.isAdminDataPending = true;
    });
    builder.addCase(getAdminData.fulfilled, (state, action) => {
      state.isAdminDataPending = false;
      const getAdminDb = action.payload;
      getAdminDb.map((currElm) => {
        state.adminData = currElm;
        localStorage.setItem("currentSession", currElm.currentSession);
      });
    });
    builder.addCase(getAdminData.rejected, (state, action) => {
      state.isAdminDataPending = false;
      console.warn("some error occured");
      console.warn("error:", action.payload);
    });
    // Update Session (Change Current Session) -------->>>>>>>>
    builder.addCase(changeCurrentSession.pending, (state) => {
      state.isAdminDataPending = true;
    });
    builder.addCase(changeCurrentSession.fulfilled, (state, action) => {
      state.isAdminDataPending = false;
      window.alert(action.payload.status);
    });
    builder.addCase(changeCurrentSession.rejected, (state, action) => {
      state.isAdminDataPending = false;
      console.warn("error:", action.payload.error);
    });
    // Get CurrentSession Students Details -------->>>>>>>>
    builder.addCase(getCurrentSessionStudents.pending, (state) => {
      state.isCurrentSessionDataLoading = true;
    });
    builder.addCase(getCurrentSessionStudents.fulfilled, (state, action) => {
      state.isCurrentSessionDataLoading = false;
      if (action.payload?.length >= 1) {
        state.noStudentDataFound = false;
        state.studentsData = action.payload;
      }
      if (action.payload?.length === 0) {
        state.noStudentDataFound = true;
        state.userMsg = "No Such Data Found.";
      }
    });
    builder.addCase(getCurrentSessionStudents.rejected, (state, action) => {
      state.isCurrentSessionDataLoading = false;
      console.warn("error:", action.payload.error);
    });
    // Get searchStudents  Details -------->>>>>>>>
    builder.addCase(searchStudents.pending, (state) => {
      state.isCurrentSessionDataLoading = true;
    });
    builder.addCase(searchStudents.fulfilled, (state, action) => {
      state.isCurrentSessionDataLoading = false;
      if (action.payload?.length >= 1) {
        state.noStudentDataFound = false;
        state.studentsData = action.payload;
      }
      if (action.payload?.length === 0) {
        state.noStudentDataFound = true;
        state.userMsg = "No Such Data Found.";
      }
    });
    builder.addCase(searchStudents.rejected, (state) => {
      state.isCurrentSessionDataLoading = false;
    });
  },
});

export const getAdminData = createAsyncThunk("getAdminData", async () => {
  const getAdminData = await axios.get(`${baseURL}admin/controls`);
  return getAdminData.data;
});
export const changeCurrentSession = createAsyncThunk(
  "changeCurrentSession",
  async (details) => {
    const changeCurrentSession = await axios.patch(
      `${baseURL}admin/controls/changesession/${details.id}`,
      {
        session: details.changedSession,
      },
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    return changeCurrentSession.data;
  }
);

export const getCurrentSessionStudents = createAsyncThunk(
  "getCurrentSessionStudents",
  async (details) => {
    const getCurrentSessionStudents = await axios.get(
      `${baseURL}admin/students/${details.session}`
    );
    return getCurrentSessionStudents.data;
  }
);
export const searchStudents = createAsyncThunk(
  "searchStudents",
  async (details) => {
    const { searchVal, studentClass } = details;
    const searchStudents = await axios.post(
      `${baseURL}admin/filterStudents`,
      {
        searchVal: searchVal,
        studentClass: studentClass,
      },
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    return searchStudents.data;
  }
);

export const {
  confirmSession,
  onSessionChangeHandler,
  toggleSessionWindow,
  toggleFullDetails,
  toggleFilterPopup,
} = adminHomepageSlice.actions;
export default adminHomepageSlice.reducer;
