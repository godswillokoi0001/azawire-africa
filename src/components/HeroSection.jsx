
import React from "react";

const HeroSection = ({ onWaitlistClick }) => {
  return (
    <section className=" text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-medium line-clamp- mb-4 font-poppins tracking-tighter">
          Bank Without Borders with Azawire's Web3 Solution
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Effortlessly send and receive money worldwide with Azawire's secure
            and innovative Web3 banking platform.
          </p>
          <a className="flex items-center justify-center md:w-1/3 text-center md:text-left px-6 py-4 bg-primary text-white rounded-lg font-normal text-lg hover:bg-blue-600 font-poppins"
          onClick={onWaitlistClick}>
            
            Join Waitlist
            <span className="ps-2">
              <img className="w-5" src="/images/icons/Icons.svg" alt="" />
            </span>
          </a>
        </div>

        {/* Right Content */}
        <div className="flex justify-center relative overflow-visible">
          <img
            src="/images/Screenshot 2025-01-10 at 22.25.26 1.png"
            alt="3D Currency Icons"
            className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] object-contain transform scale-125"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
