import React from "react";

const PersonalDetails = ({ resume }) => {
  return (
    <>
      <h2 className="font-bold text-xl text-center">{resume?.name}</h2>
      <h2 className=" text-sm text-center font-medium">{resume?.job}</h2>
      <h2 className=" text-sm text-center font-medium">{resume?.address}</h2>
      <div className="flex justify-between">
        <h2 className=" text-xs font-normal">{resume?.phone}</h2>
        <h2 className=" text-xs font-normal">{resume?.email}</h2>
      </div>
      <hr
        className="border-[1.5px] my2 "
        style={{ borderColor: resume?.themeColor }}
      />
    </>
  );
};

export default PersonalDetails;
