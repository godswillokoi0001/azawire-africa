import React from "react";

const ValueProposition = () => {
  return (
    <section className="px-6 py-12 md:py-16 lg:py-20 bg-lightblue overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full mb-10">
          <span className="text-lg sm:text-xl font-semibold text-secondary px-5 py-3 bg-secondary/20 rounded-lg inline-block">
            Why Azawire
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {/* Text Content */}
            <div
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight text-variant leading-snug">
                Revolutionizing Finance for Everyone
              </h2>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 mr-4">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="Check icon"
                      className="h-full w-full"
                    />
                  </span>
                  <p className="text-variant">
                    <span className="font-semibold">Global Accessibility:</span> Seamlessly transact across borders
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
                    <span className="font-semibold">Cost Efficiency:</span> Avoid high transfer fees and hidden charges
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
                    <span className="font-semibold">Faster Transaction:</span> Powered by Web3 technology for instant payments
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
                    <span className="font-semibold">Freedom Empowering:</span> Users with control over their funds, anytime, anywhere
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
              className="relative flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src="/images/Group 1000001741.png"
                alt="Credit card illustration"
                className="max-w-full h-auto drop-shadow-lg md:max-h-[350px] lg:max-h-[450px] xl:max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
