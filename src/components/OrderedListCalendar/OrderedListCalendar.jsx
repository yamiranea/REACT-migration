import React from "react";
import "../OrderedListCalendar/OrderedListCalendar.css";

const OrderedListCalendar = () => {
  const orderedListCalendarData = [
    {
      text: "Analyse and evaluate your current status and productivity",
    },
    {
      text: "Begin monitoring your day to day routine with Sync app",
    },
    {
      text: "See the improved results in no more than a couple of weeks",
    },
  ];

  return (
    <div>
      {orderedListCalendarData.map((list, index) => (
        <div
          key={index}
          className="text-paragraph w-11/12 mx-auto pl-4 mt-3 md:text-xl md:w-11/12"
        >
          <div>
            <i className="fa fa-check-square check-color mr-2"></i>
            {list.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderedListCalendar;
