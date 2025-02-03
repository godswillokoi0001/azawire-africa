import "aos/dist/aos.css";
import { PiApertureThin } from "react-icons/pi";
import { SlArrowRightCircle } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const ExploreMore = () => {
  const location = useLocation();
  const isPersonalPage = location.pathname === "/";
  const isBusinessPage = location.pathname === "/business";

  return (
    <section className="py-16">
      <div
        className="mx-auto px-4 max-w-screen-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="bg-white md:p-8 p-4 sm:p-12 rounded-3xl w-full">
          {/* Heading and Button */}
          <div className="mb-12">
            <h2 className="mb-6 font-normal font-poppins md:text-[2.6rem] text-[1.2rem] text-[#252C34] md:leading-[3.5rem] tracking-tighter">
              Build your portfolio from a single app, <br />
              designed for the forward-thinking investor.
            </h2>
            <button className="bg-secondary px-8 py-4 rounded-lg font-poppins text-[1.1rem] text-white transition-all">
              Explore more
            </button>
          </div>

          {/* Cards Section */}
          <div
            className="flex md:flex-row flex-col gap-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            {/* Individual Card */}
            <div
              className={`flex flex-col space-y-3 border border-gray-200 md:p-10 p-4 rounded-[1.1rem] transition duration-300 
        ${
          isPersonalPage
            ? "bg-black text-white"
            : "bg-white text-gray-700 hover:bg-black hover:text-white"
        }`}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-between">
                <PiApertureThin style={{ fontSize: "52px" }} />
                <Link to="/">
                  <SlArrowRightCircle
                    style={{ fontSize: "42px" }}
                    className="cursor-pointer text-white"
                  />
                </Link>
              </div>
              <h3 className="pb-6 font-sora text-[1.4rem] text-xl">
                For Individuals
              </h3>
              <p className="font-poppins md:text-[0.9rem] text-[0.7rem] leading-relaxed">
                Maximize earnings, minimize fees, and grow your financial
                portfolio with stablecoin-backed accounts offering personal
                wallet management, secure savings, and instant, low-cost global
                transfers.
              </p>
            </div>

            {/* Business Card */}
            <div
              className={`flex flex-col space-y-3 border border-gray-200 md:p-10 p-4 rounded-[1.1rem] transition duration-300 
        ${
          isBusinessPage
            ? "bg-black text-white"
            : "bg-white text-gray-700 hover:bg-black hover:text-white"
        }`}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="flex items-center justify-between">
                <PiApertureThin style={{ fontSize: "52px" }} />
                <Link to="/business">
                  <SlArrowRightCircle
                    style={{ fontSize: "42px" }}
                    className="cursor-pointer text-white"
                  />
                </Link>
              </div>
              <h3 className="pb-6 text-[1.4rem]">For Businesses</h3>
              <p className="font-poppins md:text-[0.9rem] text-[0.7rem] leading-relaxed">
                Empower your business with Azawire’s scalable, cost-effective
                payment solutions, featuring cross-border payments,
                multi-currency support for seamless transactions, and scalable
                APIs for easy integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
