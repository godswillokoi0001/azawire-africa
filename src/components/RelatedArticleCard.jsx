import React from "react";

const RelatedArticleCard = ({ title, category, date, readTime, image }) => {
  return (
    <div className="flex flex-col w-72">
      {/* Article Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full object-cover " />
      </div>

      {/* Article Content */}
      <div className="w-full pe-5 pt-4">
        {/* Category */}
        <div className="text-sm text-purple-600 font-medium mb-2">{category}</div>

        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800 leading-tight mb-3">
          {title}
        </h3>

        {/* Date and Read Time */}
        <p className="text-sm text-gray-500"> 
          {date} • {readTime}
        </p>
      </div>
    </div>
  );
};

export default RelatedArticleCard;
