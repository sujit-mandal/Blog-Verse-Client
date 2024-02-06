import { Link } from "react-router-dom";
import logo from "../../assets/News-Logo.png";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-gray-800 antialiased border-t-4 border-[#C5015F]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-5 py-10">
        <div className="space-y-3 text-gray-500">
          <Link>
            <div className="flex items-center">
              <img src={logo} alt="" className="w-20 h-12" />
              <p className="text-3xl font-bold">Blogverse</p>
            </div>
          </Link>
          <p>
            The most popular newspaper in the world. It includes the most
            popular news.
          </p>
          <div className="flex gap-3 items-center ">
            <FaEnvelope className="text-5xl p-3 bg-[#C5015F] text-white rounded-md" />
            <div>
              <p className="hover:text-[#C5015F]">info@blogverse.com</p>
              <p className="hover:text-[#C5015F]">help@blogverse.com</p>
            </div>
          </div>
        </div>
        <div className="text-gray-500">
          <h5 className="text-black text-2xl">Quick Links</h5>
          <div className="flex items-center gap-5 pt-4">
            <ul className="space-y-3">
              <li className="hover:text-[#C5015F] cursor-pointer">Home</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Faq</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Top News</li>
              <li className="hover:text-[#C5015F] cursor-pointer">
                Recent Blogs
              </li>
              <li className="hover:text-[#C5015F] cursor-pointer">Support</li>
            </ul>
            <ul className="space-y-3">
              <li className="hover:text-[#C5015F] cursor-pointer">
                Top Stories
              </li>
              <li className="hover:text-[#C5015F] cursor-pointer">Help</li>
              <li className="hover:text-[#C5015F] cursor-pointer">
                Featured Posts{" "}
              </li>
              <li className="hover:text-[#C5015F] cursor-pointer">
                Editor Choice
              </li>
              <li className="hover:text-[#C5015F] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="text-gray-500">
          <h5 className="text-black text-2xl">Popular Posts</h5>
          <div className="flex items-center gap-5 pt-4">
            <ul className="space-y-3">
              <li className="hover:text-[#C5015F] cursor-pointer">
                Celebrity News
              </li>
              <li className="hover:text-[#C5015F] cursor-pointer">History</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Food</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Music</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Travel</li>
            </ul>
            <ul className="space-y-3">
              <li className="hover:text-[#C5015F] cursor-pointer">Fashion</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Movies</li>
              <li className="hover:text-[#C5015F] cursor-pointer">TV News</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Education</li>
              <li className="hover:text-[#C5015F] cursor-pointer">Lifestyle</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="space-y-2">
            <img
              src="https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/44-1024x1536.jpg"
              className="w-36 h-28 rounded-md"
            />
            <img
              src="https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/p1.jpg"
              className="w-36 h-28 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <img
              src="https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/51-1024x683.jpg"
              className="w-36 h-28 rounded-md"
            />
            <img
              src="https://demo.tagdiv.com/newspaper_lifestyle_pro/wp-content/uploads/2020/06/53-1024x683.jpg"
              className="w-36 h-28 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#002584] py-2">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
          <p >Copyright © 2024 Blogverse. All rights reserved.</p>
          <div className="flex gap-2 items-center ">
            <div className="p-4 bg-[#3B5998] rounded-md hover:bg-[#C5015F]">
              <FaFacebookF />
            </div>
            <div className="p-4 bg-[#f43abcf8] rounded-md hover:bg-[#C5015F]">
              <FaInstagram />
            </div>
            <div className="p-4 bg-[#07ACDE] rounded-md hover:bg-[#C5015F]">
              <IoLogoTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
