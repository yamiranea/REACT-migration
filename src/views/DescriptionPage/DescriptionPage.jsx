import React from "react";
import "../DescriptionPage/DescriptionPage.css";
import "../../components/DownloadButton/DownloadButton.css";
import "../../components/DescrPageButtons/DescrPageButtons.css";
import "../../index.css";
import descriptionImage from "../../assets/images/description-1-app.png";
import calendarImage from "../../assets/images/description-2-app.png";
import OrdListDescPage from "../../components/OrderedListDescPage/OrdListDescPage";
import CalendarButtons from "../../components/CalendarButtons/CalendarButtons";
import OrderedListCalendar from "../../components/OrderedListCalendar/OrderedListCalendar";
import DescrPageButtons from "../../components/DescrPageButtons/DescrPageButtons";

const DescriptionPage = () => {
  return (
    <>
      <div className="w-auto mt-32 mb-16 lg:flex flex-row">
        <div>
          <img
            src={descriptionImage}
            className="md:w-11/12 md:ml-8 lg:w-11/12 hover:scale-105 transition duration-500 cursor-pointer"
          />
        </div>
        <div className="flex flex-col w-4/5 mx-auto lg:w-11/12">
          <div>
            <h2 className="text-3xl font-bold text-left mt-10 mb-5 md:text-4xl md:w-11/12">
              Organize Your Time And Start Getting Results
            </h2>
          </div>
          <div>
            <p className="text-paragraph leading-loose mb-6 md:text-xl md:w-11/12">
              Sync is the first mobile app on the market to harness the power of
              social connections to help you stop procrastinating and start
              getting things done. Give it a try and see the changes right away
            </p>
            <OrdListDescPage />
            <DescrPageButtons
              buttonText="LIGHTBOX"
              buttonUrl="https://www.somosf5.org/"
              colors={{
                bgColor: "#ff556e",
                textColor: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>
      <div className="calendar-bg">
        <CalendarButtons />
        <div>
          <p className="text-paragraph w-5/6 mx-auto text-left leading-loose md:text-xl md:my-6 md:ml-10">
            <strong>Schedule tasks</strong> to keep track of their completion.
            Sync provides multiple scheduling options including alarms and
            reminders.
          </p>
          <OrderedListCalendar />
          <div className="flex flex-row justify-center mb-16 space-x-2 md:w-11/12 md:justify-start md:ml-8">
            <DescrPageButtons
              buttonText="TERMS"
              buttonUrl="https://www.somosf5.org/"
              colors={{
                bgColor: "#ff556e",
                textColor: "#ffffff",
              }}
            />
            <DescrPageButtons
              buttonText="PRIVACY"
              buttonUrl="https://www.somosf5.org/"
              colors={{
                bgColor: "#ffffff",
                textColor: "#333333",
                borderColor: "#333333",
              }}
            />
          </div>
        </div>
        <div>
          <img
            src={calendarImage}
            className="w-11/12 mx-auto md:w-11/12 md:ml-8 lg:w-11/12 hover:scale-105 transition duration-500 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default DescriptionPage;
