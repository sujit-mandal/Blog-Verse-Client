import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const TestimonialCard = ({ blog }) => {
  const { _id, blogImage, title, shortDescription } = blog;
  return (
    <div className="px-4">
      <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900  hover:shadow-lg">
        <img src={blogImage} className="h-52 w-full object-cover" alt="" />
        <div className="flex-auto px-6 py-5">
          <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
            {title}
          </h3>
          <p className="mb-4 text-base font-light">{shortDescription.slice(0,150)}</p>
          <div className="flex justify-between items-center">
            <Link to={`/blog-details/${_id}`}>
              <button className="flex items-center gap-1 cursor-pointer select-none  text-center align-middle text-lg font-semibold leading-normal text-blue-300 no-underline">
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
