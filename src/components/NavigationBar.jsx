import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-40 md:bg-transparent bg-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-black flex items-center"
          >
            <img
              src="/images/Primary Logo Black.png"
              alt="Azawire Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-7 text-sm text-gray-700 font-clash">
            <li>
              <Link to="#" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Company
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Developers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex space-x-3 ps-5">
            <Link
              to="/business"
              className="bg-primary font-clash text-white py-2 px-6 rounded-full hover:bg-variant"
            >
              Business
            </Link>
            <Link
              to="/"
              className="bg-transparent font-clash border border-black text-black py-2 px-6 rounded-full hover:bg-variant hover:text-white"
            >
              Personal
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>

        {/* Right Side - Sign In and Language Selector */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#"
            className="bg-primary font-clash text-white py-2 px-3 rounded-full flex items-center space-x-2 hover:bg-variant transition-all"
          >
            <span>Sign In</span>
            <img
              src="/images/icons/Arrow right.svg"
              alt="Arrow Right"
              className="w-4 h-4"
            />
          </a>
          <div className="relative flex items-center space-x-2 bg-white py-2 px-2 rounded-full cursor-pointer">
            <img
              src="/images/Frame 1000004490.png"
              alt="Nigeria Flag"
              className="w-6 rounded-full"
            />
            <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-all">
              <img
                className="w-3 h-3"
                src="/images/icons/Arrow down.svg"
                alt="Arrow Down"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full px-4 py-6 shadow-lg">
          <ul className="space-y-4">
            <li>
              <Link to="#" className="block text-gray-700 hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="#" className="block text-gray-700 hover:text-primary">
                Company
              </Link>
            </li>
            <li>
              <Link to="/about" className="block text-gray-700 hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="block text-gray-700 hover:text-primary">
                Developers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block text-gray-700 hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className="block text-gray-700 hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-col space-y-4">
            <Link
              to="/business"
              className="bg-primary font-clash text-white py-2 px-6 rounded-full text-center hover:bg-variant"
            >
              Business
            </Link>
            <Link
              to="/"
              className="bg-transparent font-clash border border-black text-black py-2 px-6 rounded-full text-center hover:bg-variant hover:text-white"
            >
              Personal
            </Link>
            <button className="w-full bg-primary font-clash text-white py-3 rounded-md hover:bg-variant transition">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
