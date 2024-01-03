import React from "react";

const OrdListDescPage = () => {
  const ordListDescPageData = [
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
      {ordListDescPageData.map((list, index) => (
        <ol
          key={index}
          className="square-list text-paragraph w-4/5 mx-auto pl-4 mt-3 md:text-xl md:w-11/12"
        >
          <li>{list.text}</li>
        </ol>
      ))}
    </div>
  );
};

export default OrdListDescPage;
