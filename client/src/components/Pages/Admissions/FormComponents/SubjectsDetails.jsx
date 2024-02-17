import { useParams } from "react-router-dom";
import { subjects } from "../../../constants";

const SubjectsDetails = () => {
  const params = useParams();
  const selectedClass = params.class;
  return (
    <>
      <div className="w-full items-center md:pl-3">
        <span className="text-base md:text-xl tracking-wider font-bold py-2">
          Subjects Details:
        </span>
      </div>
      <div className="w-full p-2 gap-2 md:p-5 md:gap-5 flex items-center flex-wrap">
        {!subjects[selectedClass] && (
          <span className="text-base font-semibold">Not Yet Added...</span>
        )}
        {subjects[selectedClass]?.map((subjectName, index) => (
          <input
            type="text"
            className="w-full border p-3 outline-none "
            readOnly
            name={subjectName}
            value={subjectName}
            key={index}
          />
        ))}
        <span className="text-sm md:text-base text-red-600">
          Subjects are pre defined by school, Students cant choose subjects by
          their own.
        </span>
      </div>
    </>
  );
};

export default SubjectsDetails;
