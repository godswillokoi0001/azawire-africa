import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";



const JoinWaitlist = () => {
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [isPhoneError, setPhoneError] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [countries, setCountries] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");

  // Fetch countries and phone codes
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryData = data
          .map((country) => ({
            name: country.name.common,
            dialCode: country.idd?.root + (country.idd?.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((country) => country.dialCode); // Filter out countries without dial codes
        setCountries(countryData.sort((a, b) => a.name.localeCompare(b.name))); // Sort alphabetically
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleWhatsAppNumberBlur = () => {
    if (whatsAppNumber.length < 7) {
      setPhoneError(true);
      updateErrors("WhatsApp number must be at least 7 digits.");
    } else {
      setPhoneError(false);
      removeError("WhatsApp number must be at least 7 digits.");
    }
  };

  const updateErrors = (message) => {
    if (!formErrors.includes(message)) {
      setFormErrors((prev) => [...prev, message]);
    }
  };

  const removeError = (message) => {
    setFormErrors((prev) => prev.filter((error) => error !== message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formErrors.length > 0) {
      alert("Please fix the errors before submitting the form.");
    } else {
      // Display the popup message
      setPopupMessage("Hello! You have been successfully added to our waitlist. Thank you for joining us!");
      
      // Reset the form
      setWhatsAppNumber("");
      setPhoneError(false);
      setFormErrors([]);

      // Hide the popup after 5 seconds
      setTimeout(() => setPopupMessage(""), 5000);
    }
  };

  return (
    <section>
    <div className="h-[48rem] flex flex-col justify-center items-center bg-[#02122d] text-white">
        <NavigationBar2 />
      <div className="w-full max-w-md bg-transparent p-6">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Join the waitlist to be part of our exciting journey
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Field */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-10 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* WhatsApp Number Field */}
          <div className="flex space-x-4">
            <select
              name="phoneCode"
              className="w-1/3 px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-500"
            >
              {countries.map((country, index) => (
                <option key={index} value={country.dialCode} className="bg-variant text-white">
                  {country.dialCode} ({country.name})
                </option>
              ))}
            </select>
            <div className="relative w-2/3">
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="number"
                name="whatsAppNumber"
                placeholder="Your WhatsApp number"
                value={whatsAppNumber}
                onChange={(e) => setWhatsAppNumber(e.target.value)}
                onBlur={handleWhatsAppNumberBlur}
                required
                className="w-full px-10 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email Address Field */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full px-10 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold space-x-2"
          >
            <span>Join Waitlist</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>

        {/* Popup Message */}
        {popupMessage && (
          <div className="mt-6 p-4 bg-green-600 text-white rounded-lg text-center">
            {popupMessage}
          </div>
        )}

        {/* Social Links */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">We are also on</p>
          <div className="flex justify-center gap-4 mt-3">
            <button className="flex items-center px-6 py-3 bg-[#02122d] text-white rounded-md focus:outline-none hover:bg-[#051737] outline outline-1 outline-accent">
              <i className="fa-brands fa-x mr-2"></i> Azawire
            </button>
            <button className="flex items-center px-6 py-3 bg-[#02122d] text-white rounded-md focus:outline-none hover:bg-[#051737] outline outline-1 outline-accent">
              <i className="fab fa-mastodon mr-2"></i> Azawire
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </section>
  );
};

export default JoinWaitlist;
