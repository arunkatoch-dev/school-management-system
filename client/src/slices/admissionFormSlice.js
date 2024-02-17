/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../components/constants";

const initialState = {
  isNewAdmissionLoading: false,
  newAdmissionSent: false,
  isAdminAdmissionsLoading: false,
  isStudentDetailsLoading: false,
  studentSessionDetailsDownload: {},
  studentDetails: {},
  getCurrentMonth: "",
  toggleDetailsPreview: false,
  isAllSessionsDetailsLoading: false,
  allSessionsDetails: [],
  isAllSessionDetailsError: false,
  noApplicationFound: false,
  isErrorGettingStudent: false,
  admissionStatusLoading: false,
  toggle_Admin_Admission_Panel_Preview: false,
  rejected_Form_Deletion_Loading: false,
  previewApplication: false,
  admissionFormState: "false",
  isNewAdmissionError: false,
  isGetAdminAdmissionsError: false,
  isDeleteAdmissionsError: false,
  rejectedFormDelition: false,
  adminPreviewDetails: {},
  admissions: [],
  formData: {},
  userMsg: "",
  rejectionMsg: "",
  applicationPendingState: false,
  applicationApprovalState: false,
  applicationRejectionState: false,
  rejectedFormDisplay: false,
  studentDetailsUserMsg: "",
  noStudentDetailsFound: true,
  images: {
    studentImage: null,
    studentSignature: null,
    showImage: null,
    showSignature: null,
  },
  isFeeDetailsLoading: false,
  feesDetails: {},
  togglePaymentDetails: false,
  isFeeDetailsError: false,
  paymentDetailsPageDisplay: false,
};

