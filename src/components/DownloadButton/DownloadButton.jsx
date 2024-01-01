import React from "react";
import "../DownloadButton/DownloadButton.css";

const DownloadButton = ({ iconClass }) => {
  return (
    <button
      type="button"
      class="text-white font-bold download-button-pink download-button-pink:hover md:download-button-pink:hover rounded-full text-sm md:text-sm px-8 py-3 text-center mb-2 flex flex-row items-center me-3"
    >
      <i className={iconClass}></i> DOWNLOAD
    </button>
  );
};

export default DownloadButton;
