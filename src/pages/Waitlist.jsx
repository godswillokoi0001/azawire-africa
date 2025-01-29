import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import NavigationBar2 from "../components/NavigationBar2";

const JoinWaitlist = () => {
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [isPhoneError, setPhoneError] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryData = data
          .map((country) => ({
            label: `${country.name.common} (${country.idd?.root}${
              country.idd?.suffixes ? country.idd.suffixes[0] : ""
            })`,
            value:
              country.idd?.root +
              (country.idd?.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((country) => country.value);
        setCountries(
          countryData.sort((a, b) => a.label.localeCompare(b.label))
        );
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formErrors.length > 0) {
      alert("Please fix the errors before submitting the form.");
      return;
    }

    if (!selectedCountry) {
      alert("Please select your country.");
      return;
    }

    console.log("Selected Country:", selectedCountry); // Debugging
    console.log("Form Data:", {
      name: e.target.name.value,
      phoneCode: selectedCountry.value,
      whatsAppNumber,
      email: e.target.email.value,
    });

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("phoneCode", selectedCountry.value);
    formData.append("whatsAppNumber", whatsAppNumber);
    formData.append("email", e.target.email.value);

    try {
      const response = await fetch("https://app.wamation.com.ng/processor", {
        method: "POST",
        body: formData,
      });


      const responseText = await response.text();
      console.log("Raw Response:", responseText); // Debug raw response

      if (response.ok) {
        setPopupMessage("You have been successfully added to our waitlist!");
        setWhatsAppNumber("");
        setPhoneError(false);
        setFormErrors([]);
        setSelectedCountry(null);
      } else {
        alert(`Failed to submit. Server response: ${responseText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Something went wrong: ${error.message}`);
    }

    setTimeout(() => setPopupMessage(""), 5000);
  };

  return (
    <section>
      <iframe src="" frameborder="0"></iframe>
      <div className="h-screen flex flex-col justify-center items-center bg-[#02122d] text-white pt-[100rem]">
        <NavigationBar2 />
        <div className="w-full max-w-lg p-6">
            <h2 className="text-center text-xl font-semibold mb-6">
              Join the waitlist to be part of our exciting journey
            </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full px-12 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="relative flex gap-2">
              <div className="w-[35%] text-[#031335]">
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  placeholder="+234 (Nigeria)"
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
              <input
                type="number"
                name="whatsAppNumber"
                placeholder="Your WhatsApp number"
                value={whatsAppNumber}
                onChange={(e) => setWhatsAppNumber(e.target.value)}
                required
                className="w-[65%] px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

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
                className="w-full px-12 py-3 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-semibold"
            >
              <span>Join Waitlist</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          {popupMessage && (
            <div className="mt-6 p-4 bg-green-600 text-white rounded-md text-center">
              {popupMessage}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default JoinWaitlist;
