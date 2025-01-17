import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lightblue text-dark py-10 px-6">
      {/* Logo Section */}
      <div className="max-w-screen-xl mx-auto">
        <div className="px-4 flex">

        
        <div className="w-1/4">
          <img
            src="/images/icons/Primary Logo Black.svg"
            alt="Azawire Logo"
            className="h-20 mb-4"
          />
        </div>
        <div className="w-3/4 flex flex-col justify-between space-y-8 md:space-y-0 text-lg">
          {/* Top Section */}
          <div className="w-full flex justify-between pb-16">
            {/* Product Links */}
            <div className="w-1/3">
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Universal Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payment Workflows
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Observability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    UpliftAI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Apps & Integrations
                  </a>
                </li>
              </ul>
            </div>
            {/* Why Us Links */}
            <div className="w-1/3">
              <h3 className="font-bold mb-4">Why us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Expand to new markets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Boost payment success
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Improve conversion rates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Reduce payments fraud
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Recover revenue
                  </a>
                </li>
              </ul>
            </div>
            {/* Developers Links */}
            <div className="w-1/3">
              <h3 className="font-bold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payment methods guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Buttom Section */}
          <div className="w-full flex justify-between">
            {/* Resources Links */}
            <div className="w-1/3">
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Success stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            {/* Company Links */}
            <div className="w-1/3">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            {/* Stay up to date Section */}
            <div className="w-1/3 flex-shrink-0">
              <h3 className="font-bold mb-4">Stay up to date</h3>
              <form className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded-r-full">
                    →
                  </button>
                </div>
              </form>
              <p className="text-[1.1rem] text-gray-600 leading-6">
                I confirm that I have read Azawire’s Privacy policy and agree
                with it.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/email.svg"
                    alt="Email"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/twitter.svg"
                    alt="Twitter"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/youtube.svg"
                    alt="YouTube"
                    className="h-5 me-3"
                  />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <img
                    src="/images/icons/instagram.svg"
                    alt="Instagram"
                    className="h-5 me-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-8 flex items-center gap-2">
      <span><img src="/images/icons/copyright.svg" alt="" /></span>
        <p className="text-[1.4rem] text-black font-semibold"> Copyright. 2025. Azawire</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
