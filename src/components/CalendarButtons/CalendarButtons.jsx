import React from "react";
import "../CalendarButtons/CalendarButtons.css";

const CalendarButtons = () => {
  const calendarBtnData = [
    {
      iconClass: "fa fa-clock",
      text: "Schedule",
    },
    {
      iconClass: "fa fa-list",
      text: "Tracking",
    },
    {
      iconClass: "fa fa-calendar",
      text: "Organize",
    },
  ];

  return (
    <div className="md:flex flex-row flex-wrap justify-center">
      {calendarBtnData.map((calendar, index) => (
        <div key={index} className="flex flex-col items-center mb-3">
          <div
            className={`calendar-btn w-9/12 h-12 flex flex-row items-center justify-center space-x-2 text-paragraph bg-white hover:text-white`}
          >
            <i
              className={`${calendar.iconClass} ${calendar.textColor} text-xl`}
            />{" "}
            <p className={`text-md font-bold`}>{calendar.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarButtons;
