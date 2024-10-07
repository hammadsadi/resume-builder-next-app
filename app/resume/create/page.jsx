"use client";
import StepFive from "@/components/resume/step-five";
import StepFour from "@/components/resume/step-four";
import StepOne from "@/components/resume/step-one";
import StepThree from "@/components/resume/step-three";
import StepTwo from "@/components/resume/step-two";
import { useResume } from "@/context/resume";
import React from "react";

const CreateResumePage = () => {
  const { step, resume } = useResume();
  return (
    <div className="flex justify-center items-center h-screen">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />}
    </div>
  );
};

export default CreateResumePage;
