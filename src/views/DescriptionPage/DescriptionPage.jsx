import React from "react";
import "../DescriptionPage/DescriptionPage.css";
import descriptionImage from "../../assets/images/description-1-app.png";

const DescriptionPage = () => {
  return (
    <div>
      <img
        src={descriptionImage}
        className="w-auto mt-32 md:w-11/12 lg:w-6/12"
      />
    </div>
  );
};

export default DescriptionPage;
