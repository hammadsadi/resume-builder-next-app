"use client";
import ResumeCard from "@/components/card/resumeCard";
import SkeletonCard from "@/components/card/skeleton-card";
import MyContainer from "@/components/Shared/MyContainer/MyContainer";
import { useResume } from "@/context/resume";
import React from "react";

const DashboardPage = () => {
  const { userResume } = useResume();
  if (!userResume?.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }
  return (
    <div>
      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {userResume?.map((item) => (
            <ResumeCard key={item._id} resume={item} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default DashboardPage;
