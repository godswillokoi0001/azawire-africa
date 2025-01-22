import React from "react";

const HeroSection = ({ onWaitlistClick }) => {
  return (
    <section className="relative bg-gradient-to-r md:pt-24 pt-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tighter font-poppins">
            Bank Without Borders with Azawire's Web3 Solution
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Effortlessly send and receive money worldwide with Azawire's secure
            and innovative Web3 banking platform.
          </p>
          <button
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium text-sm md:text-lg hover:bg-blue-600 transition-all duration-300 font-poppins"
            onClick={onWaitlistClick}
          >
            Join Waitlist
            <span className="pl-2">
              <img className="w-5" src="/images/icons/Icons.svg" alt="Icon" />
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src="/images/Screenshot 2025-01-10 at 22.25.26 1.png"
            alt="3D Currency Icons"
            className="md:w-full w-[22rem] max-w-[500px] sm:max-w-[1200px] md:max-w-[700px] lg:max-w-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
