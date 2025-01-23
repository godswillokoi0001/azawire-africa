import React from "react";

const HeroSection = ({ onWaitlistClick }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 w-screen h-screen flex items-center">
      {/* Hero Illustrations */}
      <div className="hidden md:block">
        <img
          src="/images/hero elements.png"
          alt=""
          className="absolute w-[16rem] right-0 top-14 z-50"
        />
        <img
          src="/images/Line.png"
          alt=""
          className="absolute w-[36rem] right-0 top-8 -z-0"
        />
      </div>

      {/* Main Content */}
      <div className="flex md:flex-row flex-col-reverse justify-between items-center w-screen h-full px-[5%]">
        {/* Left Content */}
        <div className="space-y-6 md:w-1/2 text-left">
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tighter max-w-[80%] md:max-w-none">
            Bank Without Borders with Azawire's Web3 Solution
          </h1>
          <p className="text-base text-gray-600 sm:text-lg md:text-xl max-w-[80%] md:max-w-none">
            Effortlessly send and receive money worldwide with Azawire's secure
            and innovative Web3 banking platform.
          </p>
          <button
            className="inline-flex justify-center items-center bg-primary hover:bg-blue-600 px-8 py-4 rounded-lg font-poppins text-sm text-white md:text-lg transition-all duration-300"
          >
            Join Waitlist
            <span className="pl-2">
              <img className="w-5" src="/images/icons/Icons.svg" alt="Icon" />
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center md:w-1/2 w-full h-auto">
          <img
            src="/images/Screenshot 2025-01-10 at 22.25.26 1.png"
            alt="3D Currency Icons"
            className="md:w-full w-[24rem] max-w-[44rem] h-auto md:me-12 me-0 md:mt-8 mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
