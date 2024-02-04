import { FiUser } from "react-icons/fi";
import { TbClockHour4 } from "react-icons/tb";
import { capitalizeWords } from "../../Utilitis/Capitalize";
import { Link } from "react-router-dom";

const RecentPostCard = ({ topPost }) => {
  return (
    <div className="flex items-center gap-8 mb-5">
      <img
        src={topPost?.blogImage}
        alt=""
        className="w-48 h-52 object-cover rounded-md"
      />
      <div className="space-y-3">
        <span className="bg-[#46b633] text-white px-3 py-1 rounded-sm">
          {capitalizeWords(topPost?.category)}
        </span>
        <div className="rounded-lg space-y-4">
          <Link to={`/blog-details/${topPost?._id}`}>
            <h1 className="text-2xl font-semibold hover:text-[#C5015F]">
              {topPost?.title}
            </h1>
          </Link>
          <p>{topPost?.shortDescription}</p>
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
    </div>
  );
};

export default RecentPostCard;
