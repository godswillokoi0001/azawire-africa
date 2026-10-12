// import { Link } from "react-router-dom";

const DigitalFinanceHero = () => {
  return (
    <section className="p-4 md:mt-24 mt-16 relative overflow-hidden">
      <div className="max-w-screen-xl bg-privariant py-8 md:px-14 px-8 font-sora rounded-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Section */}
        <div className="md:w-[65%] w-full z-10">
          <div className="flex md:justify-start justify-center mb-6">
            <p className="text-center border border-white rounded-full px-6 py-2 text-white font-medium">A FREE 3-Day Training</p>
          </div>
          <div className="mb-4">
            <h1 className="font-semibold leading-3 md:text-left text-center">
              <div className="text-white text-2xl md:text-6xl mb-2">
                Discover the Future of Money in Just 3 Days
              </div>
            </h1>
          </div>
          <p className="text-gray-300 md:text-lg mb-8 md:max-w-xl md:text-left text-center">
            A Free Beginner-Friendly Training on Stablecoins & Borderless
            Payments. Tired of failed dollar card transactions, high transfer
            fees, and long bank delays?
          </p>
          {/* <button
            onClick={scrollToRegistration}
            className="bg-emerald-400 text-center text-white font-medium px-3 py-3 flex items-center justify-center max-w-36 mx-auto"
          >
            Join Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>  */}
        </div>
        {/* Right Image Section - Stacked Images */}
        <div className="md:w-[65%] w-full hidden md:block z-0 relative">
          {/* Background images - coins and circular elements */}
          <div className="w-full">
            <img
              src="/images/Frame 1618874058.png"
              alt="Digital coins background"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalFinanceHero;
