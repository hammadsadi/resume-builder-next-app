"use client";
import { createResume, getAllUserResumeFromDB } from "@/actions/resume/resume";
import toastAlert from "@/helper/toastAlert";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  // User Resume
  const [userResume, setUserResume] = useState([]);
  const [step, setStep] = React.useState(1);
  const router = useRouter();

  // Save Resume
  const saveResume = async () => {
    try {
      const data = await createResume(resume);
      setResume(data);
      toastAlert("Resume Save Successful 🎉", "success");
      router.push(`/dashboard/resume/edit/${data._id}`);
      setStep(2);
    } catch (error) {
      toastAlert("Failed to Save Resume ⚠️", "error");
    }
  };

  // Get Resume
  useEffect(() => {
    getUserResume();
  }, []);

  // Get Resume Info from LS and Save it to State
  useEffect(() => {
    const lsResumeInfo = localStorage.getItem("resume");
    if (lsResumeInfo) {
      setResume(JSON.parse(lsResumeInfo));
    }
  }, []);

  // Get User Resume From Database
  const getUserResume = async () => {
    try {
      const data = await getAllUserResumeFromDB();
      setUserResume(data);
    } catch (error) {
      toastAlert("Failed to Get Resume", "error");
    }
  };
  return (
    <ResumeContext.Provider
      value={{ step, setStep, resume, setResume, saveResume, userResume }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => React.useContext(ResumeContext);
