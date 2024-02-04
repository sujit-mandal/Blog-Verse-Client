import { useQuery } from "@tanstack/react-query";
import { capitalizeWords } from "../../Utilitis/Capitalize";
import { BsFire } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TbClockHour4 } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../Spinner/Spinner";

const Banner = () => {
  const { data: slides, isLoading } = useQuery({
    queryKey: ["bannerData"],
    queryFn: async () => {
      const res = await fetch("https://blogverse-server.vercel.app/api/v1/banner-blogs");
      return res.json();
    },
  });

  if (isLoading) {
    <Spinner/>
  }

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "16%",
    slidesToShow: 1,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto relative overflow-x-hidden">
      <Slider {...settings}>
        {slides?.map((slide) => (
          <div
            key={slide?._id}
            className={`max-w-screen-xl h-[65vh] relative mx-auto overflow-hidden rounded-xl text-center`}
          >
            <div
              className="relative h-[65vh] overflow-hidden bg-cover bg-no-repeat hover:scale-110 transition-transform duration-300"
              style={{
                backgroundImage: `url(${slide?.blogImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute left-0 bottom-0 pl-10 pb-10 w-3/5 text-white space-y-6">
              <div className="flex gap-5 ">
                <p className="bg-[#FF9900] text-left rounded-md font-semibold py-1 px-2">
                  {capitalizeWords(slide?.category)}
                </p>
                <p className="flex items-center gap-1">
                  <BsFire className="text-pink-600"></BsFire>Trending
                </p>
              </div>
              <h2 className="mb-4 text-left text-2xl md:text-5xl font-medium md:font-semibold ">
                {slide?.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <FiUser></FiUser>
                  <p className="">By Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <TbClockHour4></TbClockHour4>
                  <p className="">April 5, 2023</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComment></FaRegComment>
                  <p className="">No Comments</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
