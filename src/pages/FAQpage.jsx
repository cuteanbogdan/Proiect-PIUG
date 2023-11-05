import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { useDarkMode } from "../contexts/DarkModeContext";

const FAQpage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Navbar className="flex-1" />
      <div
        className={`flex flex-col min-h-[93.8vh] ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div className="flex-grow">
          <FAQ />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FAQpage;
