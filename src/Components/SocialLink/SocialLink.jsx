import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="">
      <h5 className="text-4xl font-semibold mb-5">Social Link</h5>
      <div className="flex items-center justify-between text-lg text-white w-3/4">
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
  );
};

export default SocialLink;
