import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className=" block w-full rounded-xl border bg-opacity-80 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 ">
        <div className="container space-y-4 md:space-y-0 mx-auto flex flex-col md:flex-row items-center justify-between text-black">
          <Link>
            <img src={logo} alt="" className="w-36 h-16" />
          </Link>
          <ul className="items-center gap-6 flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-new-blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Add Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-blog-posts"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                All Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Featured Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center">
            <button className="px-3 py-1 border-gray-300 border-[1px] rounded-lg mr-3 ">
              Sign Up
            </button>
            <button className="px-3 py-1 bg-black text-white rounded-lg">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
