import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCard = ({ id, title, date, image }) => {
  return (
    <div className="text-white rounded-[1.2rem]">
      {/* Image Section */}
      <Link to={`/blog/${id}`}>
        <div
          className="md:h-[14rem] h-[16rem]  w-full bg-cover rounded-[1.2rem] mb-4"
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

BlogCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
};

export default BlogCard;
