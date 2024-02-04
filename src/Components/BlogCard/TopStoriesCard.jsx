import { capitalizeWords } from "../../Utilitis/Capitalize";
import { FiUser } from "react-icons/fi";
import { TbClockHour4 } from "react-icons/tb";
import { Link } from "react-router-dom";
const TopStoriesCard = ({ post }) => {
  return (
    <div className="w-80 h-96 relative overflow-hidden rounded-md border-2">
      <img src={post?.blogImage} alt="" className="h-full object-cover" />
      <div
        className="absolute inset-0 "
        style={{
          background:
            "rgba(255, 255, 255, 0) linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(4, 8, 24, 0.63)) repeat scroll 0 0",
          zIndex: 2,
        }}
      >
        <span className="bg-[#46b633] absolute top-5 left-5 text-left text-white rounded-md font-semibold py-1 px-2">
          {capitalizeWords(post?.category)}
        </span>

        <div className="absolute left-0 bottom-0 pl-5 pb-5 text-white space-y-6">
          <Link to={`/blog-details/${post?._id}`}>
            <h2 className="mb-4 text-left text-2xl font-medium md:font-semibold hover:text-[#C5015F]">
              {post?.title}
            </h2>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FiUser></FiUser>
              <p className="">By Admin</p>
            </div>
            <div className="flex items-center gap-2">
              <TbClockHour4></TbClockHour4>
              <p className="">April 5, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStoriesCard;
