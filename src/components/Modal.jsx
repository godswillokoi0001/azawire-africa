import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="relative w-full max-w-md p-6 bg-[#020d22] text-white md:max-w-5xl md:px-40">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl focus:outline-none"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="text-center md:py-5 md:px-6 ">
          {/* Title */}
          <h1 className="text-4xl font-medium mb-6 py-8">
            Bank Without Borders with Azawire's <br /> Web3 Solution
          </h1>
          <div className="flex justify-center">
              {/* Form */}
          <form className="space-y-4 md:w-[75%]" method="GET">
            {/* Full Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-[#02122d] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#33d7a8] outline outline-1 outline-secondary"
                required
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#02122d] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#33d7a8] outline outline-1 outline-gray-400"
                required
             />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>

            {/* Join Waitlist Button */}
            <button
              onSubmit={handleSubmit} 
              className="w-full py-3 bg-[#33d7a8] text-white rounded-lg hover:bg-[#2bb291] focus:outline-none focus:ring focus:ring-[#33d7a8] flex items-center justify-center"
            >
              Join Waitlist <span className="ml-2">➤</span>
            </button>
          </form>
          </div>
          

          {/* Social Links */}
          <p className="mt-6 text-sm text-gray-400">We are also on</p>
          <div className="flex justify-center gap-4 mt-3">
            <button className="px-4 py-2 bg-[#02122d] text-white rounded-lg focus:outline-none hover:bg-[#051737]">
              Azawire
            </button>
            <button className="px-4 py-2 bg-[#02122d] text-white rounded-lg focus:outline-none hover:bg-[#051737]">
              Azawire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
