import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 mt-5">
      <Skeleton className="h-[175px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
