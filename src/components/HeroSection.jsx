import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r pt-8 md:pt-20">
      <div className=" flex md:flex-row flex-col-reverse justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="space-y-4 md:w-1/2 text-left">
          <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[#252C34]"
            style={{lineHeight: 1.3,}}
          >
            Bank Without Borders with Azawire&apos;s Web3 Solution
          </h1>
          <p className="text-base text-gray-600 sm:text-lg md:text-xl">
            Get paid globally, spend crypto like cash, auto-convert stablecoins, 
            and transact offline—all in one platform.
          </p>
          <br />
          <Link
            to="/waitlist"
            className="w-full md:w-64 inline-flex justify-center items-center bg-primary hover:bg-blue-600 px-8 py-4 rounded-lg font-poppins text-sm text-white md:text-lg transition-all duration-300"
          >
            Join Waitlist
            <span className="pl-2">
              <img className="w-5" src="/images/icons/Icons.svg" alt="Icon" />
            </span>
          </Link>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center md:w-1/2 w-full z-20">
          <img
            src="/images/new-coins.png"
            alt="3D Currency Icons"
            className="w-[14rem] md:w-[34em] max-w-none float-start md:me-20 my-14 md:mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
