import BlogCard from "../Components/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Videosection from "../Components/Videosection/Videosection";
import Trending from "../Components/Trending/Trending";
import Banner from "../Components/Header/Banner";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["recentBlogData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/recent-blogs", {
        credentials: "include",
      });
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,
          background: "#10B981",
          transformOrigin: "0%",
          zIndex: 999,
        }}
      ></motion.div>
      <div>
        <Banner></Banner>
        <h1 className="mb-3 mt-2 text-center font-sans text-xl md:text-3xl lg:text-5xl font-bold">
          Most Recent Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
        </div>
        <Videosection></Videosection>
        <NewsLetter></NewsLetter>
        <Trending></Trending>
      </div>
    </>
  );
};

export default Home;
