import React from "react";
import "../CalendarButtons/CalendarButtons.css";

const CalendarButtons = () => {
  const calendarBtnData = [
    {
      iconClass: "fa fa-clock",
      text: "Schedule",
      bgColor: "schedule-bg",
      textColor: "text-white",
    },
    {
      iconClass: "fa fa-list",
      text: "Tracking",
      bgColor: "secondary-btns",
      textColor: "text-paragraph",
    },
    {
      iconClass: "fa fa-calendar",
      text: "Organize",
      bgColor: "secondary-btns",
      textColor: "text-paragraph",
    },
  ];

  return (
    <div className="md:flex flex-row flex-wrap justify-center">
      {calendarBtnData.map((calendar, index) => (
        <div key={index} className="flex flex-col items-center mb-3">
          <div
            className={`calendar-btn w-9/12 h-12 flex flex-row items-center justify-center space-x-2 cursor-pointer hover:text-white ${calendar.bgColor} ${calendar.textColor}`}
          >
            <i className={`${calendar.iconClass} text-xl hover:text-white`} />{" "}
            <p className={`text-md font-bold`}>{calendar.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarButtons;
