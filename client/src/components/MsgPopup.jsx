// eslint-disable-next-line react/prop-types
const MsgPopup = ({ msg }) => {
  return (
    <div className="w-[90%] flex flex-col m-auto mt-24 shadow-xl">
      <div className="w-full flex flex-col items-center justify-center p-5 border rounded-lg">
        <span className="text-sm sm:text-base md:text-lg text-red-500 font-bold">
          {msg}
        </span>
      </div>
    </div>
  );
};

export default MsgPopup;
