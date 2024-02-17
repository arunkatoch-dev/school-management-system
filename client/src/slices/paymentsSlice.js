import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";

const initialState = {
  isPaymentLoading: false,
  paymentData: undefined,
  isPaymentError: false,
  clientSecret: "",
  isPaymentStatusPending: false,
  isPaymentStatusError: false,
};
const paymentsSlice = createSlice({
  name: "payments Slice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newPayment.pending, (state) => {
      state.isPaymentLoading = true;
    });
    builder.addCase(newPayment.fulfilled, (state, action) => {
      state.isPaymentLoading = false;
      // window.location.href = action.payload.paymentUrl;
      state.clientSecret = action.payload.clientSecret;
    });
    builder.addCase(newPayment.rejected, (state, action) => {
      state.isPaymentLoading = false;
      state.isPaymentError = true;
      console.log(action.payload);
    });
  },
});

export const newPayment = createAsyncThunk("newPayment", async (details) => {
  const { totalFees, studentId, session, studentClass } = details;
  const newPayment = await axios.post(
    `${baseURL}create-intent`,
    { totalFees, studentId, session, studentClass },
    {
      credentials: "include",
      withCredentials: true,
    }
  );
  return newPayment.data;
});

// export const { } = paymentsSlice.actions;
export default paymentsSlice.reducer;
