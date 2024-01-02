import React from "react";
import "../CompanyGoals/CompanyGoals.css";

const CompanyGoals = ({ iconClass, bgColor, textColor, text }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div
        className={`${bgColor} rounded-full w-36 h-36 flex flex-row items-center justify-center ${textColor}`}
      >
        <i className={`${iconClass} text-5xl`} />
      </div>
      <p className="text-lg font-bold text-main mt-4">{text}</p>
    </div>
  );
};

export default CompanyGoals;
