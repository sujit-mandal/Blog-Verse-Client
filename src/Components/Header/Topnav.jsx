import Marquee from "react-fast-marquee";
import { BsFire } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import moment from "moment";

const Topnav = () => {

  return (
    <div className="bg-[#002584]">
      <div className="max-w-screen-xl mx-auto h-14 flex items-center justify-between ">
        <div className="flex items-center gap-5 w-1/2">
          <div className="bg-[#C5015F] py-2 px-3 rounded-md flex items-center gap-2 text-white">
            <BsFire />
            <h4>Trending</h4>
          </div>
          <div className="text-white">
            <Marquee>
              I can be a React component, multiple React components, or just
              some text.
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
