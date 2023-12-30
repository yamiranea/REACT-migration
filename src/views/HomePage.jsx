import React from "react";
import DownloadButton from "../components/DownloadButton";
import "../index.css";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold font-open-sans text-main text-center mt-8">
        Mobile App Landing Page
      </h1>
      <p className="secondary-text text-center mx-12 mt-6">
        Start focusing on your goals and get more things done with Sync mobile
        application. It's the first app to harness the power of social
        connections to help you stay focused and get organized
      </p>
      <div className="flex justify-center mt-6">
        <DownloadButton iconClass="fab fa-apple" />
        <DownloadButton iconClass="fab fa-google-play" />
      </div>
    </div>
  );
};

export default HomePage;
