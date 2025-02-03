import React from "react";

const BusinessHero = () => {
  return (
    <section className="relative bg-privariant md:py-28 business-hero-bg"

    >
      <div className="max-w-screen-xl mx-auto px-4 md:py-12 py-8 flex flex-col-reverse md:flex-row items-center justify-between h-full">
        {/* Text Section */}
        <div className="md:w-[60%] md:mt-0 mt-12">
          <div className="text-left">
            <div className=" text-white">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold font-sora tracking-tight"
                style={{
                  lineHeight: 1.2,
                }}
              >
              Simplify your business with affordable, scalable payment solutions
              </h1>
              <p className="md:max-w-xl mt-4 text-base sm:text-[1.3rem] text-white leading-8">
              Azawire’s Business Solution is designed to scale with your enterprise, providing fast, secure, and cost-effective payment solutions.
              </p>
              <div className="md:max-w-lg md:mt-16 my-8 flex flex-row justify-start md:justify-start gap-4">
                <button className="w-1/2 flex items-center justify-center md:text-lg text-sm px-3 py-3 bg-secondary text-variant font-bold md:rounded-2xl rounded-lg transition hover:bg-secondary/80">
                  <img
                    className="md:w-6 w-4 me-2"
                    src="/images/icons/Group 1000001750.svg"
                    alt=""
                  />
                  Request a Demo
                </button>
                <button className="w-1/2 flex items-center justify-center  md:text-lg text-sm md:px-5 md:py-5 px-3 py-3 bg-primary text-accent font-bold md:rounded-2xl rounded-lg transition hover:bg-primary/80">
                  <img
                    className="md:w-6 w-4 me-2"
                    src="/images/icons/Group 1000001751.svg"
                    alt=""
                  />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[40%] pt-10 md:pt-0 flex justify-center overflow-visible]">
          <img
            src="/images/coin.png"
            alt="Dashboard Preview"
            className="w-[14rem] lg:w-[24rem] max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
