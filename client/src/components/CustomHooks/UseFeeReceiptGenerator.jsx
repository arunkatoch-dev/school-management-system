import jsPDF from "jspdf";
import { schoolName } from "../constants";

const UseFeeReceiptGenerator = (studentDetails, currData) => {
  const {
    session,
    studentId,
    studentClass,
    studentName,
    studentDOB,
    totalFees,
  } = studentDetails;
  const { paymentId, paymentDate, paymentMonth, paymentYear, feeStatus } =
    currData;

  const doc = new jsPDF();
  doc.setTextColor(30, 58, 138);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(`${schoolName}`, 80, 10);
  doc.setTextColor(55, 65, 81);
  doc.setFontSize(16);
  doc.text("An Educated Mind Can Teach Many", 60, 18);
  doc.setTextColor(31, 41, 55);
  doc.setFontSize(14);
  doc.text(`Session ${session}`, 90, 25);
  doc.setFontSize(16);
  doc.setTextColor("Black");
  doc.text("Payment Details:", 82, 40);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("StudentId:", 5, 60);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentId}`, 35, 60);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Name:", 5, 75);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentName}`, 25, 75);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("DOB:", 5, 90);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentDOB}`, 26, 90);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Class:", 5, 105);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentClass}`, 26, 105);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Payment Id:", 5, 120);
  doc.setTextColor(30, 39, 58);
  doc.text(`${paymentId}`, 35, 120);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Transaction Date:", 5, 135);
  doc.setTextColor(30, 39, 58);
  doc.text(`${paymentDate}-${paymentMonth}-${paymentYear}`, 50, 135);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Total Amount:", 5, 150);
  doc.setTextColor(30, 39, 58);
  doc.text(`Rs ${totalFees}/-`, 40, 150);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Fee Status:", 5, 165);
  doc.setTextColor(22, 163, 74);
  doc.text(`${feeStatus}`, 35, 165);
  doc.save(`${studentName}_${paymentMonth}.pdf`);
};

export default UseFeeReceiptGenerator;
