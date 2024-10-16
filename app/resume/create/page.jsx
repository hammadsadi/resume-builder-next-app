"use client";
import ResumeStepNav from "@/components/nav/resume-step-nav";
import StepFive from "@/components/resume/step-five";
import StepFour from "@/components/resume/step-four";
import StepOneCreate from "@/components/resume/step-one-create";
import StepThree from "@/components/resume/step-three";
import StepTwo from "@/components/resume/step-two";
import { useResume } from "@/context/resume";
import React from "react";

const CreateResumePage = () => {
  const { step, resume } = useResume();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ResumeStepNav />
      {step === 1 && <StepOneCreate />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />}
    </div>
  );
};

export default CreateResumePage;