const admissionFormSlice = createSlice({
  name: "admission Form",
  initialState: initialState,
  reducers: {
    toggleApplicationPreview: (state, action) => {
      state.previewApplication = action.payload;
    },
    studentFormData: (state, action) => {
      state.formData = action.payload;
    },
    studentImageReducer: (state, action) => {
      const name = action.payload.name;
      state.images[name] = action.payload.value;
    },
    adminAdmissionPanelReducer: (state, action) => {
      state.toggle_Admin_Admission_Panel_Preview = action.payload;
    },
    adminAdmissionPreviewDetailsReducer: (state, action) => {
      state.adminPreviewDetails = action.payload;
    },

    toggleStudentDetailsrReducer: (state, action) => {
      state.toggleDetailsPreview = action.payload.expandView;
      state.studentSessionDetailsDownload = action.payload.studentDetails;
    },

    clearAllDataReducer: (state) => {
      state.studentSessionDetailsDownload = {};
      state.studentDetails = {};
      state.allSessionsDetails = [];
      state.adminPreviewDetails = {};
      state.admissions = [];
      state.formData = {};
      state.feesDetails = {};
      state.applicationPendingState = false;
      state.applicationApprovalState = false;
      state.applicationRejectionState = false;
      state.togglePaymentDetails = false;
    },
  },

  extraReducers: (builder) => {
    // New Admission -------->>>>>>>>
    builder.addCase(newAdmission.pending, (state) => {
      state.isNewAdmissionLoading = true;
    });
    builder.addCase(newAdmission.fulfilled, (state, action) => {
      state.isNewAdmissionLoading = false;
      if (action.payload.status === "already exist") {
        window.alert(
          `You can't apply for multiple admissions for same session. Wait for next session. If you have any issue contact admin / school.`
        );
      }
      if (action.payload.status === "ok") {
        state.admissionFormState = "pending";
        state.newAdmissionSent = true;
        state.noApplicationFound = false;
        state.formData = {};
        state.images = {
          studentImage: null,
          studentSignature: null,
          showImage: null,
          showSignature: null,
        };
      }
    });
    builder.addCase(newAdmission.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isNewAdmissionError = true;
      window.alert(action.payload);
    });

    // Get Student Details for current session only ---------- >>>>>>>>
    builder.addCase(currentSessionStudentDetails.pending, (state) => {
      state.isStudentDetailsLoading = true;
    });
    builder.addCase(currentSessionStudentDetails.fulfilled, (state, action) => {
      state.isStudentDetailsLoading = false;
      if (action.payload.status === "failed") {
        state.noApplicationFound = true;
        state.userMsg = "No application Found.";
      }

      if (action.payload.status === "success") {
        state.noApplicationFound = false;
        state.studentDetails = action.payload?.getStudentDetails;
        state.rejectedFormDelition = false;
        const studentSession = action.payload?.getStudentDetails?.session;
        const getSession = localStorage.getItem("currentSession");
        if (studentSession === getSession) {
          state.userMsg =
            "You Already applied for this session. Check your application.";
        }
        const admissionStatus =
          action.payload?.getStudentDetails?.admissionStatus;
        if (!admissionStatus) {
          state.gettingAdmissionStatusError = true;
          state.userMsg =
            "Some error occured while getting your admission status. (Refresh the page or try again)";
        }
        const rejectionMsgFromAdmin =
          action.payload?.getStudentDetails?.rejectionMsg;
        if (admissionStatus === "pending") {
          state.applicationPendingState = true;
          state.applicationApprovalState = false;
          state.applicationRejectionState = false;
          state.userMsg =
            "Your Current application is in pending stage. Admin can review your application. Wait for approval or rejection";
        }
        if (admissionStatus === "rejected") {
          state.rejectedFormDisplay = true;
          state.applicationPendingState = false;
          state.applicationApprovalState = false;
          state.applicationRejectionState = true;
          state.userMsg =
            "Your appllication is rejected. Go to ---->>>> Admission Status and DELETE rejected application. Then Apply Again.";
          state.rejectionMsg = rejectionMsgFromAdmin;
        }
        if (admissionStatus === "approved") {
          state.applicationPendingState = false;
          state.applicationApprovalState = true;
          state.applicationRejectionState = false;
          state.userMsg =
            "Your appllication is approved. Go to Admission status Section or Student Details Section.";
        }
        const paymentsData = action.payload?.getStudentDetails?.paymentData;
        if (paymentsData?.length >= 1) {
          state.togglePaymentDetails = true;
        }
      }
    });
    builder.addCase(currentSessionStudentDetails.rejected, (state, action) => {
      state.isStudentDetailsLoading = false;
      state.isErrorGettingStudent = true;
    });
    // Get Student Details for all session only ---------- >>>>>>>>
    builder.addCase(allSessionsStudentDetails.pending, (state) => {
      state.isAllSessionsDetailsLoading = true;
    });
    builder.addCase(allSessionsStudentDetails.fulfilled, (state, action) => {
      state.isAllSessionsDetailsLoading = false;
      if (action.payload.status === "success") {
        if (action.payload.getStudentDetails.length < 1) {
          state.studentDetailsUserMsg = "No Data Found.";
          state.noStudentDetailsFound = true;
        }
        if (action.payload.getStudentDetails.length >= 1) {
          state.isAllSessionsDetailsLoading = false;
          state.noStudentDetailsFound = false;
          state.allSessionsDetails = action.payload.getStudentDetails;
        }
      }
      if (action.payload.status === "failed") {
        state.noStudentDetailsFound = true;
        state.studentDetailsUserMsg = "No Data Found.";
      }
    });
    builder.addCase(allSessionsStudentDetails.rejected, (state, action) => {
      state.isAllSessionsDetailsLoading = false;
      (state.isAllSessionDetailsError = true), console.warn(action.payload.msg);
    });

    // Get Admissions for Admin Panel ------- >>>>>>>>>>>>

    builder.addCase(getAdmissions.pending, (state) => {
      state.isAdminAdmissionsLoading = true;
    });
    builder.addCase(getAdmissions.fulfilled, (state, action) => {
      state.isAdminAdmissionsLoading = false;
      state.rejectedFormDelition = false;
      state.admissions = action.payload;
    });
    builder.addCase(getAdmissions.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isGetAdminAdmissionsError = true;
    });

    // Update (Approve or reject) Admissions for Admin Panel ------- >>>>>>>>>>>>
    builder.addCase(updateAdmission.pending, (state) => {
      state.admissionStatusLoading = true;
    });
    builder.addCase(updateAdmission.fulfilled, (state) => {
      state.admissionStatusLoading = false;
      state.toggle_Admin_Admission_Panel_Preview = false;
    });
    builder.addCase(updateAdmission.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isGetAdminAdmissionsError = true;
    });

    // Delete (Rejected Admission Form)  Admin Panel ------- >>>>>>>>>>>>
    builder.addCase(deleteAdmission.pending, (state) => {
      state.rejected_Form_Deletion_Loading = true;
    });
    builder.addCase(deleteAdmission.fulfilled, (state, action) => {
      state.rejected_Form_Deletion_Loading = false;
      state.toggle_Admin_Admission_Panel_Preview = false;
      if (action.payload.msg === "deleted") {
        state.rejectedFormDelition = true;
      }
    });
    builder.addCase(deleteAdmission.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isDeleteAdmissionsError = true;
    });

    //  GET FEES Details ----->>>>>>
    builder.addCase(getFeeDetails.pending, (state, action) => {
      state.isFeeDetailsLoading = true;
    });
    builder.addCase(getFeeDetails.fulfilled, (state, action) => {
      state.isFeeDetailsLoading = false;
      state.feesDetails = action.payload;
    });
    builder.addCase(getFeeDetails.rejected, (state, action) => {
      state.isFeeDetailsLoading = false;
      state.isFeeDetailsError = true;
      console.warn("Error", action.payload);
    });
  },
});

