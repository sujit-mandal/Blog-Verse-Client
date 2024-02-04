import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Comment from "../Components/Comment/Comment";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import Sidebar from "../Components/Sidebar/Sidebar";
import Spinner from "../Components/Spinner/Spinner";
const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();

  const getData = async () => {
    const blog = await fetch(
      `https://blogverse-server.vercel.app/api/v1/blog-details/${params.id}`,
      { credentials: "include" }
    ).then((res) => res.json());
    const comments = await fetch(
      `https://blogverse-server.vercel.app/api/v1/comment/${params.id}`,
      { credentials: "include" }
    ).then((res) => res.json());

    return { blog, comments };
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["blogDetails", params.id],
    queryFn: getData,
  });
  if (isLoading) {
    <Spinner/>
  }

  const { blog, comments } = data || {};

  // const { _id } = blog;

  const time = blog.addedTime?.split("T");
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    const commentData = {
      commentText,
      userName: user?.displayName,
      userMail: user?.email,
      userPhoto: user?.photoURL,
      postID: params?.id,
    };

    if (blog?.userMail === user?.email) {
      toast.error("You can not comment your own post");
    } else {
      fetch("https://blogverse-server.vercel.app/api/v1/add-blog-comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(commentData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Comment added successfully");
            console.log(data);
            refetch();
          }
        });
    }
    e.target.reset();
  };
  const handleRemove = (id, email) => {
    if (email === user?.email) {
      fetch(`https://blogverse-server.vercel.app/api/v1/delete-comment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Your Comment Deleted.");
          refetch();
        });
    } else {
      toast.error("You can not delete another user comment.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-5">
      <div className="col-span-2 border-[1px] border-gray-200 p-10">
        <img
          src="https://wpdemo.zcubethemes.com/newpress/wp-content/uploads/2021/04/fs-2-1024x781.jpg"
          alt=""
        />

        <p className="mt-10 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt.
        </p>

        <hr className="mt-14 mb-8" />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FaRegComment className="text-[#C5015F]"></FaRegComment>
            <p className="">No Comments</p>
          </div>
          <div className="flex items-center gap-2">
            <SlCalender className="text-[#C5015F]"></SlCalender>
            <p className="">April 5, 2023</p>
          </div>
        </div>
        <hr className="mt-8" />
        <p>Leave a Comment</p>
        <div className="bg-[#F6F6F6] rounded-xl py-16 px-12">
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form>
            <div className="mb-4 mt-2">
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="4"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="comment"
                placeholder="Enter your comment"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#C5015F] hover:bg-[#c50160e4] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogDetails;
