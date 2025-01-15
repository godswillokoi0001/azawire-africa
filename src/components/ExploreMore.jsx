import "aos/dist/aos.css";

const ExploreMore = () => {
  return (
    <section className="py-16 ">
      <div
        className="max-w-screen-xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className=" bg-white md:p-14 p-4 rounded-3xl">
          <div className="md:text-left text-center mb-12">
            <h2 className="md:text-3xl text-lg lg:text-4xl font-poppins font-medium tracking-tighter text-variant">
              Build your portfolio from a single app, <br />
              designed for the forward-thinking investor.
            </h2>
            <button className="mt-6 bg-secondary text-white font-poppins py-3 px-4 rounded-lg hover:bg-green-500 transition-all">
              Explore more
            </button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            {/* Individual Card */}
            <div
              className="bg-black text-white p-10 rounded-xl flex flex-col space-y-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="">
                <div className="flex items-center justify-between pb-3 ">
                  <img
                    src="/images/icons/Icons (1).svg"
                    alt="For Individuals"
                    className="w-10 h-10"
                  />
                  <button>
                    <img
                      src="/images/icons/Icons (3).svg"
                      alt="Arrow Right"
                      className="w-10 h-10"
                    />
                  </button>
                </div>
                <h3 className="font-clash text-lg">For Individuals</h3>
              </div>
              <p className="text-sm font-poppins">
                Benefit from optimized earnings, reduced expenditures, and an
                increased portfolio with a top-up of over $100,000.
              </p>
            </div>

            {/* Business Card */}
            <div
              className="bg-white border p-10 border-gray-200 rounded-xl flex flex-col h-60"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="pb-3">
                <img
                  src="/images/icons/Icons (2).svg"
                  alt="For Businesses"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-clash text-lg text-variant pb-3">
                For Businesses
              </h3>
              <p className="text-sm font-poppins text-gray-700">
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
