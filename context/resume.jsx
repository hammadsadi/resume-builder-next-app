"use client";
import { createResume } from "@/actions/resume/resume";
import React, { useEffect } from "react";
const ResumeContext = React.createContext();
const initialValue = {
  name: "",
  job: "",
  address: "",
  phone: "",
  email: "",
  themeColor: "",
};
export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = React.useState(initialValue);
  const [step, setStep] = React.useState(1);

  // Save Resume
  const saveResume = async () => {
    try {
      const data = await createResume(resume);
      alert("Resume Save Successful");
      setResume(data);
      // setStep(2);
    } catch (error) {
      alert("Failed to Save Data");
    }
  };

  // Get Resume Info from LS and Save it to State
  useEffect(() => {
    const lsResumeInfo = localStorage.getItem("resume");
    if (lsResumeInfo) {
      setResume(JSON.parse(lsResumeInfo));
    }
  }, []);
  return (
    <ResumeContext.Provider
      value={{ step, setStep, resume, setResume, saveResume }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => React.useContext(ResumeContext);
