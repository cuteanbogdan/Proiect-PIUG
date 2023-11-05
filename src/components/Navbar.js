import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-${
        isDarkMode ? "gray-800" : "gray-300"
      } text-${isDarkMode ? "white" : "gray-900"} px-6 py-4 relative`}
    >
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Moon Bar
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <i
                className={`fa fa-bars ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`absolute top-full mt-4 w-95% md:static md:mt-0 md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:flex z-50`}
        >
          <Link
            to="/"
            className={`mx-1 px-2 py-1 rounded ${
              location.pathname === "/" ? "bg-yellow-600" : ""
            }`}
          >
            Acasă
          </Link>
          <Link
            to="/meniu"
            className={`mx-1 px-2 py-1 rounded ${
              location.pathname === "/meniu" ? "bg-yellow-600" : ""
            }`}
          >
            Meniu
          </Link>
          <Link
            to="/contact"
            className={`mx-1 px-2 py-1 rounded ${
              location.pathname === "/contact" ? "bg-yellow-600" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className={`mx-1 px-2 py-1 rounded ${
              location.pathname === "/faq" ? "bg-yellow-600" : ""
            }`}
          >
            FAQ
          </Link>
          <button onClick={toggleDarkMode} className="ml-4 focus:outline-none">
            {isDarkMode ? (
              <i className="fa fa-sun-o" title="Light Mode"></i>
            ) : (
              <i className="fa fa-moon-o" title="Dark Mode"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
