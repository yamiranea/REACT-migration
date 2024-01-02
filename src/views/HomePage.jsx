import React from "react";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import "../index.css";
import phoneImage from "../assets/images/header-iphone.png";

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
      <div>
        <img
          src={phoneImage}
          className="w-4/5 mx-20 mt-12 phone-img hover:scale-110 transition duration-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HomePage;
