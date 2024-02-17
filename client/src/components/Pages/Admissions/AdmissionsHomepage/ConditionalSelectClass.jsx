import { useSelector } from "react-redux";

const ConditionalSelectClass = () => {
  const userMsg = useSelector((state) => state.admissionFormSlice.userMsg);
  return (
    <div className="w-[90%] flex flex-col m-auto mt-24 shadow-xl">
      <div className="w-full flex flex-col items-center justify-center p-5 border rounded-lg">
        <span className="text-sm sm:text-lg text-red-500 font-bold">{userMsg}</span>
      </div>
    </div>
  );
};

export default ConditionalSelectClass;
