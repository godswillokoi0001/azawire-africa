import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavigationBar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full fixed top-0 z-40 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm bg-variant/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center space-x-4 backdrop-blur-sm md:p-4 md:bg-variant/80 bg-transparent rounded-full md:border border-primary">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-black flex items-center "
          >
            <img
              src="/images/icons/Primary Logo White 1.svg"
              alt="Azawire Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-7 text-sm text-accent font-clash">
            <li>
              <Link
                to="#"
                className={`hover:text-primary ${
                  isActive("#") ? "text-primary font-semibold" : ""
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`hover:text-primary ${
                  isActive("#") ? "text-primary font-semibold" : ""
                }`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-primary ${
                  isActive("/about") ? "text-primary font-semibold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`hover:text-primary ${
                  isActive("#") ? "text-primary font-semibold" : ""
                }`}
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`hover:text-primary ${
                  isActive("/blog") ? "text-primary font-semibold" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`hover:text-primary ${
                  isActive("/faq") ? "text-primary font-semibold" : ""
                }`}
              >
                FAQ
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex space-x-3 ps-5">
            <Link
              to="/business"
              className={`${
                isActive("/business")
                  ? "bg-primary text-white"
                  : "bg-transparent text-white border-white"
              } font-clash py-2 px-6 rounded-full hover:bg-primary `}
            >
              Business
            </Link>
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "bg-primary text-white"
                  : "bg-transparent text-white border border-white"
              } font-clash py-2 px-6 rounded-full`}
            >
              Personal
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          {/* Language Selector */}
          <div className="md:hidden relative flex items-center space-x-2 bg-white py-2 px-2 rounded-full cursor-pointer">
            <img
              src="/images/Frame 1000004490.png"
              alt="Nigeria Flag"
              className="w-7 rounded-full"
            />
            <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-all">
              <img
                className="w-3 h-3"
                src="/images/icons/Arrow down.svg"
                alt="Arrow Down"
              />
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6 text-white" />
            ) : (
              <FiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Right Side - Sign In and Language Selector */}
        <div className="hidden md:flex items-center space-x-3 backdrop-blur-sm p-4 bg-variant/80 rounded-full border border-primary">
          <a
            href="#"
            className="bg-primary font-clash text-white py-2 px-3 rounded-full flex items-center space-x-2 transition-all"
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
              <div className="md:hidden bg-white w-full h-lvh px-4 py-6 shadow-lg">
                <ul className="font-semibold">
                <li>
                    <Link to="/personal" className="block text-gray-700 hover:text-primary py-3 border-t">
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link to="/business" className="block text-gray-700 hover:text-primary py-3 border-t">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block text-gray-700 hover:text-primary py-3 border-t">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block text-gray-700 hover:text-primary py-3 border-t">
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block text-gray-700 hover:text-primary py-3 border-t"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="block text-gray-700 hover:text-primary py-3 border-t">
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="block text-gray-700 hover:text-primary py-3 border-t"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="block text-gray-700 hover:text-primary py-3 border-t border-b"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col space-y-4">
                  
                  <button className="w-full bg-variant font-clash text-white py-3 rounded-md hover:bg-variant transition">
                    Join Waitlist
                  </button>
                </div>
              </div>
            )}
    </nav>
  );
};

export default NavigationBar2;
