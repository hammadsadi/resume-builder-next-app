"use client";
import SkeletonCard from "@/components/card/skeleton-card";
import { useResume } from "@/context/resume";
import React from "react";

const DashboardPage = () => {
  const { userResume } = useResume();
  if (!userResume?.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }
  return (
    <div>
      <pre>{JSON.stringify(userResume, null, 4)}</pre>
    </div>
  );
};

export default DashboardPage;
