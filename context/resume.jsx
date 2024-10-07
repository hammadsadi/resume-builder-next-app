"use client";
import React from "react";
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
  return (
    <ResumeContext.Provider value={{ step, setStep, resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => React.useContext(ResumeContext);
