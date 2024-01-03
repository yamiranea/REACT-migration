import React from "react";

const CalendarButtons = () => {
  const calendarBtnData = [
    {
      iconClass: "fa fa-clock",
      bgColor: "identify-goals-bg",
      textColor: "identify-goals-icon",
      text: "Identify Goals",
    },
    {
      iconClass: "fa fa-users",
      bgColor: "identify-goals-bg",
      textColor: "identify-goals-icon",
      text: "Identify Goals",
    },
    {
      iconClass: "fa fa-users",
      bgColor: "identify-goals-bg",
      textColor: "identify-goals-icon",
      text: "Identify Goals",
    },
  ];

  return (
    <div className="md:flex flex-row flex-wrap justify-center gap-14">
      {calendarBtnData.map((calendar, index) => (
        <div
          key={index}
          className="flex flex-col items-center mb-10 hover:animate-ping"
        >
          <div
            className={`rounded-full w-36 h-36 flex flex-row items-center justify-center ${calendar.bgColor}`}
          >
            <i
              className={`${calendar.iconClass} ${calendar.textColor} text-5xl`}
            />
          </div>
          <div
            className={`text-lg font-bold text-main mt-2 ${calendar.textColor}`}
          >
            {calendar.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarButtons;
