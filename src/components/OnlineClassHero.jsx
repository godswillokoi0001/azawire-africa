import React from "react";
import { Link } from "react-router-dom";

const DigitalFinanceHero = () => {
  return (
    <section className="p-4 relative overflow-hidden">
      <div className="max-w-screen-xl bg-privariant py-8 px-6 font-sora rounded-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Section */}
        <div className="md:w-[65%] z-10 px-6">
          <div className="inline-block border border-white rounded-full px-6 py-2 mb-6">
            <p className="text-white font-medium">A FREE 3-Day Training</p>
          </div>
          
          <div className="mb-4">
            <h1 className="font-bold leading-9">
              <div className="text-secondary text-4xl md:text-6xl mb-2">The Future of Finance:</div>
              <div className="text-white text-4xl md:text-6xl mb-2">Digital Finance &</div>
              <div className="text-white text-4xl md:text-6xl">Stablecoins!</div>
            </h1>
          </div>
          
          <p className="text-white text-lg mb-8 md:max-w-xl">
            The world of finance is changing fast, with new 
            opportunities to earn, save, and transact globally.
          </p>
          <Link to="/online-class-registration" className="bg-emerald-400 text-white font-medium px-6 py-3 rounded flex items-center w-40">
            Join Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        {/* Right Image Section - Stacked Images */}
        <div className="md:w-[65%]">
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