import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, categories, date, image }) => {
  return (
    <div className="text-white rounded-[1.2rem]">
      {/* Image Section */}
      <Link to={`/blog/${id}`}>
        <div
          className="h-48 w-full bg-cover rounded-[1.2rem] mb-4"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          
        ></div>
        <div>
          {/* Title */}
          <h3 className="text-lg text-black/90 font-bold mt-1 mb-2 leading-5">
            {title}
          </h3>

          {/* Date */}
          <p className="text-md text-gray-500">{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
