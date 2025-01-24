import React from "react";

const FAQHero = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-4 py-20  md:pt-48 pt-32">
        <div>
          <h1 className="text-[2.4rem] md:text-[3.5rem] font-semibold mb-10 text-white leading-10">
            Frequently Asked Questions
          </h1>
          <p className="md:text-[1.3rem] leading-relaxed md:w-1/2 text-gray-300 mb-8">
            The global financial landscape is evolving rapidly, with Web3 at its
            forefront. Businesses must adapt to decentralized payment systems to
            stay competitive.
          </p>
          <div className="relative md:w-[40%]">
            <input
              type="text"
              placeholder="Search for an article"
              className="w-full py-3 pl-6 pr-12 bg-[#051040] text-white rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E3A5] backdrop-blur-md border border-primary"
            />
            <button
              aria-label="Search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
