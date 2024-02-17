/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";
const initialState = {
  newNotificationPopupDisplay: false,
  editNotificationPopupDisplay: false,
  deleteNotificationPopupDisplay: false,
  newNotice: {
    headingInput: "",
    detailsInput: "",
  },
  editNotice: {
    id: "",
    headingInput: "",
    detailsInput: "",
  },
  notifications: [],
  isNotificationsLoading: false,
  notificationToUpdateId: "",
  isNewNoticeLoading: false,
  isUpdateLoading: false,
  isDeleteLoading: false,
  isGetNotificationError: false,
  isNewNoticeError: false,
  isUpdaError: false,
  isDeleteError: false,
};
const noticeBoardSlice = createSlice({
  name: "noticeBoard Panel",
  initialState: initialState,
  reducers: {
    newNotificationPopupReducer: (state, action) => {
      state.newNotificationPopupDisplay = action.payload;
    },
    newNoticeOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.newNotice[name] = action.payload.value;
    },

    editNotificationPopupReducer: (state, action) => {
      state.editNotificationPopupDisplay = action.payload.editDisplay;
      state.editNotice.id = action.payload.id;
      state.editNotice.headingInput = action.payload.headingValue;
      state.editNotice.detailsInput = action.payload.detailsValue;
    },
    closeEditPopupReducer: (state, action) => {
      state.editNotificationPopupDisplay = action.payload;
    },
    editNoticeOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.editNotice[name] = action.payload.value;
    },
    deleteNoticeReducer: (state, action) => {
      state.deleteNotificationPopupDisplay = action.payload.value;
      state.notificationToUpdateId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    // Add New Notification
    builder.addCase(addNewNotice.pending, (state, action) => {
      state.isNewNoticeLoading = true;
    });
    builder.addCase(addNewNotice.fulfilled, (state, action) => {
      state.isNewNoticeLoading = false;
      state.newNotificationPopupDisplay = false;
    });
    builder.addCase(addNewNotice.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isNewNoticeError = true;
    });
    // Get Notification
    builder.addCase(getNotifications.pending, (state, action) => {
      state.isNotificationsLoading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.isNotificationsLoading = false;
      state.notifications = action.payload;
    });
    builder.addCase(getNotifications.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isGetNotificationError = true;
    });
    // Edit / Update Notification
    builder.addCase(updateNotice.pending, (state, action) => {
      state.isUpdateLoading = true;
    });
    builder.addCase(updateNotice.fulfilled, (state, action) => {
      state.isUpdateLoading = false;
      state.editNotificationPopupDisplay = false;
    });
    builder.addCase(updateNotice.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isUpdaError = true;
    });
    //  Delete Notification
    builder.addCase(deleteNotice.pending, (state, action) => {
      state.isDeleteLoading = true;
    });
    builder.addCase(deleteNotice.fulfilled, (state, action) => {
      state.isDeleteLoading = false;
      state.deleteNotificationPopupDisplay = false;
    });
    builder.addCase(deleteNotice.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isDeleteError = true;
    });
  },
});
//  Actions
export const getNotifications = createAsyncThunk(
  "getNotifications",
  async () => {
    const notifications = await axios.get(`${baseURL}admin/noticeboard`);
    return notifications.data;
  }
);
export const addNewNotice = createAsyncThunk(
  "addNewNotice",
  async (details) => {
    const newNotice = await axios.post(
      `${baseURL}admin/noticeboard`,
      {
        notificationHeading: details.heading,
        notificationdetails: details.details,
        notificationAddDate: details.date,
      },
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    return newNotice.data.msg;
  }
);
export const updateNotice = createAsyncThunk(
  "updateNotice",
  async (details) => {
    const update = await axios.patch(
      `${baseURL}admin/noticeboard`,
      {
        id: details.id,
        updateNoticeHeading: details.heading,
        updateNoticeDetails: details.details,
      },
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    return update.data.msg;
  }
);
export const deleteNotice = createAsyncThunk("deleteNotice", async (id) => {
  const deleteNotice = await axios.delete(`${baseURL}admin/noticeboard/${id}`);
  return deleteNotice.data.msg;
});

//  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

export const {
  newNoticeOnChangeReducer,
  newNotificationPopupReducer,
  editNotificationPopupReducer,
  closeEditPopupReducer,
  editNoticeOnChangeReducer,
  deleteNoticeReducer,
} = noticeBoardSlice.actions;
export default noticeBoardSlice.reducer;
