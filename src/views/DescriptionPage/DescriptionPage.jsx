import React from "react";
import "../DescriptionPage/DescriptionPage.css";
import descriptionImage from "../../assets/images/description-1-app.png";

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
        <h2 className="text-4xl text-main w-5/6 font-bold mx-auto mt-8">
          Organize Your Time And Start Getting Results
        </h2>
      </div>
    </>
  );
};

export default DescriptionPage;
