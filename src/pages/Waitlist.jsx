import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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

  // Fetch countries and phone codes
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
            value: country.idd?.root + (country.idd?.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((country) => country.value); // Filter out countries without dial codes
        setCountries(countryData.sort((a, b) => a.label.localeCompare(b.label))); // Sort alphabetically
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors
    if (formErrors.length > 0) {
      alert("Please fix the errors before submitting the form.");
      return;
    }

    if (!selectedCountry) {
      alert("Please select your country.");
      return;
    }

    // Collect form data
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("phoneCode", selectedCountry.value);
    formData.append("whatsAppNumber", whatsAppNumber);
    formData.append("email", e.target.email.value);

    // Send data via POST to the given URL
    try {
      const response = await fetch("http://app/wamation.com.ng/processor", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setPopupMessage("You have been successfully added to our waitlist!");
        setWhatsAppNumber(""); // Clear the form fields
        setPhoneError(false);
        setFormErrors([]);
        setSelectedCountry(null);
      } else {
        alert("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your connection and try again.");
    }

    // Hide the popup after 5 seconds
    setTimeout(() => setPopupMessage(""), 5000);
  };

  return (
    <section>
      <div className="h-screen flex flex-col justify-center items-center bg-[#02122d] text-white">
        <NavigationBar2 />
        <div className="w-full max-w-lg bg-transparent p-6">
          <h2 className="text-center text-xl font-semibold mb-6">
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
                className="w-full px-12 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Country Code and WhatsApp Number Field */}
            <div className="relative flex gap-2">
              <div className="w-1/2 relative">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  placeholder="+234 (Nigeria)"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "transparent",
                      borderColor: "#4b5563",
                      color: "#000",
                      paddingLeft: "2.5rem",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#fff",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#9ca3af",
                    }),
                  }}
                />
              </div>

              <input
                type="number"
                name="whatsAppNumber"
                placeholder="Your WhatsApp number"
                value={whatsAppNumber}
                onChange={(e) => setWhatsAppNumber(e.target.value)}
                onBlur={handleWhatsAppNumberBlur}
                required
                className="w-1/2 px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
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
                className="w-full px-12 py-3 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-semibold space-x-2"
            >
              <span>Join Waitlist</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          {/* Error Messages */}
          {isPhoneError && (
            <p className="mt-2 text-red-500 text-sm">WhatsApp number must be at least 7 digits.</p>
          )}

          {/* Popup Message */}
          {popupMessage && (
            <div className="mt-6 p-4 bg-green-600 text-white rounded-md text-center">
              {popupMessage}
            </div>
          )}
        </div>

        {/* Footer Icons */}
        <div className="mt-6 text-center">
          <p className="text-sm mb-2">We are also on</p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded-md">Azawire</button>
            <button className="px-4 py-2 bg-gray-700 rounded-md">Azawire</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default JoinWaitlist;
