import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  sidebarDisplay: false,
};

const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    sidebarReducer: (state, action) => {
      state.sidebarDisplay = action.payload;
    },
  },
});

export const { sidebarReducer } = sidebarSlice.actions;
export default sidebarSlice.reducer;
