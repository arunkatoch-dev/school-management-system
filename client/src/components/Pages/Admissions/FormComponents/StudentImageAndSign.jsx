import DragAndDropImage from "./DragAndDropImage";

const StudentImageAndSign = () => {
  return (
    <>
      <div className="w-full items-center pl-3">
        <span className="text-base md:text-xl tracking-wider font-bold py-2">
          Upload:
        </span>
      </div>
      <div className="w-full px-2 py-1 gap-2 md:px-5 md:py-2 md:gap-5 flex items-center flex-wrap">
        <DragAndDropImage nameAttribute="studentImage" />
        <DragAndDropImage nameAttribute="studentSignature" />
      </div>
    </>
  );
};

export default StudentImageAndSign;
