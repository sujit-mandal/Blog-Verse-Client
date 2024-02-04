import { FiUser } from "react-icons/fi";
import { TbClockHour4 } from "react-icons/tb";
import { capitalizeWords } from "../../Utilitis/Capitalize";
import { Link } from "react-router-dom";
const FeaturedCard = ({ slide }) => {
  return (
    <div className=" w-96 h-[440px] relative">
      <div className="w-96 h-[350px] relative overflow-hidden rounded-md">
        <img
          src={slide?.blogImage}
          alt=""
          className=" w-full h-full transition-transform duration-300 transform object-cover hover:scale-110"
        />
        <span className="bg-[#46b633] text-white px-3 py-1 rounded-sm absolute top-3 left-3 uppercase">
          {capitalizeWords(slide?.category)}
        </span>
      </div>
      <div className="w-[90%] p-5 bg-white shadow-md rounded-lg absolute top-2/5 transform -translate-y-1/2 left-0 right-0 mx-auto">
        <Link to={`/blog-details/${slide?._id}`}>
          <h1 className="text-xl font-semibold hover:text-[#C5015F]">
            {slide?.title}
          </h1>
        </Link>
        <div className="flex items-center gap-3 mt-5">
          <div className="flex items-center gap-2 text-[#C5015F]">
            <FiUser></FiUser>
            <p className="text-black">By Admin</p>
          </div>
          <div className="flex items-center gap-2 text-[#C5015F]">
            <TbClockHour4></TbClockHour4>
            <p className="text-black">April 5, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
