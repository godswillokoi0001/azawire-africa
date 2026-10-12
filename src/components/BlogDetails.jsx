import { useParams } from "react-router-dom";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: "1",
    title: "Wired #224: 2024: The year in review",
    date: "Jan 14",
    readTime: "5 min read",
    category: "Web 3.0",
    image: "https://via.placeholder.com/600",
    content: `
      Web 3.0 promises a decentralized internet powered by blockchain technology.
      This evolution allows for trustless, peer-to-peer interactions. Unlike Web 2.0,
      where centralized authorities hold control, Web 3.0 empowers users with
      ownership and data privacy.
    `,
  },
  // Add more blog data here...
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div className="text-center text-xl text-gray-800">Blog not found</div>;
  }

  return (
    <div className="bg-[#F3F4F6] py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Blog Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {blog.date} • {blog.readTime}
        </p>

        {/* Blog Image */}
        <div className="my-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Blog Content */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
          <p>{blog.content}</p>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Render related articles dynamically */}
            {blogs.slice(0, 3).map((relatedBlog) => (
              <div key={relatedBlog.id}>
                <BlogCard
                  id={relatedBlog.id}
                  title={relatedBlog.title}
                  date={relatedBlog.date}
                  readTime={relatedBlog.readTime}
                  category={relatedBlog.category}
                  image={relatedBlog.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