export const newAdmission = createAsyncThunk(
  "newAdmission",
  async (details) => {
    const newAdmission = await axios.post(`${baseURL}admissions`, details, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      credentials: "include",
      withCredentials: true,
    });
    return newAdmission.data;
  }
);

export const currentSessionStudentDetails = createAsyncThunk(
  " studentDetails",
  async (details) => {
    const currentSessionStudentDetails = await axios.get(
      `${baseURL}currentSessionStudentDetails/${details.studentId}/${details.session}`
    );
    return currentSessionStudentDetails.data;
  }
);
export const allSessionsStudentDetails = createAsyncThunk(
  "allSessionsStudentDetails",
  async (details) => {
    const allSessionsStudentDetails = await axios.get(
      `${baseURL}allSessionsStudentDetails/${details.studentId}`
    );
    return allSessionsStudentDetails.data;
  }
);

export const getAdmissions = createAsyncThunk("adminAdmissions", async () => {
  const getAdmissions = await axios.get(`${baseURL}admin/admissions`);
  return getAdmissions.data;
});

// update [Approve / reject admission]
export const updateAdmission = createAsyncThunk(
  "updateAdmission",
  async (details) => {
    const updateAdmission = await axios.patch(
      `${baseURL}admin/adminssions/${details.rejectionMsg}`,
      {
        id: details.id,
        admissionStatus: details.admissionStatus,
      },
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    return updateAdmission.data.msg;
  }
);
export const deleteAdmission = createAsyncThunk(
  "deleteAdmission",
  async (id) => {
    const deleteAdmission = await axios.delete(
      `${baseURL}admin/adminssions/${id}`
    );
    return deleteAdmission.data;
  }
);

// Get Fee Details

export const getFeeDetails = createAsyncThunk(
  "getFeeDetails",
  async (studentClass) => {
    const getFeeDetails = await axios.get(
      `${baseURL}feeDetails/${studentClass}`
    );
    return getFeeDetails.data;
  }
);

export const {
  toggleApplicationPreview,
  studentFormData,
  studentImageReducer,
  adminAdmissionPanelReducer,
  adminAdmissionPreviewDetailsReducer,
  toggleStudentDetailsrReducer,
  handlePaymentDetailsDisplay,
  clearAllDataReducer,
} = admissionFormSlice.actions;
export default admissionFormSlice.reducer;
