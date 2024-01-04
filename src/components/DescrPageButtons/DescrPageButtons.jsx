import React from "react";

const DescrPageButtons = ({ buttonText, buttonUrl, colors }) => {
  return (
    <a
      href={buttonUrl}
      type="button"
      className={`font-bold rounded-full text-sm w-5/12 px-10 py-3 ml-8 mt-6 text-center mb-2 mx-2 flex flex-row items-center md:text-lg md:px-10 md:mx-6 lg:text-base lg:mb-2 lg:px-10`}
      style={{
        backgroundColor: colors.bgColor,
        color: colors.textColor,
        border: `2px solid ${colors.borderColor}`,
      }}
    >
      {buttonText}
    </a>
  );
};

export default DescrPageButtons;
