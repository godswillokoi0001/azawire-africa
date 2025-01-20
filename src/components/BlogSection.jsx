import React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    title: "Wired #227: Bitcoin ETFs: An anniversary of demand",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #226: Bitcoin's sweet 16",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #225: 2025: The year ahead",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #224: 2024: The year in review",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #227: Bitcoin ETFs: An anniversary of demand",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #226: Bitcoin's sweet 16",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #225: 2025: The year ahead",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #224: 2024: The year in review",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #227: Bitcoin ETFs: An anniversary of demand",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #226: Bitcoin's sweet 16",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #225: 2025: The year ahead",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
  {
    title: "Wired #224: 2024: The year in review",
    categories: ["Web 2.0", "Web 3.0"],
    date: "Jan 14",
    image: "/images/Blog Image.png", 
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 mb-64">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
            key={index}
            id={index} // or a unique ID if available
            title={blog.title}
            categories={blog.categories}
            date={blog.date}
            image={blog.image}
          />
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
