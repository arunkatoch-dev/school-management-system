import { useDispatch, useSelector } from "react-redux";
import { schoolName } from "../../constants";
import { Link } from "react-router-dom";
import { getFeeDetails } from "../../../slices/admissionFormSlice";
import { useEffect } from "react";
const containerCss =
  "text-sm md:text-base flex gap-2 text-gray-900 font-semibold";
const headingCss = "text-xs md:text-base text-gray-900 font-bold";
const valueCss = "text-xs md:text-base text-gray-600";
const feeDetailsContainer = "w-full flex items-center justify-between";
const srNo_Description_Container =
  "flex gap-4 md:gap-14 items-center justify-center";
const srNoCss = "tracking-wide md:pl-2 bold";
const descriptionCss = "tracking-wide capitalize";
const amountCss = "tracking-wide pr-1 md:pr-4";

const PaymentDetails = () => {
  const { feesDetails, studentDetails } = useSelector(
    (state) => state.admissionFormSlice
  );

  const {
    tutionFee,
    computerLabFund,
    scienceLabFund,
    sportsFund,
    buildingFund,
    smartClassFund,
    electricityCharges,
    stationaryCharges,
    uniformCharges,
    transportationCharges,
    propertyDamageCharge,
    prospectusFee,
    admissionFee,
    examinationFee,
    webSiteMaintenanceCharges,
    extraClassCharges,
    totalFees,
  } = feesDetails;
  const { studentClass, session, studentName, studentId, paymentData } =
    studentDetails;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let monthName = month[d.getMonth()];
  const filterPayment = paymentData?.filter((currElm) => {
    return currElm.paymentMonth === monthName;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeDetails(studentClass));
  }, [dispatch, studentClass]);
  return (
    <>
      {filterPayment.length >= 1 ? (
        <div className="w-full flex items-center justify-center py-5 px-5">
          <span className="text-sm md:text-base tracking-wide text-red-600 font-bold">
            You Already paid for this month. Visit next month to pay.
          </span>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <span className="text-base md:text-2xl font-bold tracking-wider text-blue-900">
              {schoolName}
            </span>
            <span className="text-sm md:text-base font-bold capitalize text-gray-700 tracking-wider">
              An Educated Mind can teach many
            </span>
            <span className="text-sm md:text-base font-semibold text-gray-800">
              Payment Details
            </span>
          </div>
          {/* Student Details  */}
          <div className="flex p-1 md:p-4 flex-wrap items-center justify-between">
            <div className={containerCss}>
              <span className={headingCss}>Name:</span>
              <span className={valueCss}>{studentName}</span>
            </div>
            <div className={containerCss}>
              <span className={headingCss}>Class:</span>
              <span className={valueCss}>{studentClass}</span>
            </div>
            <div className={containerCss}>
              <span className={headingCss}>Session:</span>
              <span className={valueCss}>{session}</span>
            </div>
            <div className={containerCss}>
              <span className={headingCss}>userId:</span>
              <span className={valueCss}>{studentId}</span>
            </div>
          </div>

          {/* Payment Details: */}
          <div className="w-full flex flex-col  px-5 py-5">
            <div className="w-full flex items-center justify-between border border-black px-2">
              <div className="flex gap-5">
                <span className="font-bold text-lg tracking-wide border-r border-r-black pr-2">
                  SrNo.
                </span>
                <span className="font-bold text-lg tracking-wide">
                  Description
                </span>
              </div>
              <span className="font-bold text-lg tracking-wide">Amount</span>
            </div>
            <div className="flex flex-col gap-2 border border-black border-t-0 py-4">
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>1.</span>
                  <span className={descriptionCss}>tution Fee</span>
                </div>
                <span className={amountCss}>{tutionFee}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>2.</span>
                  <span className={descriptionCss}>computer Lab Fund</span>
                </div>
                <span className={amountCss}>{computerLabFund}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>3.</span>
                  <span className={descriptionCss}>science Lab Fund</span>
                </div>
                <span className={amountCss}>{scienceLabFund}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>4.</span>
                  <span className={descriptionCss}>sports Fund</span>
                </div>
                <span className={amountCss}>{sportsFund}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>5.</span>
                  <span className={descriptionCss}>building Fund</span>
                </div>
                <span className={amountCss}>{buildingFund}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>6.</span>
                  <span className={descriptionCss}>smart Class Fund</span>
                </div>
                <span className={amountCss}>{smartClassFund}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>7.</span>
                  <span className={descriptionCss}>electricity Charges</span>
                </div>
                <span className={amountCss}>{electricityCharges}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>8.</span>
                  <span className={descriptionCss}>stationary Charges</span>
                </div>
                <span className={amountCss}>{stationaryCharges}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>8.</span>
                  <span className={descriptionCss}>uniform Charges</span>
                </div>
                <span className={amountCss}>{uniformCharges}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>9.</span>
                  <span className={descriptionCss}>transportation Charges</span>
                </div>
                <span className={amountCss}>{transportationCharges}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>10.</span>
                  <span className={descriptionCss}>
                    property Damage Charges
                  </span>
                </div>
                <span className={amountCss}>{propertyDamageCharge}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>11.</span>
                  <span className={descriptionCss}>prospectus Fee</span>
                </div>
                <span className={amountCss}>{prospectusFee}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>12.</span>
                  <span className={descriptionCss}>admission Fee</span>
                </div>
                <span className={amountCss}>{admissionFee}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>13.</span>
                  <span className={descriptionCss}>examination Fee</span>
                </div>
                <span className={amountCss}>{examinationFee}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>14.</span>
                  <span className={descriptionCss}>
                    webSite Maintenance Charges
                  </span>
                </div>
                <span className={amountCss}>{webSiteMaintenanceCharges}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span className={srNoCss}>15.</span>
                  <span className={descriptionCss}> extra Class Charges</span>
                </div>
                <span className={amountCss}>{extraClassCharges}</span>
              </div>
              {/* **************** */}
              <div className={feeDetailsContainer}>
                <div className={srNo_Description_Container}>
                  <span
                    className={`${descriptionCss} text-xl font-bold pl-20 py-4`}
                  >
                    total Fees
                  </span>
                </div>
                <span className={`${amountCss} text-xl font-bold  py-4`}>
                  Rs: {totalFees}/-
                </span>
              </div>
              {/* -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */}
            </div>
            <div className="w-full py-4 md:py-10 flex justify-center items-center">
              <Link
                to="/stripe-checkout"
                className="px-10 py-3 rounded-md bg-emerald-800 text-white font-semibold tracking-wide hover:shadow-lg hover:bg-emerald-600"
              >
                Pay Now
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentDetails;
