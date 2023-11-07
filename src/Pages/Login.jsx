import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="mt-5 h-full md:h-[75vh]">
      <div className="w-full mx-auto mt-20 max-w-sm p-4 bg-[#435C70] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <h1 className="text-center bg-primary-color py-4 w-full text-white rounded-lg text-2xl font-semibold text-primary-text">
          Login your account
        </h1>
        <hr className="m-4" />
        <form onSubmit={handleLoginUser} className="space-y-2">
          <div>
            <label className="block mb-2 text-white">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className=" bg-[#54657D] border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              className=" bg-[#54657D] border text-white text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-primary-color hover:underline text-white"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#F5A623] hover:bg-[#e79044]  font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
          >
            Login
          </button>
          <div className="text-sm font-medium text-white">
            Not registered?
            <Link
              to={"/register"}
              className="text-primary-color ml-2 hover:underline"
            >
              Register your account.
            </Link>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
