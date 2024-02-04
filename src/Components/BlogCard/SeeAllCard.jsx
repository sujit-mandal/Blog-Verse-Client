import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
const SeeAllCard = () => {
  return (
    <div>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ulla
        </p>
        <hr className="border-b-[1px] mt-5"/>
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
  );
};

export default SeeAllCard;
