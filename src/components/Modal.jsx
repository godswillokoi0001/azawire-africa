import { useState } from "react";
import PropTypes from "prop-types";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative md:w-full w-[90%]  max-w-md p-6 bg-[#020d22] text-white md:max-w-5xl md:px-40">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="gap-1 flex justify-center items-center absolute top-4 right-4 text-white text-xl font-light focus:outline-none"
        >
          Close <span className="text-[2rem]">×</span>
        </button>

        {/* Modal Content */}
        <div className="text-center md:py-5 md:px-6">
          {/* Title */}
          <h1 className="text-4xl font-medium mb-6 py-8">
            Bank Without Borders with Azawire&apos;s <br /> Web3 Solution
          </h1>
          <div className="flex justify-center">
            {/* Form */}
            <form className="space-y-4 md:w-[75%]" onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-12 py-3 bg-[#02122d] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#33d7a8] outline outline-1 outline-secondary"
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
                  className="w-full px-12 py-3 bg-[#02122d] text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#33d7a8] outline outline-1 outline-gray-400"
                  required
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>

              {/* Join Waitlist Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#33d7a8] text-white rounded-lg hover:bg-[#2bb291] focus:outline-none focus:ring focus:ring-[#33d7a8] flex items-center justify-center"
              >
                Join Waitlist <span className="ml-2">➤</span>
              </button>
            </form>
          </div>

          {/* Social Links */}
          <p className="mt-6 text-sm text-gray-400">We are also on</p>
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
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
