import TrendingCard from "./TrendingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TrendingSlider from "./TrendingSlider";

const Trending = () => {
  const { data: trendings, isLoading } = useQuery({
    queryKey: ["trendingBlogData"],
    queryFn: async () => {
      const res = await fetch("https://ph-blog-site-assignment-server.vercel.app/api/v1/trending-blogs");
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(trendings);

  return (
    <div className="bg-gray-200 mt-5">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-semibold pt-2 pb-4 pl-3">
        Trending on Blog Verse
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        autoplay={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          735: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
          },
        }}
      >
        {trendings?.map((blog) => (
          <SwiperSlide key={blog._id}>
            <TrendingCard blog={blog} />
          </SwiperSlide>
        ))}
        <TrendingSlider></TrendingSlider>
      </Swiper>
    </div>
  );
};

export default Trending;
