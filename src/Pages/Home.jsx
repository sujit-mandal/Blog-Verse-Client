import BlogCard from "../Components/BlogCard/BlogCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const blogData = useLoaderData();
  console.log(blogData);
  return (
    <div >
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Our Blog
      </h1>
      <div className="grid grid-cols-3">
        {blogData.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
