import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) => {

      return location.pathname === path || (path === "/business" && location.pathname === "/productcustomer");
  };

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
    <nav className="max-w-screen-xl w-full fixed top-0 z-50 md:bg-transparent bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center space-x-4 backdrop-blur-sm md:p-4 bg-white/60 rounded-full md:border border-[#e5f9ff]">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-black flex items-center"
          >
            <img
              src="/images/Primary Logo Black.png"
              alt="Azawire Logo"
              className="md:h-10 h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex space-x-7 text-sm text-black font-clash">
            {/* Products Dropdown */}
            <li className="relative dropdown">
              <button
                onClick={() => handleDropdownClick("products")}
                className={`hover:text-primary flex gap-x-1 items-center ${
                  openDropdown === "products" ? "text-primary" : ""
                }`}
              >
                Products
                <BiSolidDownArrow
                  className={`transition-transform duration-200 ${
                    openDropdown === "products" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openDropdown === "products" && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-accent border shadow-lg rounded-lg dropdown-menu "
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link
                      to="/productcustomer"
                      className="block px-4 py-2 hover:bg-primary/10 border-b-2 border-black/10"
                    >
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/productbusiness"
                      className="block px-4 py-2 hover:bg-primary/10 border-b-2 border-black/10"
                    >
                      Business
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Company Dropdown */}
            <li className="relative dropdown">
              <button
                onClick={() => handleDropdownClick("company")}
                className={`hover:text-primary flex items-center gap-x-1 transition-all ${
                  openDropdown === "company" ? "text-primary" : ""
                }`}
              >
                Company
                <BiSolidDownArrow
                  className={`transition-transform duration-200 ${
                    openDropdown === "company" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Prevent layout shifts using absolute positioning */}
              <ul
                className={`absolute left-0 mt-2 w-48 bg-accent border border-white shadow-lg rounded-lg dropdown-menu 
              transition-opacity duration-300 ease-in-out transform ${
                openDropdown === "company"
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-primary/10 border-b-2 border-black/10"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-primary/10 border-b-2 border-black/10"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="#"
                className={`hover:text-primary ${
                  isActive("/pricing") ? "text-primary font-semibold" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <a
                to="https://azawire.readme.io"
                target="_blank"
                className={`hover:text-primary ${
                  isActive("#") ? "text-primary font-semibold" : ""
                }`}
              >
                Developers
              </a>
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
                  : "bg-transparent text-black border-black border"
              } font-clash py-2 px-6 rounded-full`}
            >
              Business
            </Link>

            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "bg-primary text-white"
                  : "bg-transparent text-black border-black border"
              } font-clash py-2 px-6 rounded-full hover:bg-variant`}
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
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Right Side - Sign In and Language Selector */}
        <div className="hidden md:flex items-center space-x-3 backdrop-blur-sm p-4 bg-white/60 rounded-full border border-[#e5f9ff]">
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
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="block text-gray-700 hover:text-primary py-3 border-t w-full text-left"
              >
                Products
              </button>
              {mobileDropdown === "products" && (
                <ul className="pl-4 border-l">
                  <li>
                    <Link
                      to="/productcustomer"
                      className="block px-4 py-2 hover:bg-primary/20"
                    >
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/productbusiness"
                      className="block px-4 py-2 hover:bg-primary/20"
                    >
                      Business
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="block text-gray-700 hover:text-primary py-3 border-t w-full text-left"
              >
                Company
              </button>
              {mobileDropdown === "company" && (
                <ul className="pl-4 border-l">
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-primary/20"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-primary/20"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="https://azawire.readme.io"
                className="block text-gray-700 hover:text-primary py-3 border-t"
                target="_blank"
              >
                Developers
              </a>
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

export default Navbar;
