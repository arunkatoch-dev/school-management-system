/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// const Layout = lazy(() => import("./Layout/Layout"));
import Layout from "./Layout/Layout";
import Login from "./components/Pages/Login/Login";
const About = lazy(() => import("./components/Pages/About/About"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));
const Admissions = lazy(() =>
  import("./components/Pages/Admissions/Admissions")
);
// const Login = lazy(() => import("./components/Pages/Login/Login"));
const AdminPanel = lazy(() => import("./components/Admin/AdminPanel"));
const AdminAdmissions = lazy(() =>
  import("./components/Admin/Admissions/Admissions")
);
import store from "./store/store";
import FullPageLoader from "./components/Loaders/FullPageLoader";
import StudentRegister from "./components/Pages/Register/StudentRegister";
// const AdminLogin = lazy(() =>
//   import("./components/Admin/AdminAuth/AdminLogin")
// );
const SetNoticeBoard = lazy(() =>
  import("./components/Admin/SetNoticeBoard/SetNoticeBoard")
);
const SetEventsBoard = lazy(() =>
  import("./components/Admin/setEventsBoard/SetEventsBoard")
);
const SetAchievementsBoard = lazy(() =>
  import("./components/Admin/SetAchievementsBoard/SetAchievementsBoard")
);
const LatestInformation = lazy(() =>
  import(
    "./components/Pages/Admissions/ApplicationStatus/LatestInformation/LatestInformation"
  )
);
const Prospectus = lazy(() =>
  import(
    "./components/Pages/Admissions/ApplicationStatus/Prospectus/Prospectus"
  )
);
const AdmissionsHomePage = lazy(() =>
  import("./components/Pages/Admissions/AdmissionsHomepage/AdmissionsHomePage")
);
const AdmissionForm = lazy(() =>
  import("./components/Pages/Admissions/AdmissionForm")
);
const ChooseClass = lazy(() =>
  import("./components/Pages/Admissions/ChooseClass")
);
const AcademicCalander = lazy(() =>
  import(
    "./components/Pages/Admissions/ApplicationStatus/AcademicCalander/AcademicCalander"
  )
);
const AdminHomepage = lazy(() =>
  import("./components/Admin/AdminHomepage/AdminHomepage")
);
const ApplicationStatus = lazy(() =>
  import("./components/Pages/Admissions/ApplicationStatus/ApplicationStatus")
);
const StudentDetails = lazy(() =>
  import("./components/Pages/Admissions/StudentDetails/StudentDetails")
);
const PaymentsHomepage = lazy(() =>
  import("./components/Pages/PayFee/PaymentsHomepage")
);
const PaymentSuccess = lazy(() =>
  import("./components/Pages/PayFee/PaymentSuccess")
);
const PaymentCancel = lazy(() =>
  import("./components/Pages/PayFee/PaymentCancel")
);
const StripeCheckout = lazy(() =>
  import("./components/Pages/Stripe/StripeCheckout")
);
const AllPayments = lazy(() =>
  import("./components/Pages/Payment Details/AllPayments")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/admissions"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <Admissions />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<FullPageLoader />}>
              <AdmissionsHomePage />
            </Suspense>
          }
        />
        <Route
          path="latestInformation"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <LatestInformation />
            </Suspense>
          }
        />
        <Route
          path="prospectus"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <Prospectus />
            </Suspense>
          }
        />
        <Route
          path="newAdmission"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <ChooseClass />
            </Suspense>
          }
        />
        <Route
          path="admissionStatus"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <ApplicationStatus />
            </Suspense>
          }
        />
        <Route
          path=":class"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <AdmissionForm />
            </Suspense>
          }
        />
        <Route
          path="academicCalander"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <AcademicCalander />
            </Suspense>
          }
        />
        <Route
          path="studentDetails"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <StudentDetails />
            </Suspense>
          }
        />
        <Route
          path="paymentsHomepage"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <PaymentsHomepage />
            </Suspense>
          }
        />
        <Route
          path="allpayments"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <AllPayments />
            </Suspense>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/studentregister" element={<StudentRegister />} />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <AdminPanel />
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<FullPageLoader />}>
              <AdminHomepage />
            </Suspense>
          }
        />
        <Route
          path="noticeboard"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <SetNoticeBoard />
            </Suspense>
          }
        />
        <Route
          path="eventsboard"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <SetEventsBoard />
            </Suspense>
          }
        />
        <Route
          path="achievementsboard"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <SetAchievementsBoard />
            </Suspense>
          }
        />
        <Route
          path="admissions"
          element={
            <Suspense fallback={<FullPageLoader />}>
              <AdminAdmissions />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/stripe-checkout"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <StripeCheckout />
          </Suspense>
        }
      />
      <Route
        path="/paymentSuccess"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <PaymentSuccess />
          </Suspense>
        }
      />
      <Route
        path="/paymentCancel"
        element={
          <Suspense fallback={<FullPageLoader />}>
            <PaymentCancel />
          </Suspense>
        }
      />
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
