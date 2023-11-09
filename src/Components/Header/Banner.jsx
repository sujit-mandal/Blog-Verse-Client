import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import SwiperSlider from "./SwiperSlider";
import { useQuery } from "@tanstack/react-query";
import { capitalizeWords } from "../../Utilitis/Capitalize";
import { BsFire } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Banner = () => {
  const { data: slides, isLoading } = useQuery({
    queryKey: ["bannerData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/banner-blogs");
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  console.log(slides);
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative mx-3 lg:mx-0 overflow-hidden rounded-lg rounded-t-none bg-cover bg-no-repeat p-12 text-center h-[80vh]"
              style={{
                backgroundImage: `url('${slide?.blogImage}')`,
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <div id="text-box" className="flex flex-col items-end w-2/3 text-white pl-8">
                  <div className="absolute left-0 bottom-0 pl-5 pb-5">
                    <div className = "flex gap-5">
                    <p className="bg-orange-700 text-left rounded-sm font-semibold px-1">
                      {capitalizeWords(slide?.category)}
                    </p>
                    <p className ="flex items-center"><BsFire className="text-pink-600"></BsFire>Trending</p>
                    </div>
                    <h2 className=" mb-4 text-2xl hover:text-pink-600 md:text-6xl font-medium md:font-semibold ">
                      {slide?.title}
                    </h2>
                    <div className="flex  items-center gap-2">
                        <FiUser></FiUser>
                        <p className="">{slide?.userName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlider></SwiperSlider> */}
      </Swiper>
    </div>
  );
};

export default Banner;
