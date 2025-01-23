import "aos/dist/aos.css";

import React, { useRef } from "react";

const CoreOfferings = ({ title, offerings }) => {
  const scrollRef = useRef(null);

  // Scroll left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="py-16">
      <div
        className="max-w-screen-xl mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-poppins font-medium mb-8 tracking-tighter">
            {title}
          </h2>
          {/* Arrow buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => scroll("left")}
              className="bg-[#bfd4ff] p-2 py-3 px-6 rounded-full active:bg-secondary"
            >
              <span>
                <img src="/images/icons/scroll left arrow.svg" alt="" />
              </span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-[#bfd4ff] p-2 py-3 px-6 rounded-full hover:bg-secondary hover:text-white"
            >
              <span>
                <img src="/images/icons/scroll right arrow.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative">
          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {offerings.map((offer, index) => (
              <div
                key={index}
                className="md:min-w-[450px] min-w-[310px] md:max-h-full max-h-96 bg-white shadow-md rounded-[24px] px-6 pt-4 flex flex-col justify-between"
                style={{ backgroundColor: offer.bgColor }}
              >
                <div className="flex flex-col items-center justify-between h-full w-full">
                
                <h3 className="font-medium mt-4  text-accent md:text-4xl text-3xl md:px-20 px-8 mb-3 text-center tracking-tight ">{offer.title}</h3>
                <p className="mt-2 text-accent text-sm md:text-[1.2rem] text-center">{offer.description}</p>
                  <img
                    src={offer.icon}
                    alt={offer.title}
                    className="mt-4 md:w-60"
                  />
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreOfferings;
