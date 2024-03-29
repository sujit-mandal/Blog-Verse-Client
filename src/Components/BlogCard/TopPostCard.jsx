import { GiBookmarklet } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { capitalizeWords } from "../../Utilitis/Capitalize";
const TopPostCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    blogImage,
    addedTime,
    category,
    shortDescription,
    longDescription,
  } = blog;

  const handleWishlist = () => {
    const wishlist = {
      blogId: _id,
      title,
      blogImage,
      category,
      shortDescription,
      longDescription,
      addedTime,
      userName: user?.displayName,
      userMail: user?.email,
      userPhoto: user?.photoURL,
    };

    fetch("https://blogverse-server.vercel.app/api/v1/create-wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item added successfully");
          console.log(data);
        }
      });
  };
  return (
    <section className="py-2 md:py-4 lg:py-5">
      <div className="  justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
        <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900">
          <img src={blogImage} className="h-56 w-full object-cover" alt="" />
          <div className="flex-auto px-6 py-5">
            <span className="mb-2 flex items-center text-sm font-semibold ">
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
                />
              </svg>
              <p className="px-1 text-white bg-[#37B222] rounded-md">
                {capitalizeWords(category)}
              </p>
            </span>
            <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
              {title}
            </h3>
            <p className="mb-4 text-base font-light">{shortDescription.slice(0,150)}</p>
            <div className="flex justify-between items-center">
              <Link to={`/blog-details/${_id}`}>
                <button className="inline-block cursor-pointer hover:bg-[#C5015F] text-[#C5015F] hover:text-white  rounded-full  px-2 py-1 text-center align-middle text-sm font-semibold ">
                  Read More
                </button>
              </Link>
              <button
                onClick={handleWishlist}
                className="text-2xl md:text-3xl"
              >
                <GiBookmarklet></GiBookmarklet>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TopPostCard;
