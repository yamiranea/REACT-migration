import React from "react";
import DownloadButton from "../components/DownloadButton/DownloadButton";

import "../index.css";
import "../views/HomePage/HomePage.css";
import "../components/DownloadButton/DownloadButton.css";
import "../components/Navbar/Navbar.css";

import phoneImage from "../assets/images/header-iphone.png";
import greenDecorativeImage from "../assets/images/decorative-green-diamond.svg";
import yellowDecorativeImage from "../assets/images/decorative-yellow-circle.svg";
import whiteDecorativeImage from "../assets/images/decorative-white-circle.svg";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between mt-4">
        <img src={greenDecorativeImage} className="w-3.5 mx-20" />
        <img src={yellowDecorativeImage} className="w-5 mx-20" />
      </div>
      <h1 className="text-5xl font-bold font-open-sans text-center mt-4">
        Mobile App Landing Page
      </h1>
      <p className="secondary-text text-center mx-8 mt-6">
        Start focusing on your goals and get more things done with Sync mobile
        application. It's the first app to harness the power of social
        connections to help you stay focused and get organized
      </p>
      <div className="flex justify-center mt-6 md:gap-10">
        <DownloadButton iconClass="fab fa-apple" />
        <DownloadButton iconClass="fab fa-google-play" />
      </div>
      <div className="w-80 white-circle-right hidden md:block">
        <img src={whiteDecorativeImage} className="w-full" />
      </div>
      <div className="w-80 white-circle-left hidden md:block">
        <img src={whiteDecorativeImage} className="w-full" />
      </div>
      <div>
        <img
          src={phoneImage}
          className="w-auto mx-2 mt-10 phone-img hover:scale-105 transition duration-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HomePage;
