import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`py-6 mt-auto ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Moon Bar</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fab fa-facebook-f ${
                isDarkMode ? "text-white" : "text-black"
              } hover:text-gray-400`}
            ></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fab fa-instagram ${
                isDarkMode ? "text-white" : "text-black"
              } hover:text-gray-400`}
            ></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fab fa-twitter ${
                isDarkMode ? "text-white" : "text-black"
              } hover:text-gray-400`}
            ></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fab fa-linkedin-in ${
                isDarkMode ? "text-white" : "text-black"
              } hover:text-gray-400`}
            ></i>
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Moon Bar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
