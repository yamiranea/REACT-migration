import React from "react";
import HomePage from "./views/HomePage/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import DescriptionPage from "./views/DescriptionPage/DescriptionPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <DescriptionPage />
    </>
  );
}

export default App;
