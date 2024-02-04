import { IoIosArrowRoundForward } from "react-icons/io";
import TopStoriesCard from "../BlogCard/TopStoriesCard";
import SidebarCard from "../SidebarCard/SidebarCard";
import { useQuery } from "@tanstack/react-query";

const TopStories = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["bannerData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/top-stories");
      return res.json();
    },
  });
  return (
    <div className="bg-[#F3F8FB] pb-20">
      <div className="max-w-screen-xl mx-auto flex items-stretch justify-between">
        <h1 className="my-16 font-sans text-xl md:text-3xl lg:text-5xl font-bold">
          Top Stories
        </h1>
        <button className="uppercase text-lg flex items-center gap-1 hover:text-[#C5015F]">
          see all posts
          <IoIosArrowRoundForward />
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-10">
        <div className="col-span-2 justify-between grid grid-cols-2">
          {posts?.slice(0, 2).map((post) => (
            <TopStoriesCard key={post._id} post={post} />
          ))}
        </div>
        <div>
          {posts?.slice(2, 5).map((post) => (
            <SidebarCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
