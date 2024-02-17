import { Link } from "react-router-dom";
import Header from "../../Header/Header";

const PaymentCancel = () => {
  return (
    <>
      <Header />
      <div className="w-full flex py-4">
        <div className="m-auto p-4 shadow-md flex items-center justify-center flex-col mt-10 gap-5">
          <span className="text-base font-semibold text-red-600">
            Oops! Your payment is not successful this time.
          </span>
          <Link
            to="/admissions/paymentsHomepage"
            className="bg-cyan-700 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg hover:shadow-xl"
          >
            Try Again
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentCancel;
