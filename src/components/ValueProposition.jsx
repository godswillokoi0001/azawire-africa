import React from "react";

const ValueProposition = () => {
  return (
    <section className="px-6 py-12 md:py-16 lg:py-20 bg-lightblue overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full mb-10">
          <span className="text-lg sm:text-xl font-semibold text-secondary px-5 py-3 bg-secondary/20 rounded-lg inline-block">
            Why Azawire
          </span>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal tracking-tight text-variant leading-snug">
                Revolutionizing Finance for Everyone
              </h2>
              <ul className="space-y-4 md:text-lg">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-variant">
                  <span className="font-semibold"> Global Accessibility: </span> Seamlessly transact across borders
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-variant">
                  <span className="font-semibold">Cost Efficiency: </span> Avoid high transfer fees and hidden charges
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0  h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-variant flex ">
                  <span className="font-semibold">Faster Transaction: </span>  Powered by Web3 technology for instant payments
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-variant">
                   <strong> Freedom Empowering  </strong> users with control over their funds, anytime, 
                  anywhere
                  </p>
                </li>
              </ul>

              <a
                href="#"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-variant transition"
              >
                Explore more
              </a>
            </div>

            {/* Image */}
            <div
              className="relative flex justify-center"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src="/images/Group 1000001741.png"
                alt="Credit card illustration"
                className="max-w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
