import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
const SeeAllCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="my-5">
          <div className="relative">
            <img
              src="https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/p1.jpg"
              alt=""
            />
            <div className="absolute flex items-center gap-3 p-3  bg-white shadow-md right-5 -translate-y-1/2 rounded-xl">
              <FaRegUser className="text-xl text-[#C5015F]"></FaRegUser>
              <p>By Admin</p>
            </div>
          </div>
          <div className="border-2 border-gray-200 p-10">
            <h3 className="text-4xl font-semibold hover:text-[#C5015F]">
            Be fearless in front of them with your ideas as many times as they’ll let you.
            </h3>
            <p className="mt-5 text-gray-500">
            Beauty Dust is very pretty to look at and it tastes like nothing, which is great. Here is what it’s supposed to do: This ancient empiric formula expands beauty through alchemizing elements legendary for their youth preserving, fortifying and tonifying qualities. Glowing supple skin, lustrous shiny hair and twinkling bright eyes are holistically bestowed from the inside out.
            </p>
            <hr className="border-b-[1px] mt-5" />
            <div className="flex items-center gap-5 mt-5">
              <div className="flex items-center gap-2">
                <FaRegComment className="text-[#C5015F]"></FaRegComment>
                <p className="">No Comments</p>
              </div>
              <div className="flex items-center gap-2">
                <SlCalender className="text-[#C5015F]"></SlCalender>
                <p className="">April 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="relative">
            <img
              src="https://wpdemo.zcubethemes.com/newpress/wp-content/uploads/2021/04/tr-6-1-1024x781.jpg"
              alt=""
            />
            <div className="absolute flex items-center gap-3 p-3  bg-white shadow-md right-5 -translate-y-1/2 rounded-xl">
              <FaRegUser className="text-xl text-[#C5015F]"></FaRegUser>
              <p>By Admin</p>
            </div>
          </div>
          <div className="border-2 border-gray-200 p-10">
            <h3 className="text-4xl font-semibold hover:text-[#C5015F]">
              We have to keep every chapter
            </h3>
            <p className="mt-5 text-gray-500">
            I actually first read this as alkalizing meaning effecting pH level, and I was like, OK I guess I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research each ingredient because I know alchemy is not actually happening in my body when I eat this, since alchemy is not real.
            </p>
            <hr className="border-b-[1px] mt-5" />
            <div className="flex items-center gap-5 mt-5">
              <div className="flex items-center gap-2">
                <FaRegComment className="text-[#C5015F]"></FaRegComment>
                <p className="">No Comments</p>
              </div>
              <div className="flex items-center gap-2">
                <SlCalender className="text-[#C5015F]"></SlCalender>
                <p className="">April 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 my-5">
        <Sidebar />
      </div>
    </div>
  );
};

export default SeeAllCard;
