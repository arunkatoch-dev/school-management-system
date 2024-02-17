import { Skeleton } from "react-skeleton-generator";


const AchievementsBoardSkeleton = () => {
  return (
    <div className="w-[40%] flex flex-col h-full">
      <Skeleton.SkeletonThemeProvider>
        <div
          className={`w-full flex flex-col p-5 items-center justify-center -z-50`}
        >
          <div className="w-[80%] py-4 flex flex-col items-center justify-center">
            <Skeleton
              count={2}
              widthMultiple={["50%", "60%"]}
              heightMultiple={["20px", "200px"]}
            />
          </div>
          <div className="w-[80%] flex flex-col items-center justify-center">
            <Skeleton
              count={2}
              widthMultiple={["50%", "50%"]}
              heightMultiple={["35px", "20px"]}
            />
          </div>
        </div>
      </Skeleton.SkeletonThemeProvider>
    </div>
  );
};

export default AchievementsBoardSkeleton;
