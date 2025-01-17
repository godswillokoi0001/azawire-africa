import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 ">
        {/* Left Side - Logo */}
        <div className="max-h-16 flex items-center space-x-4 border rounded-full border-accent p-3">
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

          {/* Navigation Links */}
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
          <div className="flex space-x-3 ps-5">
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

        {/* Right Side - Buttons and Links */}
        <div className="max-h-16 flex items-center space-x-4 border rounded-full border-accent p-3">
          {/* Sign In Button */}
          <a
            href="#"
            className="bg-primary font-clash text-white h-full py-2 px-3 rounded-full flex items-center space-x-2 hover:bg-variant transition-all"
          >
            <span>Sign In</span>
            <img
              src="/images/icons/Arrow right.svg"
              alt="Arrow Right"
              className="w-4 h-4"
            />
          </a>

          {/* Language Selector */}
          <div className="relative flex items-center space-x-2 bg-white h-full py-2 px-2 rounded-full cursor-pointer">
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
    </nav>
  );
};

export default Navbar;
