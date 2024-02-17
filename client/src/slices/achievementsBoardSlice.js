import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";
const initialState = {
  newAchievementPopupDisplay: false,
  deleteAchievementPopupDisplay: false,
  newAchievement: {
    studentNameIntputVal: "",
    achievementDetailsInputVal: "",
    showImage: null,
    imageInputVal: null,
  },
  achievements: [],
  achievementToUpdateId: "",
  isAchievementsLoading: false,
  isNewAchievementLoading: false,
  isNewAchievementError: false,
  isUpdateLoading: false,
  isDeleteLoading: false,
  isDeleteError: false,
};

const achievementsBoardSlice = createSlice({
  name: "achievementsBoard Panel",
  initialState: initialState,
  reducers: {
    newAchievementPopupReducer: (state, action) => {
      state.newAchievementPopupDisplay = action.payload;
    },
    newAchievementOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.newAchievement[name] = action.payload.value;
    },
    deleteAchievementReducer: (state, action) => {
      state.deleteAchievementPopupDisplay = action.payload.value;
      state.achievementToUpdateId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    // Add New Achievement
    builder.addCase(addNewAchievement.pending, (state) => {
      state.isNewAchievementLoading = true;
    });
    builder.addCase(addNewAchievement.fulfilled, (state) => {
      state.isNewAchievementLoading = false;
      state.newAchievement.studentNameIntputVal = "";
      state.newAchievement.achievementDetailsInputVal = "";
      state.newAchievement.imageInputVal = null;
      state.newAchievementPopupDisplay = false;
    });
    builder.addCase(addNewAchievement.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isNewAchievementError = true;
      window.alert(action.payload.msg);
    });
    // Get Achievement
    builder.addCase(getAchievements.pending, (state) => {
      state.isAchievementsLoading = true;
    });
    builder.addCase(getAchievements.fulfilled, (state, action) => {
      state.isAchievementsLoading = false;
      state.achievements = action.payload;
    });
    builder.addCase(getAchievements.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isGetEventError = true;
    });

    // Delete Achievement

    builder.addCase(deleteAchievement.pending, (state) => {
      state.isDeleteLoading = true;
    });
    builder.addCase(deleteAchievement.fulfilled, (state) => {
      state.isDeleteLoading = false;
      state.deleteAchievementPopupDisplay = false;
    });
    builder.addCase(deleteAchievement.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isDeleteError = true;
    });
  },
});

// actions
export const getAchievements = createAsyncThunk("getAchievements", async () => {
  const achievements = await axios.get(`${baseURL}admin/achievementsboard`);
  return achievements.data;
});
export const addNewAchievement = createAsyncThunk(
  "addNewAchievement",
  async (details) => {
    const newAchievement = await axios.post(
      `${baseURL}admin/achievementsboard`,
      details,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
        withCredentials: true,
      }
    );
    return newAchievement.data;
  }
);
export const deleteAchievement = createAsyncThunk(
  "deleteAchievement",
  async (id) => {
    const deleteAchievement = await axios.delete(
      `${baseURL}admin/achievementsboard/${id}`
    );
    return deleteAchievement.data.msg;
  }
);

export const {
  newAchievementPopupReducer,
  newAchievementOnChangeReducer,
  deleteAchievementReducer,
} = achievementsBoardSlice.actions;
export default achievementsBoardSlice.reducer;
