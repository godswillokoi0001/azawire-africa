import React from 'react';

const FAQHero = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-4 py-20  pt-48">
        <div>
          <h1 className="text-xl lg:text-[3.5rem] font-semibold mb-10">Frequently Asked Questions</h1>
          <p className="text-[1.3rem] leading-relaxed w-1/2 text-gray-300 mb-8">
            The global financial landscape is evolving rapidly, with Web3 at its
            forefront. Businesses must adapt to decentralized payment systems
            to stay competitive.
          </p>
          <input
            type="text"
            placeholder="Search for article"
            className="w-[30rem] py-3 px-4 bg-[#051040] text-white rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E3A5] backdrop-blur-md border-2 border-primary"
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
          >
            🔍
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default FAQHero;
