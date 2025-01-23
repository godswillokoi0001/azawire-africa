import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lightblue text-dark py-10 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img
              src="/images/icons/Primary Logo Black.svg"
              alt="Azawire Logo"
              className="md:h-20 h-16 mb-4"
            />
          </div>

          <div className="w-full md:w-3/4 flex flex-wrap justify-between space-y-8 md:space-y-0 md:text-[1rem] text-[1.2rem]">
            {/* Product Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                {["Universal checkout", "Payment workflows", "Observability", "UpliftAI", "Apps & integrations"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Us Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Why us</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Expand to new markets",
                  "Boost payment success",
                  "Improve conversion rates",
                  "Reduce payments fraud",
                  "Recover revenue",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Developers</h3>
              <ul className="space-y-2 text-gray-600">
                {["Docs", "API Reference", "Payment methods guide", "Service status", "Community"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                {["Blog", "Success stories", "Terms", "Privacy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Stay Up-to-Date */}
            <div className="w-full md:1/2 lg:w-1/3">
              <h3 className="font-bold mb-4">Stay up to date</h3>
              <form className="flex items-center space-x-2 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-full">
                  →
                </button>
              </form>
              <p className="md:text-md text-[1rem] text-gray-600 leading-6">
                I confirm that I have read Azawire’s Privacy policy and agree
                with it.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                {["email", "linkedin", "twitter", "youtube", "instagram"].map((icon) => (
                  <a href="#" key={icon} className="hover:text-blue-500">
                    <img
                      src={`/images/icons/${icon}.svg`}
                      alt={icon}
                      className="h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 flex items-center gap-2 md:text-[1rem] text-[1.2rem]">
          <img src="/images/icons/copyright.svg" alt="Copyright Icon" />
          <p className="text-gray-600">Copyright. 2025. Azawire</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
