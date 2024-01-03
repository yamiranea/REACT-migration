import React from "react";
import "../DescriptionPage/DescriptionPage.css";
import "../../index.css";
import descriptionImage from "../../assets/images/description-1-app.png";
import OrdListDescPage from "./OrderedListDescPage/OrdListDescPage";
import CalendarButtons from "../../components/CalendarButtons/CalendarButtons";

const DescriptionPage = () => {
  const buttonUrl = "https://www.somosf5.org/";

  return (
    <>
      <div className="w-auto mt-32 mb-16 lg:flex flex-row">
        <div>
          <img
            src={descriptionImage}
            className="md:w-11/12 md:ml-8 lg:w-11/12 hover:scale-105 transition duration-500 cursor-pointer"
          />
        </div>
        <div className="lg:w-11/12">
          <div>
            <h2 className="text-3xl font-bold text-left w-4/5 mt-10 mx-auto mb-5 md:text-4xl md:w-11/12">
              Organize Your Time And Start Getting Results
            </h2>
          </div>
          <div>
            <p className="text-paragraph w-4/5 mx-auto leading-loose mb-6 md:text-xl md:md:w-11/12">
              Sync is the first mobile app on the market to harness the power of
              social connections to help you stop procrastinating and start
              getting things done. Give it a try and see the changes right away
            </p>
            <OrdListDescPage />
          </div>
          <button
            href={buttonUrl}
            type="button"
            className="text-white font-bold download-button-pink download-button-pink:hover rounded-full text-sm px-8 py-3 ml-8 mt-6 text-center mb-2 mx-2 flex flex-row items-center md:text-lg md:download-button-pink:hover md:px-10 md:mx-6 lg:text-base lg:mb-2 lg:px-10"
          >
            LIGHTBOX
          </button>
        </div>
      </div>
      <div className="calendar-bg">hola</div>
      <CalendarButtons />
    </>
  );
};

export default DescriptionPage;
