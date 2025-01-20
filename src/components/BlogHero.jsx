import React from 'react';

const BlogHero = () => {
  return (
    <section className="flex items-center justify-center w-full">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center pt-48">
        <h1 className="text-5xl font-bold mb-6">Blog</h1>
        <div className="relative max-w-lg mx-auto">
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

export default BlogHero;
