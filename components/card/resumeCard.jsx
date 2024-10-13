import React from "react";
import PersonalDetails from "../preview/PersonalDetails";

const ResumeCard = ({ resume }) => {
  return (
    <div
      className="shadow-lg h-[175px] w-full rounded-xl p-5 border-t-[20px]"
      style={{ borderColor: resume?.themeColor }}
    >
      <PersonalDetails resume={resume} />
    </div>
  );
};

export default ResumeCard;
