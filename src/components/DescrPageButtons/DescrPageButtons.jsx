import React from "react";

const DescrPageButtons = ({ buttonText, buttonUrl, colors }) => {
  return (
    <a
      href={buttonUrl}
      type="button"
      className={`font-bold rounded-full text-sm w-5/12 py-3 mt-6 text-center mb-2 flex flex-row md:text-base md:px-auto md:w-3/12 md:py-3 lg:text-base lg:mb-2 lg:px-10xl:h-14 xl:w-2/12`}
      style={{
        backgroundColor: colors.bgColor,
        color: colors.textColor,
        border: `2px solid ${colors.borderColor}`,
      }}
    >
      <p className="mx-auto text-center w-auto">{buttonText}</p>
    </a>
  );
};

export default DescrPageButtons;
