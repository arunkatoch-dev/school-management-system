import { useSelector } from "react-redux";
import UseFeeReceiptGenerator from "../../CustomHooks/UseFeeReceiptGenerator";

const AllPayments = () => {
  const studentDetails = useSelector(
    (state) => state.admissionFormSlice.studentDetails
  );
  return (
    <div className="w-full flex flex-wrap gap-2 md:gap-5 justify-center items-center p-1 md:p-5">
      {studentDetails?.paymentData?.map((currData) => {
        const { paymentId, paymentDate, paymentMonth, paymentYear, feeStatus } =
          currData;
        return (
          <div
            className="flex flex-col gap-2 p-1 border md:p-4 rounded-lg shadow-lg"
            key={paymentId}
          >
            <span className="text-sm md:text-lg font-bold">Payment Id:</span>
            <span className="text-xs md:text-base"> {paymentId}</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xs md:text-base ">
                Status:
              </span>
              <span
                className={
                  feeStatus === "received"
                    ? "text-green-700 font-bold text-xs md:text-base"
                    : "text-red-600 text-xs md:text-base"
                }
              >
                {feeStatus}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 text-xs md:text-base">
                Date:
              </span>
              <span className="text-gray-600 text-xs md:text-base">
                {paymentDate}-{paymentMonth}-{paymentYear}
              </span>
            </div>
            <button
              className="w-full py-2 text-xs md:text-base bg-green-800 text-white font-semibold tracking-wide hover:bg-green-700 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                UseFeeReceiptGenerator(studentDetails, currData);
              }}
            >
              Download Receipt
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllPayments;
