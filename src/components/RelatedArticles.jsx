import RelatedArticleCard from "./RelatedArticleCard";

const relatedArticles = [
  {
    title: "How to Write Articles with AI? Include Your Unique Perspective",
    category: "Artificial Intelligence",
    date: "Oct 19",
    readTime: "10 min read",
    image: "/images/image 8.png",
  },
  {
    title: "How to Write Articles with AI? Include Your Unique Perspective",
    category: "Artificial Intelligence",
    date: "Oct 19",
    readTime: "10 min read",
    image: "/images/image 8.png",
  },
  {
    title: "How to Write Unique Articles with AI? Conduct Interviews",
    category: "Artificial Intelligence",
    date: "Oct 19",
    readTime: "10 min read",
    image: "images/image 9.png",
  },
];

const RelatedArticles = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Share Section */}
        <div className="flex md:w-2/5 w-full justify-between items-center mb-8 bg-primary rounded-lg py-3 px-4">
          <p className="text-accent text-xs font-medium">
            Like what you see? Share with a friend.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600">

              <span> <img src="/images/icons/Facebook Icon.svg" alt="" /></span>
            </a>
            <a href="#" className="text-blue-400">
              <span> <img src="/images/icons/Twitter Icon.svg" alt="" /></span>
            </a>
            <a href="#" className="text-blue-700">
            <span> <img src="/images/icons/Linkedin Icon.svg" alt="" /></span>
            </a>
          </div>
        </div>

        <hr className="mb-8 border-gray-300" />

        {/* Related Articles */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">Related Articles</h2>
        <div className="flex flex-col justify-start md:flex-row gap-6">
          {relatedArticles.map((article, index) => (
            <RelatedArticleCard
              key={index}
              title={article.title}
              category={article.category}
              date={article.date}
              readTime={article.readTime}
              image={article.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
