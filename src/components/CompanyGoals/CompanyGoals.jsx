import React from "react";
import "../CompanyGoals/CompanyGoals.css";

const CompanyGoals = ({ iconClass }) => {
  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <div className="identify-goals rounded-full w-36 h-36 flex flex-row items-center justify-center">
          <i className={iconClass}></i>
        </div>
      </div>
    </div>
  );
};

export default CompanyGoals;
