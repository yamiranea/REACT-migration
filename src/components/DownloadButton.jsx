import React from "react";
import "../index.css";

const DownloadButton = ({ iconClass }) => {
  return (
    <button
      type="button"
      class="text-white font-bold download-button-pink download-button-pink:hover md:download-button-pink:hover rounded-full text-sm md:text-sm px-8 py-3 text-center me-4 mb-2 flex flex-row items-center gap-2"
    >
      <i className={iconClass}></i> DOWNLOAD
    </button>
  );
};

export default DownloadButton;
