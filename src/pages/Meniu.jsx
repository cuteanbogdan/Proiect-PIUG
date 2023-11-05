import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import UpDownButton from "../components/UpDownButton";
import { Link } from "react-router-dom";

import img1 from "../assets/barslider1.jpg";
import img2 from "../assets/barslider2.jpg";
import img3 from "../assets/barslider3.jpg";
import video from "../assets/meniuVideo.mp4";
import meniuData from "../dbdata/meniuData";
import Footer from "../components/Footer";

const carouselImages = [img1, img2, img3];

const Meniu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(meniuData[0]);
  const [filteredItems, setFilteredItems] = useState(selectedCategory.items);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredItems(selectedCategory.items);
    } else {
      const results = selectedCategory.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
    }
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div
        className={`p-4 flex-1 ${
          isDarkMode ? "bg-gray-700" : "bg-gray-200"
        } text-${isDarkMode ? "gray-200" : "gray-900"}`}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                pagination: true,
                arrows: false,
                perPage: 1,
                breakpoints: { 640: { perPage: 1 }, 768: { perPage: 1 } },
              }}
            >
              {carouselImages.map((img, index) => (
                <SplideSlide key={index}>
                  <img
                    style={{ borderRadius: "20px", zIndex: "1" }}
                    src={img}
                    alt="Meniu imagine"
                    className="w-full h-auto"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div
            style={{ borderRadius: "20px" }}
            className={`w-full md:w-1/2 p-4 mt-8 ${
              isDarkMode ? "text-white bg-gray-800" : "text-black bg-gray-300"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">
              Bine ați venit la Moon Bar!
            </h2>
            <p>
              Situat în inima orașului, barul nostru oferă o ambianță relaxată
              și primitoare, ideală pentru a vă bucura de băuturi rafinate și
              compania prietenilor. Cu o selecție vastă de băuturi și un
              personal dedicat, ne mândrim să oferim clienților noștri o
              experiență memorabilă. Vă așteptăm cu drag să descoperiți
              atmosfera unică și să vă bucurați de momente speciale alături de
              noi.
            </p>

            <div className="my-8">
              <video
                className="w-auto h-72"
                style={{
                  borderRadius: "20px",
                  zIndex: "1",
                  overflow: "hidden",
                }}
                controls
              >
                <source src={video} type="video/mp4" />
                Browser-ul tău nu suportă video.
              </video>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div
            className={`border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <ul className="flex space-x-4 p-4 overflow-x-auto">
              {meniuData.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`py-2 px-4 text-sm font-medium rounded-full transition-transform duration-300 ease-in-out transform ${
                      isDarkMode ? "text-white" : "text-gray-700"
                    } ${
                      selectedCategory.id === category.id
                        ? isDarkMode
                          ? "bg-gray-800 scale-105"
                          : "bg-gray-300 scale-105"
                        : isDarkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {category.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex items-center ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <input
              type="text"
              placeholder="Caută în meniu..."
              value={searchTerm}
              style={{
                width: "15rem",
                border: "2px solid #ccc",
                borderRadius: "5px",
              }}
              onChange={handleSearchChange}
              className={`p-2 mb-4 ml-5 mt-4 w-full ${
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            />
            <Link
              to="/faq"
              className={`ml-4 p-2 rounded-md hover:bg-gray-200 ${
                isDarkMode ? "hover:bg-gray-600" : ""
              }`}
            >
              <i
                className={`fas fa-question-circle fa-2x ${
                  isDarkMode ? "text-gray-800" : "text-gray-400"
                }`}
              ></i>
            </Link>
          </div>

          <UpDownButton
            onUpClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onDownClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          />

          <div className="flex-1 p-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`relative p-4 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-xl mb-2"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meniu;
