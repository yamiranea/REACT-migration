import React, { useState, useEffect } from "react";

import "../Navbar/NavBar.css";
import "../DownloadButton/DownloadButton.css";
import syncLogo from "../../assets/images/logo.svg";

const Navbar = () => {
  const buttonUrl = "https://factoriaf5.org/";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarSticky, setNavbarSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isNavbarSticky
          ? "fixed top-0 w-full z-50 bg-color shadow-md border-b border-gray-200"
          : "flex dark:bg-gray-900"
      } transition-all duration-300`}
    >
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4 md:flex md:items-start lg:pl-0">
        <a
          href="#"
          className="flex items-center space-x-72 rtl:space-x-reverse md:space-x-64"
        >
          <img src={syncLogo} class="h-8" alt="Sync Logo" />
          <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></div>
        </a>
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={String(isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-color md:space-x- rtl:space-x-reverse sm:flex-row sm:space-x-2.5 md:space-x-2.5 md:flex-row md:mt-0 md:border-0 md:bg-white lg:gap-5">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-main text-main:hover text-sm font-bold rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                DESCRIPTION
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-main text-main:hover text-sm font-bold block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-main text-main:hover text-sm font-bold block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                SCREENS
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-main text-main:hover text-sm font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto lg:hover:text-main"
              >
                EXTRA{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      ARTICLE DETAILS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      TERMS CONDITIONS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      PRIVACY POLICY
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href={buttonUrl}
                target="_blank"
                className="text-pink font-bold download-button download-button:hover md:download-button:hover lg:download-button:hover rounded-full text-sm md:text-sm px-8 py-2.5 text-center me-4 mb-2"
              >
                DOWNLOAD
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
