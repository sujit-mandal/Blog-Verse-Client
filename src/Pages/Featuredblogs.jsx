import BlogCard from "../Components/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";

const Featuredblogs = () => {

  const { data } = useQuery({
    queryKey: ["blogdata"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/featured-blogs");
      return res.json();
    },
  });
  console.log(data);
  return (
    <div>
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Our Blog
      </h1>
      <div className="grid grid-cols-3">
        {data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Featuredblogs;
