import React from "react";

const ValueProposition = () => {
  return (
    <section className="px-6 py-12 md:py-16 lg:py-20 bg-lightblue">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full mb-10">
          <span className="text-[1.5rem] font-semibold text-secondary px-5 py-3 bg-secondary/20 rounded-lg inline-block">
            Value Proposition
          </span>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div
              className="space-y-4"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-2xl lg:text-5xl font-medium tracking-tighter text-variant leading-snug">
                Strong fundamentals support your assets
              </h2>
              <ul className="space-y-4 md:text-xl">
                <li className="flex items-start">
                  <span className="text-primary mr-4 p-1  md:w-2x1">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="check icon"
                    />
                  </span>
                  <p className="text-variant font-semibold p-1">
                    {" "}
                    No more high transfer fees.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4 p-1  md:w-2x1">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="check icon"
                    />
                  </span>
                  <p className="text-variant font-semibold p-1">
                    Faster and more secure transactions.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4 p-1  md:w-2x1">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="check icon"
                    />
                  </span>
                  <p className="text-variant font-semibold p-1">
                    Increased financial freedom and accessibility.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-4 p-1  md:w-2x1">
                    <img
                      src="/images/icons/Group 1000001745.svg"
                      alt="check icon"
                    />
                  </span>
                  <p className="text-variant font-semibold p-1">
                    Empowering individuals and businesses with global financial
                    reach.
                  </p>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium text-sm hover:bg-variant transition"
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
                className="max-w-2x1 h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
