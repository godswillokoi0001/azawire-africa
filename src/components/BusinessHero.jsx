import React from 'react';

const BusinessHero = () => {
  return (
    <section className="relative bg-variant md:h-5/6">
      <div className='max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
      <div className="md:w-1/2 text-center md:text-left">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          {/* Text Content */}
          <div className="max-w-lg text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Giving your Business the Magic it Deserves
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Azawire is Revolutionizing Business Transactions through Web2 and Web3 Integration
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="flex items-center text-lg px-6 py-5 bg-secondary text-variant font-bold rounded-3xl transition">
               <span><img className="w-6 me-2" src="/images/icons/Group 1000001750.svg" alt="" /></span> Request a Demo
              </button>
              <button className="flex items-center text-lg px-6 py-5 bg-primary text-accent font-bold rounded-3xl transition">
              <span><img className="w-6 me-2" src="/images/icons/Group 1000001751.svg" alt="" /></span>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Image */}
      <div className="md:w-1/2 flex justify-center relative overflow-visible">
          <img
            src="/images/Business Hero Images 1.png"
            alt="Dashboard Preview"
            className="w-full"
          />
      </div>
      </div>  
    </section>
  );
};

export default BusinessHero;
