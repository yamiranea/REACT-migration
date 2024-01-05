import React from "react";

const DescrPageButtons = ({ buttonText, buttonUrl, colors }) => {
  return (
    <a
      href={buttonUrl}
      type="button"
      className={`font-bold rounded-full text-sm w-5/12 py-3 mt-6 text-center mb-2 flex flex-row md:text-lg md:px-10 md:mx-6 lg:text-base lg:mb-2 lg:px-10`}
      style={{
        backgroundColor: colors.bgColor,
        color: colors.textColor,
        border: `2px solid ${colors.borderColor}`,
      }}
    >
      <p className="mx-auto">{buttonText}</p>
    </a>
  );
};

export default DescrPageButtons;
