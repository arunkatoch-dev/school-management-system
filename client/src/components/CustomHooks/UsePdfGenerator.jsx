import jsPDF from "jspdf";
import { baseURL, schoolName } from "../constants";

const UsePdfGenerator = (studentData) => {
  const {
    session,
    studentId,
    studentClass,
    studentName,
    studentGender,
    studentDOB,
    studentReligion,
    studentCatagory,
    studentImagePath,
    studentSignaturePath,
    fatherName,
    fatherOccupation,
    fatherAnnualIncome,
    fatherPhone,
    fatherEmail,
    motherName,
    motherOccupation,
    motherAnnualIncome,
    motherPhone,
    motherEmail,
    subjectsDetails,
  } = studentData;
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
  doc.text("Personal Details:", 5, 45);
  doc.setFontSize(15);
  doc.setTextColor(22, 163, 74);
  doc.text("APPROVED", 163, 35);
  doc.addImage(`${baseURL}${studentImagePath}`, "JPEG", 160, 45, 40, 50);
  doc.addImage(`${baseURL}${studentSignaturePath}`, "JPEG", 160, 96, 40, 20);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("StudentId:", 5, 60);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentId}`, 80, 60);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Class:", 5, 70);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentClass}`, 80, 70);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Name:", 5, 80);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentName}`, 80, 80);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Gender:", 5, 90);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentGender}`, 80, 90);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("DOB:", 5, 100);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentDOB}`, 80, 100);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Religion:", 5, 110);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentReligion}`, 80, 110);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Catagory:", 5, 120);
  doc.setTextColor(30, 39, 58);
  doc.text(`${studentCatagory}`, 80, 120);
  doc.setFontSize(16);
  doc.text("Family Details:", 5, 136);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Father's Name:", 5, 150);
  doc.setTextColor(30, 39, 58);
  doc.text(`${fatherName}`, 80, 150);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Father's Occupation:", 5, 160);
  doc.setTextColor(30, 39, 58);
  doc.text(`${fatherOccupation}`, 80, 160);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Father's Annual Income:", 5, 170);
  doc.setTextColor(30, 39, 58);
  doc.text(`${fatherAnnualIncome}`, 80, 170);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Phone:", 5, 180);
  doc.setTextColor(30, 39, 58);
  doc.text(`${fatherPhone}`, 80, 180);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Email:", 5, 190);
  doc.setTextColor(30, 39, 58);
  doc.text(`${fatherEmail}`, 80, 190);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Mother's Name:", 5, 200);
  doc.setTextColor(30, 39, 58);
  doc.text(`${motherName}`, 80, 200);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Mother's Occupation:", 5, 210);
  doc.setTextColor(30, 39, 58);
  doc.text(`${motherOccupation}`, 80, 210);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Mother's Annual Income:", 5, 220);
  doc.setTextColor(30, 39, 58);
  doc.text(`${motherAnnualIncome}`, 80, 220);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Phone:", 5, 230);
  doc.setTextColor(30, 39, 58);
  doc.text(`${motherPhone}`, 80, 230);
  doc.setFontSize(14);
  doc.setTextColor("Black");
  doc.text("Email:", 5, 240);
  doc.setTextColor(30, 39, 58);
  doc.text(`${motherEmail}`, 80, 240);
  doc.setFontSize(16);
  doc.text("Subjects Details:", 5, 256);
  doc.setTextColor("Black");
  doc.setFontSize(14);
  doc.text(`${subjectsDetails}`, 5, 270);
  doc.save(`${studentName}_${studentClass}.pdf`);
};

export default UsePdfGenerator;
