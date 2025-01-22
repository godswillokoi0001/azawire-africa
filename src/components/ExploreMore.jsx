import "aos/dist/aos.css";

const ExploreMore = () => {
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
            <h2 className="mb-6 font-medium font-poppins md:text-4xl text-[1.4rem] text-variant md:leading-[3rem] tracking-tight">
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
              className="flex flex-col space-y-3 bg-black md:p-6 p-4 rounded-xl text-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="">
                <img
                  src="/images/icons/Icons (1).svg"
                  alt="For Individuals"
                  className="mb-4 w-12"
                />
                <h3 className="mb-4 font-clash text-[1.4rem] text-lg">
                  For Individuals
                </h3>
              </div>
              <p className="font-poppins md:text-sm text-[0.8rem] leading-relaxed">
                Maximize earnings, minimize fees, and grow your financial
                portfolio with stablecoin-backed accounts offering personal
                wallet management, secure savings, and instant, low-cost global
                transfers.
              </p>
            </div>

            {/* Business Card */}
            <div
              className="flex flex-col space-y-3 border-gray-200 bg-white md:p-6 p-4 border rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="">
                <img
                  src="/images/icons/Icons (2).svg"
                  alt="For Businesses"
                  className="mb-4 w-12"
                />
                <h3 className="mb-4 font-clash text-[1.4rem] text-lg text-variant">
                  For Businesses
                </h3>
              </div>
              <p className="font-poppins text-gray-700 md:text-sm text-[0.8rem] leading-relaxed">
                Empower your business with Azawire’s scalable, cost-effective
                payment solutions, featuring cross-border payments,
                multi-currency support for seamless transactions, and scalable
                APIs for easy integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
