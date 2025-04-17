import { HiMiniArrowRight } from "react-icons/hi2";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleCareerClick = (e) => {
    e.preventDefault();
    navigate('/about', { state: { scrollTo: 'team' } });
  };

  return (
    <footer className="bg-lightblue text-dark font-sora">
      <div className="max-w-screen-xl mx-auto py-10 px-6">
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
            {/* <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Universal checkout",
                  "Payment workflows",
                  "Observability",
                  "UpliftAI",
                  "Apps & integrations",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Why Us Links */}
            {/* <div className="w-full md:1/2 lg:w-1/3 mb-6">
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
            </div> */}

            {/* Developers Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Developers</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Docs",
                  "API Reference",
                  "Payment methods guide",
                  "Service status",
                  "Community",
                ].map((item) => (
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
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  { name: "Terms", link: "/termsofuse" },
                  { name: "Privacy", link: "/privacy" },
                  { name: "AMLCFTPolicy", link: "/amlcftpolicy" },
                  // { name: "FAQ", link: "/faq" },
                  // { name: "Support", link: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="w-full md:1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" onClick={handleCareerClick} className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" className="hover:underline">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stay Up-to-Date */}
            <div className="w-full md:1/2 lg:w-1/3">
              <h3 className="font-bold mb-4">Stay up to date</h3>
              <form className="flex h-11 items-center mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="bg-black text-white px-3 py-2 rounded-r-full h-full font-bold flex items-center justify-between">
                  <HiMiniArrowRight className="text-xl" />
                </span>
              </form>
              <p className="md:text-md text-[1rem] text-gray-600 leading-6">
                I confirm that I have read Azawire's Privacy policy and agree
                with it.
              </p>

              {/* Social Media Icons */}

              {/* // email: azawire.africa
                  // facebook: https://fb.me/azawirehq
                  // twitter: https://x.com/azawirehq
                  // linkedin: https://www.linkedin.com/company/azawirehq/
                  // youtube: https://azawire
                  // instagram: https//azawire.io 
              */}

              <div className="flex space-x-4 mt-4">
                {[
                  { name: "email", url: "mailto:azawire.africa" },
                  {
                    name: "linkedin",
                    url: "https://www.linkedin.com/company/azawirehq/",
                  },
                  { name: "twitter", url: "https://x.com/azawirehq" },
                  { name: "youtube", url: "https://azawire" },
                  { name: "instagram", url: "https://azawire.io" },
                ].map((icon) => (
                  <a
                    href={icon.url}
                    key={icon.name}
                    className="hover:text-blue-500"
                  >
                    <img
                      src={`/images/icons/${icon.name}.svg`}
                      alt={icon.name}
                      className="h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className=" bg-white">
        <div className="px-6 py-4  max-w-screen-xl mx-auto p mt-8 md:flex items-start justify-between gap-2 md:text-[1rem] text-[1.2rem] ">
          <div className="flex gap-x-2">
            <img src="/images/icons/copyright.svg" alt="Copyright Icon" />
            <p className="text-gray-600">Copyright. 2025. Azawire</p>
          </div>

          <p className="flex md:mt-0 mt-6 text-gray-600 text-[1rem]">
            Azawire is a fintech company, not a bank.
            <br />
            Banking services are provided by licensed banks and financial
            <br />
            institutions in their respective jurisdictions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
