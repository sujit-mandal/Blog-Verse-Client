import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Videosection = () => {
  return (
    <div className="bg-[#010E2E] py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-white text-3xl md:text-4xl font-semibold pb-10">
            IMAGE GALLERY
          </h1>

          <Link>
            <p className="text-white underline flex gap-2 items-center">
              SEE ALL IMAGES <AiOutlineArrowRight></AiOutlineArrowRight>
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-2">
            <img
              className="rounded-md"
              src="https://i.ibb.co/P988Lmc/image-2.jpg"
            />
            <img
              className="rounded-md mt-14 w-full h-auto"
              src="https://i.ibb.co/fnVWXfg/lily-banse-YHSwy6uqvk-unsplash.jpg"
            />
          </div>
          <div className="col-span-4">
            <img
              className="rounded-md"
              src="https://i.ibb.co/3T1vQPz/image-3.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
