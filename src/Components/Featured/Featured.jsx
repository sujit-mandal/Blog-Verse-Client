import { IoIosArrowRoundForward } from "react-icons/io";
import FeaturedCard from "../BlogCard/FeaturedCard";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const { data: slides, isLoading } = useQuery({
    queryKey: ["featuredData"],
    queryFn: async () => {
      const res = await fetch("https://blogverse-server.vercel.app/api/v1/feature-blogs");
      return res.json();
    },
  });
  return (
    <div className="max-w-screen-xl mx-auto pb-32">
      <div className="flex items-stretch justify-between">
        <h1 className="my-16 font-sans text-xl md:text-3xl lg:text-5xl font-bold">
          Featured Posts
        </h1>
        <button className="uppercase text-lg flex items-center gap-1 hover:text-[#C5015F]">
          see all posts
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {slides?.slice(0, 3).map((slide) => (
          <FeaturedCard key={slide._id} slide={slide} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
