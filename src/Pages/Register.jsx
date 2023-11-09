import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)
    ) {
      toast.error(
        "Password should be contain at least a Capital letter & Special character."
      );
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          toast.success("Account Created Successfully");
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              logOut()
                .then(() => {
                  navigate("/login");
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  toast.error(errorMessage);
                });
            })
            .catch((error) => {
              toast.error("Error occurred in profile updating");
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };

  return (
    <div className="mt-5 ">
      <div className="mx-auto  mb-5 w-full max-w-sm p-4 bg-[#10B981] rounded-lg shadow sm:p-6 md:p-8">
        <h1 className="text-center bg-primary-color py-4 w-full text-white rounded-lg text-2xl font-semibold text-primary-text">
          Register your account
        </h1>
        <hr className="m-4" />
        <form onSubmit={handleCreateUser} className="space-y-2 text-white">
          <div>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" bg-[#47c098] placeholder:text-black border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className=" bg-[#47c098] placeholder:text-black border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className=" bg-[#47c098] placeholder:text-black border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              className=" bg-[#47c098] placeholder:text-black border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50  "
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-white">
                Accept
              </label>
              <a
                href="#"
                className="text-sm text-[#f5f223] hover:underline ml-2"
              >
                Term & Conditions.
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#F5A623] hover:bg-[#e79044]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Register
          </button>
          <div className="text-sm font-medium text-white">
            Have Account?
            <Link
              to={"/login"}
              className="text-primary-color ml-2 hover:underline"
            >
              Login account
            </Link>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
