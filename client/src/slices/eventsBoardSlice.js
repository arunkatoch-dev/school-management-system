import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";
const initialState = {
  newEventPopupDisplay: false,
  editEventPopupDisplay: false,
  deleteEventPopupDisplay: false,
  newEvent: {
    eventInput: "",
  },
  editEvent: {
    id: "",
    eventInput: "",
  },
  events: [],
  isEventsLoading: false,
  eventToUpdateId: "",
  isNewEventLoading: false,
  isUpdateLoading: false,
  isDeleteLoading: false,
  isGetEventError: false,
  isNewEventError: false,
  isUpdateError: false,
  isDeleteError: false,
};
const eventsBoardSlice = createSlice({
  name: "eventsBoard Panel",
  initialState: initialState,
  reducers: {
    newEventPopupReducer: (state, action) => {
      state.newEventPopupDisplay = action.payload;
    },
    newEventOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.newEvent[name] = action.payload.value;
    },

    editEventPopupReducer: (state, action) => {
      state.editEventPopupDisplay = action.payload.editDisplay;
      state.editEvent.id = action.payload.id;
      state.editEvent.eventInput = action.payload.eventInput;
    },
    closeEditPopupReducer: (state, action) => {
      state.editEventPopupDisplay = action.payload;
    },
    editEventOnChangeReducer: (state, action) => {
      const name = action.payload.name;
      state.editEvent[name] = action.payload.value;
    },
    deleteEventReducer: (state, action) => {
      state.deleteEventPopupDisplay = action.payload.value;
      state.eventToUpdateId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    // Add New Notification
    builder.addCase(addNewEvent.pending, (state) => {
      state.isNewEventLoading = true;
    });
    builder.addCase(addNewEvent.fulfilled, (state) => {
      state.isNewEventLoading = false;
      state.newEvent.eventInput = "";
      state.newEventPopupDisplay = false;
    });
    builder.addCase(addNewEvent.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isNewEventError = true;
    });
    // Get Notification
    builder.addCase(getEvents.pending, (state) => {
      state.isEventsLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.isEventsLoading = false;
      state.events = action.payload;
    });
    builder.addCase(getEvents.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isGetEventError = true;
    });
    // Edit / Update Notification
    builder.addCase(updateEvent.pending, (state) => {
      state.isUpdateLoading = true;
    });
    builder.addCase(updateEvent.fulfilled, (state) => {
      state.isUpdateLoading = false;
      state.editEventPopupDisplay = false;
    });
    builder.addCase(updateEvent.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isUpdateError = true;
    });
    //  Delete Notification
    builder.addCase(deleteEvent.pending, (state) => {
      state.isDeleteLoading = true;
    });
    builder.addCase(deleteEvent.fulfilled, (state) => {
      state.isDeleteLoading = false;
      state.deleteEventPopupDisplay = false;
    });
    builder.addCase(deleteEvent.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isDeleteError = true;
    });
  },
});
//  Actions
export const getEvents = createAsyncThunk("getEvents", async () => {
  const events = await axios.get(`${baseURL}admin/eventsboard`);
  return events.data;
});
export const addNewEvent = createAsyncThunk("addNewEvent", async (details) => {
  const newEvent = await axios.post(
    `${baseURL}admin/eventsboard`,
    {
      event: details.event,
      eventAddDate: details.date,
    },
    {
      credentials: "include",
      withCredentials: true,
    }
  );
  return newEvent.data.msg;
});
export const updateEvent = createAsyncThunk("updateEvent", async (details) => {
  const update = await axios.patch(
    `${baseURL}admin/eventsboard`,
    {
      id: details.id,
      event: details.event,
    },
    {
      credentials: "include",
      withCredentials: true,
    }
  );
  return update.data.msg;
});
export const deleteEvent = createAsyncThunk("deleteEvent", async (id) => {
  const deleteEvent = await axios.delete(`${baseURL}admin/eventsboard/${id}`);
  return deleteEvent.data.msg;
});

export const {
  newEventOnChangeReducer,
  newEventPopupReducer,
  editEventPopupReducer,
  closeEditPopupReducer,
  editEventOnChangeReducer,
  deleteEventReducer,
} = eventsBoardSlice.actions;
export default eventsBoardSlice.reducer;
