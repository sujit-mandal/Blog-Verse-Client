import { useContext } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const SocialLogin = () => {
  const { GoogleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        const user = result.user;
        toast.success("User Logged In.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="m-2">
      <div className="flex items-center gap-3 ">
        <hr className="w-1/2 border-[1px] border-primary-color" />
        <div className="text-white">OR</div>
        <hr className="w-1/2 border-[1px] border-primary-color" />
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="bg-[#F5A623] hover:bg-[#e79044] flex items-center mx-auto mt-3 text-white text-lg py-3 w-fit px-4 rounded-3xl"
      >
        <AiOutlineGoogle className="text-4xl"></AiOutlineGoogle>Login with
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
