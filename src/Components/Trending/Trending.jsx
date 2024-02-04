import TrendingCard from "./TrendingCard";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../Spinner/Spinner";
const Trending = () => {
  const sliderRef = useRef(null);
  const { data: trendingBlog, isLoading } = useQuery({
    queryKey: ["trendingBlogData"],
    queryFn: async () => {
      const res = await fetch("https://blogverse-server.vercel.app/api/v1/trending-blogs", {
        credentials: "include",
      });
      return res.json();
    },
  });
  if (isLoading) {
    <Spinner/>
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#F3F8FB] mt-5 py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl md:text-3xl lg:text-5xl font-semibold pt-2 pb-4 pl-3">
            Editor Choice
          </h1>
          <div className="flex justify-center gap-3 m-3 text-white ">
            <button
              className=" text-2xl cursor-pointer bg-[#C5015F] p-4 rounded-md"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <BsArrowLeft />
            </button>
            <button
              className=" text-2xl cursor-pointer bg-[#C5015F] p-4 rounded-md"
              onClick={() => sliderRef.current.slickNext()}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="">
          <Slider  ref={sliderRef} {...settings} arrows={false}>
            {trendingBlog?.map((blog) => (
              <TrendingCard key={blog._id} blog={blog} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trending;
