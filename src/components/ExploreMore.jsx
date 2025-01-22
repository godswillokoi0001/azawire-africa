import "aos/dist/aos.css";

const ExploreMore = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div
        className="max-w-screen-md mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg">
          {/* Heading and Button */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-poppins font-medium tracking-tight text-variant mb-6">
              Build your portfolio from a single app, <br />
              designed for the forward-thinking investor.
            </h2>
            <button className="bg-green-500 text-white font-poppins py-3 px-6 rounded-lg hover:bg-green-600 transition-all text-sm sm:text-base">
              Explore more
            </button>
          </div>

          {/* Cards Section */}
          <div
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            {/* Individual Card */}
            <div
              className="bg-black text-white p-6 rounded-xl flex flex-col space-y-3"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-start space-x-3">
                <img
                  src="/images/icons/Icons (1).svg"
                  alt="For Individuals"
                  className="w-8 h-8"
                />
                <h3 className="font-clash text-base sm:text-lg">
                  For Individuals
                </h3>
              </div>
              <p className="text-sm font-poppins leading-relaxed">
                Benefit from optimized earnings, reduced expenditures, and an
                increased portfolio with a top-up of over $100,000.
              </p>
            </div>

            {/* Business Card */}
            <div
              className="bg-white border border-gray-200 p-6 rounded-xl flex flex-col space-y-3"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="flex items-center justify-start space-x-3">
                <img
                  src="/images/icons/Icons (2).svg"
                  alt="For Businesses"
                  className="w-8 h-8"
                />
                <h3 className="font-clash text-base sm:text-lg text-variant">
                  For Businesses
                </h3>
              </div>
              <p className="text-sm font-poppins leading-relaxed text-gray-700">
                Benefit from optimized earnings, reduced expenditures, and an
                increased portfolio with a top-up of over $500,000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
