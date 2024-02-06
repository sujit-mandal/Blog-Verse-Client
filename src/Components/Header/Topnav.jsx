import Marquee from "react-fast-marquee";
import { BsFire } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";

const Topnav = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bannerData"],
    queryFn: async () => {
      const res = await fetch(
        "https://blogverse-server.vercel.app/api/v1/banner-blogs"
      );
      return res.json();
    },
  });
  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="bg-[#002584] hidden lg:block">
      <div className="max-w-screen-xl mx-auto h-14 flex items-center justify-between ">
        <div className="flex items-center gap-5 w-1/2">
          <div className="bg-[#C5015F] py-2 px-3 rounded-md flex items-center gap-2 text-white">
            <BsFire />
            <h4>Trending</h4>
          </div>
          <div className="text-white w-full">
            <Marquee>
              {data?.map((news) => (
                <p key={news._id} className="mr-5">{news.title}</p>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="text-white flex items-center w-1/2 gap-7">
          <div className="flex items-center gap-2 w-1/2 justify-end">
            <TiWeatherPartlySunny size={24} />
            <h4 className="whitespace-nowrap">17 C Dhaka</h4>
          </div>
          <div className="flex items-center justify-center gap-2 w-1/2 bg-[#2a4b9d] h-14 hover:bg-[#C5015F]">
            <SlCalender />
            <p>{moment().format("dddd, Do MMMM YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
