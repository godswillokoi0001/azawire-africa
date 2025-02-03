import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";

const NavigationBar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleDropdownClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(".dropdown-menu")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };
  return (
    <nav className="w-full fixed top-0 z-40 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm bg-variant/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Side - Logo and Navigation */}
        <div className="lg:flex items-center space-x-4 backdrop-blur-sm md:p-4 md:bg-variant/80 bg-transparent rounded-full md:border border-primary">
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
          <ul className="hidden lg:flex space-x-7 text-sm text-accent font-clash">
            {/* Products Dropdown */}
            <li className="relative dropdown">
              <button
                onClick={() => handleDropdownClick("products")}
                className={`hover:text-primary flex gap-x-1 items-center ${
                  openDropdown === "products"
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                Products
                <BiSolidDownArrow />
              </button>

              {openDropdown === "products" && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-privariant border border-white shadow-lg rounded-lg dropdown-menu "
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      Product 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      Product 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      Product 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      Product 5
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Company Dropdown */}
            <li className="relative dropdown">
              <button
                onClick={() => handleDropdownClick("company")}
                className={`hover:text-primary  flex items-center gap-x-1 ${
                  openDropdown === "company" ? "text-primary font-semibold" : ""
                }`}
              >
                Company
                <BiSolidDownArrow />
              </button>
              {openDropdown === "company" && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-privariant border border-white shadow-lg rounded-lg dropdown-menu"
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20 border-b-2 border-white/5"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="#"
                className={`hover:text-primary ${
                  isActive("/about") ? "text-primary font-semibold" : ""
                }`}
              >
                Pricing
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
              <a
                href="https://azawire.medium.com/"
                target="_blank"
                className={`hover:text-primary ${
                  isActive("/blog") ? "text-primary font-semibold" : ""
                }`}
              >
                Blog
              </a>
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
                  : "bg-primary text-white border-white"
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
            className="lg:hidden text-gray-700 hover:text-primary focus:outline-none"
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
        <div className="hidden lg:flex items-center space-x-3 backdrop-blur-sm p-4 bg-variant/80 rounded-full border border-primary">
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
        <div className="md:hidden bg-white w-full h-screen px-4 py-6 shadow-lg font-clash">
          <ul className="font-semibold">
            <li>
              <Link
                to="/personal"
                className="block text-gray-700 hover:text-primary py-3 border-t"
              >
                Personal
              </Link>
            </li>
            <li>
              <Link
                to="/business"
                className="block text-gray-700 hover:text-primary py-3 border-t"
              >
                Business
              </Link>
            </li>
            <li>
              <button onClick={() => toggleMobileDropdown("products")} className="block text-gray-700 hover:text-primary py-3 border-t w-full text-left">
                Products
              </button>
              {mobileDropdown === "products" && (
                <ul className="pl-4 border-l">
                  <li><Link to="#" className="block px-4 py-2 hover:bg-primary/20">Product 1</Link></li>
                  <li><Link to="#" className="block px-4 py-2 hover:bg-primary/20">Product 2</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => toggleMobileDropdown("company")} className="block text-gray-700 hover:text-primary py-3 border-t w-full text-left">
                Company
              </button>
              {mobileDropdown === "company" && (
                <ul className="pl-4 border-l">
                  <li><Link to="/about" className="block px-4 py-2 hover:bg-primary/20">About Us</Link></li>
                  <li><Link to="#" className="block px-4 py-2 hover:bg-primary/20">Career</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="#"
                className="block text-gray-700 hover:text-primary py-3 border-t"
              >
                Developers
              </Link>
            </li>
            <li>
              <a
                href="https://azawire.medium.com/"
                target="_blank"
                className="block text-gray-700 hover:text-primary py-3 border-t"
              >
                Blog
              </a>
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
