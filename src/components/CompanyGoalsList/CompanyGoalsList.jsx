import React from "react";
import "../CompanyGoalsList/CompanyGoalsList.css";

const CompanyGoalsList = () => {
  const companyGoalsData = [
    {
      iconClass: "fa fa-users",
      bgColor: "identify-goals-bg",
      textColor: "identify-goals-icon",
      text: "Identify Goals",
    },
    {
      iconClass: "fa fa-code",
      bgColor: "situation-analysis-bg",
      textColor: "situation-analysis-icon",
      text: "Situation Analysis",
    },
  ];

  return (
    <div>
      {companyGoalsData.map((goal, index) => (
        <div key={index} className="flex flex-col items-center mb-10">
          <div
            className={`rounded-full w-36 h-36 flex flex-row items-center justify-center ${goal.bgColor}`}
          >
            <i className={`${goal.iconClass} ${goal.textColor} text-5xl`} />
          </div>
          <div className={`text-lg font-bold text-main mt-4 ${goal.textColor}`}>
            {goal.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyGoalsList;
