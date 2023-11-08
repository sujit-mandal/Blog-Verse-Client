import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";
const TestimonialSlider = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center gap-1 m-3  ">
      <button
        className=" text-2xl cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <BsArrowLeft></BsArrowLeft>
      </button>
      <button
        className=" text-2xl cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <BsArrowRight></BsArrowRight>
      </button>
    </div>
  );
};

export default TestimonialSlider;
