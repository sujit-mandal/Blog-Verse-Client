import BlogCard from "../Components/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Trending from "../Components/Trending/Trending";
import Banner from "../Components/Header/Banner";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["blogdata"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/recent-blogs");
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Banner></Banner>
      <h1 className="mb-3 mt-2 text-center font-sans text-5xl font-bold">
        Most Recent Blog
      </h1>
      <div className="grid grid-cols-3">
        {data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
      <NewsLetter></NewsLetter>
      <Trending></Trending>
    </div>
  );
};

export default Home;
