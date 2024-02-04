import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div>
            <div className="border-2 border-gray-200 p-10">
          <label>
            <input
              type="search"
              className="py-5 px-6 bg-gray-100"
              placeholder="Search …"
              value=""
              name="s"
            />
          </label>
          <button className="inset-0 p-5 text-center bg-[#C5015F] text-white">
            Search
          </button>
        </div>
        <div className="border-2 border-gray-200 p-10 mt-10">
          <p className="text-2xl font-bold border-l-4 border-[#C5015F] pl-5 mb-5">
            Follow Us
          </p>
          <div className="flex items-center justify-between text-lg text-white ">
            <div className="p-4 bg-[#3B5998] rounded-full hover:bg-[#C5015F]">
              <FaFacebookF />
            </div>
            <div className="p-4 bg-[#C32AA3] rounded-full hover:bg-[#C5015F]">
              <FaInstagram />
            </div>
            <div className="p-4 bg-[#07ACDE] rounded-full hover:bg-[#C5015F]">
              <IoLogoTwitter />
            </div>
            <div className="p-4 bg-[#C8232C] rounded-full hover:bg-[#C5015F]">
              <FaPinterestP />
            </div>
            <div className="p-4 bg-[#0E76A8] rounded-full hover:bg-[#C5015F]">
              <FaLinkedin />
            </div>
            <div className="p-4 bg-[#E52D27] rounded-full hover:bg-[#C5015F]">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 p-10 mt-10">
          <p className="text-2xl font-bold border-l-4 border-[#C5015F] pl-5">
            Categories
          </p>
          <div className="flex items-center justify-between mt-5 group hover:text-[#C5015F]">
            <p className="group-hover:transition group-hover:duration-300 group-hover:translate-x-5">
              EDUCATION
            </p>
            <p>(3)</p>
          </div>
        </div>
        <div className="border-2 border-gray-200 p-10 mt-10">
          <p className="text-2xl font-bold border-l-4 border-[#C5015F] pl-5">
            Recent Posts
          </p>
          <div className="mt-5 group hover:text-[#C5015F]">
            <p className="hover:transition hover:duration-300 hover:translate-x-5">
              Guide the world best city of honour
            </p>
            <hr />
          </div>
        </div>
        <div className="border-2 border-gray-200 p-10 mt-10">
          <p className="text-2xl font-bold border-l-4 border-[#C5015F] pl-5">
            Tags
          </p>
          <div className="mt-5  flex flex-wrap gap-2">
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              Blog
            </p>
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              Collage
            </p>
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              Tour
            </p>
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              Education
            </p>
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              School
            </p>
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              Travel
            </p>
            <p className="hover:transition hover:duration-300 hover:border-[2px] hover:border-[#C5015F] border-[1px] px-5 py-2">
              Word
            </p>
          </div>
        </div>
        </div>
    );
};

export default Sidebar;