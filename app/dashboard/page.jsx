"use client";
import { useResume } from "@/context/resume";
import React from "react";

const DashboardPage = () => {
  const { userResume } = useResume();
  return (
    <div>
      <pre>{JSON.stringify(userResume, null, 4)}</pre>
    </div>
  );
};

export default DashboardPage;
