import { Skeleton } from "react-skeleton-generator";

const SingleItem = () => {
  return (
    <div className={`w-full flex p-5 items-center justify-center -z-50`}>
      <div className="w-[2%]">
        <Skeleton height="50px" borderRadius="100px" />
      </div>
      <div className="w-[80%] px-4">
        <Skeleton
          count={2}
          widthMultiple={["50%", "90%"]}
          heightMultiple={["20px", "30px"]}
        />
      </div>
      <div className="w-[18%]">
        <Skeleton height="30px" />
      </div>
    </div>
  );
};

export default SingleItem;
