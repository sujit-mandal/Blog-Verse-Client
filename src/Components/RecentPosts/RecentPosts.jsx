import { useQuery } from "@tanstack/react-query";
import RecentPostCard from "../BlogCard/RecentPostCard";

const RecentPosts = () => {
  const { data: topPosts, isLoading } = useQuery({
    queryKey: ["topPosts"],
    queryFn: async () => {
      const res = await fetch("https://blogverse-server.vercel.app/api/v1/top-posts");
      return res.json();
    },
  });
  return (
    <div className="max-w-screen-xl mx-auto my-10 py-20">
      <h1 className="text-5xl font-bold mb-10">Top Posts</h1>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          {topPosts?.slice(0,4).map((topPost) => <RecentPostCard key={topPost?._id} topPost={topPost} />)}
        </div>
        <div>
          <img
            src="https://wpdemo.zcubethemes.com/newpress/wp-content/uploads/2021/04/ad-banner.png"
            alt=""
          />
          <h3 className="text-3xl font-medium my-5">Most Loved</h3>
          <div>
            <img
              src="https://wpdemo.zcubethemes.com/newpress/wp-content/uploads/2021/04/most-loved.png"
              alt=""
            />
            <h3 className="text-3xl font-medium mt-3">
              It’s Great the Government is Tightening Gambling
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
