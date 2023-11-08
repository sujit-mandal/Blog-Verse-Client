
import { useSwiper } from 'swiper/react';
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

const SwiperSlider = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-between  '>
            <button className='bg-black ml-3 md:ml-0 text-white text-xl rounded-full cursor-pointer px-3 py-3 absolute left-2 top-1/2 z-50' onClick={()=> swiper.slidePrev()}><BsCaretLeft></BsCaretLeft></button>
            <button className='bg-black mr-3 md:mr-0 text-white text-xl rounded-full cursor-pointer px-3 py-3 absolute right-2 top-1/2 z-50 ' onClick={()=> swiper.slideNext()}><BsCaretRight></BsCaretRight></button>
        </div>
    );
};

export default SwiperSlider;