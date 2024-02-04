import { IoIosArrowRoundForward } from "react-icons/io";

import { useQuery } from "@tanstack/react-query";
import TopPostCard from "../BlogCard/TopPostCard";
import NewsLetter from "../NewsLetter/NewsLetter";
import SidebarCard from "../SidebarCard/SidebarCard";
import SocialLink from "../SocialLink/SocialLink";
import Spinner from "../Spinner/Spinner";
const TopPosts = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["recentBlogData"],
    queryFn: async () => {
      const res = await fetch("https://blogverse-server.vercel.app/api/v1/recent-blogs", {
        credentials: "include",
      });
      return res.json();
    },
  });
  if (isLoading) {
    <Spinner/>
  }
  return (
    <div className="bg-[#F3F8FB]">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="flex items-stretch justify-between">
              <h1 className="mb-3 mt-12 font-sans text-xl md:text-3xl lg:text-5xl font-bold">
                Recent Posts
              </h1>
              <button className="uppercase text-lg flex items-center gap-1 hover:text-[#C5015F]">
                see all posts
                <IoIosArrowRoundForward />
              </button>
            </div>
            <div className="grid grid-cols-2">
              {posts?.slice(0, 6).map((blog) => (
                <TopPostCard key={blog._id} blog={blog}></TopPostCard>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <NewsLetter />
            <SocialLink />
            {posts?.slice(6, 11).map((post) => (
              <SidebarCard key={post._id} post={post}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
