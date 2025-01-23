import React from "react";

const HeroSection = ({ onWaitlistClick }) => {
  return (
    <section className="relative bg-gradient-to-r pt-8 md:pt-8">
                 <div className="hidden md:inline ">
            <img src="/images/hero elements.png" alt="" className="absolute w-[16rem] right-0 top-14 z-40"/>
            <img src="/images/Line.png" alt="" className="absolute w-[36rem] right-0 top-8 z-20"/>
          </div>   
      <div className=" flex md:flex-row flex-col-reverse justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 ">
       
        <div className="space-y-4 md:w-1/2 text-left">
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tighter">
            Bank Without Borders with Azawire's Web3 Solution
          </h1>
          <p className="text-base text-gray-600 sm:text-lg md:text-xl">
            Effortlessly send and receive money worldwide with Azawire's secure
            and innovative Web3 banking platform.
          </p>
          <button
            className="inline-flex justify-center items-center bg-primary hover:bg-blue-600 px-6 py-4 rounded-lg font-poppins text-sm text-white md:text-lg transition-all duration-300"
            onClick={onWaitlistClick}
          >
            Join Waitlist
            <span className="pl-2">
              <img className="w-5" src="/images/icons/Icons.svg" alt="Icon" />
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center md:w-1/2 w-full z-40">
          <img
            src="/images/Screenshot 2025-01-10 at 22.25.26 1.png"
            alt="3D Currency Icons"
            className="w-[30rem] md:w-[44rem] max-w-none float-start md:me-20 md:mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;