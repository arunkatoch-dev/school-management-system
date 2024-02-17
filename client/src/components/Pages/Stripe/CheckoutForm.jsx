import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { frontEndURL, schoolName } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const studentDetails = useSelector(
    (state) => state.admissionFormSlice.studentDetails
  );
  const { session, studentId } = studentDetails;
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");

          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, dispatch, session, studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${frontEndURL}paymentSuccess`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form
      className="w-full items-center gap-4 justify-center flex flex-col p-5 md:p-10"
      onSubmit={handleSubmit}
    >
      <span className="text-base md:text-lg tracking-wide text-blue-900 font-bold">
        {schoolName}
      </span>
      <span className="text-base tracking-wide text-gray-700 font-bold">
        Fee Payment
      </span>
      <span className="text-base tracking-wide text-gray-700 font-bold">
        Use this card number for testing purpose:
      </span>
      <span className="font-bold text-xs md:text-base">4000003560000008</span>
      <div className="flex flex-col items-center justify-center gap-2 md:gap-5 shadow-2xl rounded-lg px-4 py-4">
        <PaymentElement options={paymentElementOptions} />

        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="p-2 md:px-5 md:py-2 rounded-lg bg-green-700 hover:bg-green-600 text-base text-white"
        >
          <span id="button-text">{isLoading ? "Paying" : "Pay now"}</span>
        </button>
      </div>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
export default CheckoutForm;
