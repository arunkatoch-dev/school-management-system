import { Skeleton } from "react-skeleton-generator";
import SingleItem from "./SingleItem";

const BoardSkeleton = () => {
  return (
    <div className="md:w-[50%] h-[30rem] flex flex-col">
      <Skeleton.SkeletonThemeProvider>
        <Skeleton height="40px" />
        <SingleItem />
        <SingleItem  />
        <SingleItem />
        <SingleItem />
      </Skeleton.SkeletonThemeProvider>
    </div>
  );
};

export default BoardSkeleton;
