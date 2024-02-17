import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noticeBoard from "../slices/noticeBoardSlice";
import eventsBoard from "../slices/eventsBoardSlice";
import achievementsBoard from "../slices/achievementsBoardSlice";
import sidebar from "../slices/sidebarSlice";
import admissionFormSlice from "../slices/admissionFormSlice";
import authSlice from "../slices/authSlice";
import adminAuthSlice from "../slices/adminAuthSlice";
import adminHomepageSlice from "../slices/adminHomepageSlice";
import paymentsSlice from "../slices/paymentsSlice";

const reducer = combineReducers({
  noticeBoard,
  eventsBoard,
  sidebar,
  achievementsBoard,
  admissionFormSlice,
  authSlice,
  adminAuthSlice,
  adminHomepageSlice,
  paymentsSlice,
});

const store = configureStore({ reducer });

export default store;
