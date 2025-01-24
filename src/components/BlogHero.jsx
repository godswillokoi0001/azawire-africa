import React from "react";

const BlogHero = () => {
  return (
    <section className="flex items-center justify-center w-full py-16 md:py-20 text-white">
      {/* Hero Section */}
      <div className="w-full mx-auto px-6 lg:px-8 text-center mt-24">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Blog
        </h1>

        {/* Search Bar */}
        <div className="relative md:w-[50%]  mx-auto">
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
    </section>
  );
};

export default BlogHero;
