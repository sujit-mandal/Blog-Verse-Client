import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactPlayer from "react-player";

// Render a YouTube video player

const Videosection = () => {
  return (
    <div className=" bg-[#10B981] pb-2">
      <div className="flex flex-col md:flex-row items-center justify-between  p-5 md:p-8 lg:px-10 lg:py-8 max-w-6xl mx-auto ">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          IMAGE GALLERY
        </h1>

        <Link>
          <p className="text-white underline flex gap-2 items-center">
            SEE ALL IMAGES <AiOutlineArrowRight></AiOutlineArrowRight>
          </p>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-11/12 mx-auto">
        <div className="">
          <img
            className="rounded-md"
            src="https://i.ibb.co/P988Lmc/image-2.jpg"
          />
        </div>
        <div>
          <img
            className="rounded-md"
            src="https://i.ibb.co/3T1vQPz/image-3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Videosection;
