/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./components/Pages/Login/Login";
import StudentRegister from "./components/Pages/Register/StudentRegister";
import store from "./store/store";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Admissions from "./components/Pages/Admissions/Admissions";
import AdmissionsHomePage from "./components/Pages/Admissions/AdmissionsHomepage/AdmissionsHomePage";
import LatestInformation from "./components/Pages/Admissions/ApplicationStatus/LatestInformation/LatestInformation";
import Prospectus from "./components/Pages/Admissions/ApplicationStatus/Prospectus/Prospectus";
import ChooseClass from "./components/Pages/Admissions/ChooseClass";
import ApplicationStatus from "./components/Pages/Admissions/ApplicationStatus/ApplicationStatus";
import AdmissionForm from "./components/Pages/Admissions/AdmissionForm";
import AcademicCalander from "./components/Pages/Admissions/ApplicationStatus/AcademicCalander/AcademicCalander";
import StudentDetails from "./components/Pages/Admissions/StudentDetails/StudentDetails";
import PaymentsHomepage from "./components/Pages/PayFee/PaymentsHomepage";
import AllPayments from "./components/Pages/Payment Details/AllPayments";
import AdminPanel from "./components/Admin/AdminPanel";
import AdminHomepage from "./components/Admin/AdminHomepage/AdminHomepage";
import SetNoticeBoard from "./components/Admin/SetNoticeBoard/SetNoticeBoard";
import SetEventsBoard from "./components/Admin/setEventsBoard/SetEventsBoard";
import SetAchievementsBoard from "./components/Admin/SetAchievementsBoard/SetAchievementsBoard";
import AdminAdmissions from "./components/Admin/Admissions/AdminAdmissions";
import StripeCheckout from "./components/Pages/Stripe/StripeCheckout";
import PaymentSuccess from "./components/Pages/PayFee/PaymentSuccess";
import PaymentCancel from "./components/Pages/PayFee/PaymentCancel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admissions" element={<Admissions />}>
        <Route path="" element={<AdmissionsHomePage />} />
        <Route path="latestInformation" element={<LatestInformation />} />
        <Route path="prospectus" element={<Prospectus />} />
        <Route path="newAdmission" element={<ChooseClass />} />
        <Route path="admissionStatus" element={<ApplicationStatus />} />
        <Route path=":class" element={<AdmissionForm />} />
        <Route path="academicCalander" element={<AcademicCalander />} />
        <Route path="studentDetails" element={<StudentDetails />} />
        <Route path="paymentsHomepage" element={<PaymentsHomepage />} />
        <Route path="allpayments" element={<AllPayments />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/studentregister" element={<StudentRegister />} />
      <Route path="/admin" element={<AdminPanel />}>
        <Route path="" element={<AdminHomepage />} />
        <Route path="noticeboard" element={<SetNoticeBoard />} />
        <Route path="eventsboard" element={<SetEventsBoard />} />
        <Route path="achievementsboard" element={<SetAchievementsBoard />} />
        <Route path="admissions" element={<AdminAdmissions />} />
      </Route>
      <Route path="/stripe-checkout" element={<StripeCheckout />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      <Route path="/paymentCancel" element={<PaymentCancel />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
