import React from "react";
import "../DescriptionPage/DescriptionPage.css";
import "../../index.css";
import descriptionImage from "../../assets/images/description-1-app.png";
import OrdListDescPage from "./OrderedListDescPage/OrdListDescPage";

const DescriptionPage = () => {
  return (
    <>
      <div>
        <img
          src={descriptionImage}
          className="w-auto mt-32 md:w-11/12 lg:w-6/12"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-left w-4/5 mt-10 mx-auto mb-5">
          Organize Your Time And Start Getting Results
        </h2>
      </div>
      <div>
        <p className="text-paragraph w-4/5 mx-auto leading-loose mb-6">
          Sync is the first mobile app on the market to harness the power of
          social connections to help you stop procrastinating and start getting
          things done. Give it a try and see the changes right away
        </p>
      </div>
      <OrdListDescPage />
    </>
  );
};

export default DescriptionPage;
