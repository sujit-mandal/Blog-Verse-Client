import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const TestimonialCard = ({ blog }) => {
  const { _id, blogImage, userName, userPhoto, title, shortDescription } = blog;

  return (
    <div className="  justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
      <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900  hover:shadow-lg">
        <img src={blogImage} className="h-52 w-full object-cover" alt="" />

        <div className="flex-auto px-6 py-5">
          <div>
            <img src={userPhoto} className="mr-2 w-8 h-8 rounded-full" />
          </div>
          <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
            {title}
          </h3>
          <p className="mb-4 text-base font-light">{shortDescription}</p>
          <div className="flex justify-between items-center">
            <Link to={`/blog-details/${_id}`}>
              <button className="flex items-center gap-1 cursor-pointer select-none  text-center align-middle text-lg font-semibold leading-normal text-blue-300 no-underline shadow-sm">
                Read More
                <BsArrowRight></BsArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TestimonialCard;
