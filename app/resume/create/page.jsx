"use client";
import { useResume } from "@/context/resume";
import React from "react";

const CreateResumePage = () => {
  const { resume } = useResume();
  console.log(resume);
  return <div></div>;
};

export default CreateResumePage;
