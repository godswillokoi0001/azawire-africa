import NavigationBar from "../components/NavigationBar";

const Blog = () => {
  return (
    <div>
      <NavigationBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-poppins font-bold text-primary">
          Blog Page
        </h1>
      </div>
    </div>
  );
};

export default Blog;
