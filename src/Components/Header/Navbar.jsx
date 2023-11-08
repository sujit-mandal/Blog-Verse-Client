import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Navbar.css";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div>
      <nav className=" block w-full rounded-xl rounded-b-none border bg-opacity-80 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 ">
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
                to="/featured-blogs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Featured Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist-blogs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Wishlist
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center">
            {user && (
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-2"
                  src={user?.photoURL}
                  alt="user photo"
                />
              </div>
            )}

            {user ? (
              <button
                onClick={() => handleLogOut()}
                className="middle none center rounded-lg bg-gradient-to-tr from-[#10B981] to-[#078d60] py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/80 transition-all hover:shadow-lg hover:shadow-green-500/50 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
              >
                <span>Logout</span>
              </button>
            ) : (
              <div>
                <button className="px-3 py-1 border-gray-300 border-[1px] rounded-lg mr-3 ">
                  Sign Up
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="px-3 py-1 bg-black text-white rounded-lg"
                >
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
