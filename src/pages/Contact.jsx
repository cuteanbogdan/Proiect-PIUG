import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../contexts/DarkModeContext";
import banner from "../assets/contactbanner.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [notification, setNotification] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (!name.trim()) {
      setNameError("Nume is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Subject validation
    if (!subject.trim()) {
      setSubjectError("Subiect is required.");
      isValid = false;
    } else {
      setSubjectError("");
    }

    // Message validation
    if (!message.trim()) {
      setMessageError("Mesaj is required.");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setNotification({
          type: "success",
          message: "Message sent successfully!",
        });

        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center ${
          isDarkMode ? "text-gray-300 bg-gray-700" : "text-black bg-gray-200"
        }`}
      >
        <div className="w-11/12 md:w-3/4 flex flex-col md:flex-row mb-12 mt-14">
          <img
            src={banner}
            alt="Despre local"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
          />
          <p className="text-justify">
            Moon Bar a fost înființat în 2000 și de atunci oferă o atmosferă
            prietenoasă și liniștită. Specialitățile noastre includ diverse
            tipuri de cafea, prăjituri de casă și multe altele.
          </p>
        </div>
        {notification && (
          <div
            className={`w-11/12 md:w-3/4 p-4 rounded-lg mb-4 shadow-lg ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {notification.message}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className={`w-11/12 mb-8 md:w-3/4 p-6 rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-gray-300"
          } shadow-lg`}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Nume:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border rounded-md ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded-md ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2">
              Subiect:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`w-full p-2 border rounded-md ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            />
            {subjectError && (
              <p className="text-red-500 text-sm">{subjectError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Mesaj:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className={`w-full p-2 border rounded-md ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            ></textarea>
            {messageError && (
              <p className="text-red-500 text-sm">{messageError}</p>
            )}
          </div>

          <button
            type="submit"
            className={`py-2 px-4 rounded-lg ${
              isDarkMode
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold`}
          >
            Trimite
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
