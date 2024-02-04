import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/News-Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const navItems = [
    {
      Name: "Home",
      path: "/",
    },
    {
      Name: "Life Style",
      path: "/see-all-posts",
    },
    {
      Name: "Travel",
      path: "/see-all-posts",
    },
    {
      Name: "Fitness",
      path: "/see-all-posts",
    },
    {
      Name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div>
      <nav className=" block max-w-screen-xl mx-auto py-5 text-black">
        <div className="container space-y-4 md:space-y-0 mx-auto flex flex-col md:flex-row items-center justify-between text-black">
          <Link>
            <div className="flex items-center">
              <img src={logo} alt="" className="w-20 h-12" />
              <p className="text-3xl font-bold">Blogverse</p>
            </div>
          </Link>
          <ul className="items-center gap-3 flex">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-baseline gap-2 hover:text-[#C5015F]"
              >
                <span className="p-[3px] rounded-full bg-[#C5015F]"></span>
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {item.Name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to={'/login'}><button className="px-5 py-1 border-[1px] border-[#002584] rounded-md hover:bg-[#002584] hover:text-white">Log in </button></Link>
          <div className="flex items-center gap-5">
            <div className="p-3 bg-[#E1E1E1] rounded-full hover:bg-[#002584] text-[#002584] hover:text-white transition ease-in-out delay-100">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-[#E1E1E1] rounded-full hover:bg-[#002584] text-[#002584] hover:text-white transition ease-in-out delay-100">
              <FaTwitter />
            </div>
            <div className="p-3 bg-[#E1E1E1] rounded-full hover:bg-[#002584] text-[#002584] hover:text-white transition ease-in-out delay-100">
              <FaSearch />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
