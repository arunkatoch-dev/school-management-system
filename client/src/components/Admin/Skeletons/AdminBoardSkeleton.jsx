import { Skeleton } from "react-skeleton-generator";
import SingleItem from "../../Skeletons/Boards/SingleItem";

const AdminBoardSkeleton = () => {
  return (
    <Skeleton.SkeletonThemeProvider>
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
    </Skeleton.SkeletonThemeProvider>
  );
};

export default AdminBoardSkeleton;
