import React from "react";
import "../DownloadButton/DownloadButton.css";

const DownloadButton = () => {
  const downloadButtonData = [
    {
      iconClass: "fab fa-apple mr-1",
    },
    {
      iconClass: "fab fa-google-play mr-1",
    },
  ];

  return (
    <>
      {downloadButtonData.map((button, index) => (
        <button
          key={index}
          type="button"
          className="text-white font-bold download-button-pink download-button-pink:hover rounded-full text-sm px-6 py-3 text-center mb-2 mx-2 flex flex-row items-center md:text-lg md:download-button-pink:hover"
        >
          <i className={button.iconClass}></i>
          DOWNLOAD
        </button>
      ))}
    </>
  );
};

export default DownloadButton;
