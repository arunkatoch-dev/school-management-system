import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPayment } from "../../../slices/paymentsSlice";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

const StripeCheckout = () => {
  const feesDetails = useSelector(
    (state) => state.admissionFormSlice.feesDetails
  );
  const studentDetails = useSelector(
    (state) => state.admissionFormSlice.studentDetails
  );
  const clientSecret = useSelector((state) => state.paymentsSlice.clientSecret);
  const { studentClass, session, studentId } = studentDetails;
  const { totalFees } = feesDetails;
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newPayment({ totalFees, studentId, session, studentClass }));
  }, [dispatch, totalFees, studentId, session, studentClass]);

  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default StripeCheckout;
