import React, { useState } from "react";
import questions from "../dbdata/questions";
import { useDarkMode } from "../contexts/DarkModeContext";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={` mt-12 min-h-80% ${
        isDarkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      <div
        className={`w-full md:w-3/4 mx-auto ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-2xl font-bold  text-center">Întrebări frecvente</h2>
        <ul className="mt-10">
          {questions.map((item) => (
            <li key={item.id} className="mb-4">
              <button
                className={`w-full text-left flex justify-between items-center p-4 rounded shadow-md ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-600"
                    : "bg-gray-300 hover:bg-gray-200"
                }`}
                onClick={() =>
                  setSelectedQuestion(
                    selectedQuestion === item.id ? null : item.id
                  )
                }
              >
                {item.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    selectedQuestion === item.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {selectedQuestion === item.id && (
                <div
                  className={`mt-2 p-4 rounded shadow-md ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-200"
                  }`}
                >
                  {item.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
