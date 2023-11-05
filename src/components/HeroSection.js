import React from "react";
import image from "../assets/heroimg.png";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`relative h-[93vh] bg-cover bg-center ${
        isDarkMode ? "dark-bg" : ""
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <h1
          className={`text-5xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-400"
          }`}
        >
          Bun venit la Moon Bar!
        </h1>
        <p
          className={`text-xl mb-6 ${
            isDarkMode ? "text-white" : "text-gray-400"
          }`}
        >
          Descoperă atmosfera unică și preparatele noastre de excepție.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/meniu"
            className={`py-2 px-6 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500"
                : "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            }`}
          >
            Vizualizează meniul
          </Link>
          <Link
            to="/contact"
            className={`py-2 px-6 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDarkMode
                ? "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700"
                : "bg-white text-black hover:bg-gray-100 focus:ring-gray-300"
            }`}
          >
            Rezervă o masă
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
