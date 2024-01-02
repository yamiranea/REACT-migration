import React from "react";
import "../DownloadButton/DownloadButton.css";

const DownloadButton = () => {
  const downloadButtonData = [
    {
      iconClass: "fab fa-apple",
    },
    {
      iconClass: "fab fa-google-play",
    },
  ];

  return (
    <>
      {downloadButtonData.map((button, index) => (
        <button
          key={index}
          type="button"
          className="text-white font-bold download-button-pink download-button-pink:hover md:download-button-pink:hover rounded-full text-sm md:text-sm px-8 py-3 text-center mb-2 flex flex-row items-center me-3"
        >
          <i className={button.iconClass}></i>
          DOWNLOAD
        </button>
      ))}
    </>
  );
};

export default DownloadButton;
