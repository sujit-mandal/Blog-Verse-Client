import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toggleDropdown from "../Utilitis/DropdownComment";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();

  const getData = async () => {
    const blog = await fetch(
      `http://localhost:5000/api/v1/blog-details/${params.id}`
    ).then((res) => res.json());
    const comment = await fetch(
            `http://localhost:5000/api/v1/comment/${params.id}`
          ).then(res=> res.json());

    return {blog, comment}
  };

  // console.log(getData);
  const { data, isLoading } = useQuery({
    queryKey: ["blogDetails", params.id], 
    queryFn: getData,
  });

  const {blog, comment} =data || {};
  console.log(blog, comment);

  // const { data: comment, isLoading } = useQuery({
  //   queryKey: ["comment", params.id], // A unique query key
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/api/v1/comment/${params.id}`
  //     );
  //     return res.json();
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const commentData = {
      comment,
      userName: user?.displayName,
      userMail: user?.email,
      userPhoto: user?.photoURL,
      postID: params?.id,
    };

    fetch("http://localhost:5000/api/v1/add-blog-comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item added successfully");
          console.log(data);
        }
      });
  };

  console.log(params);
  // console.log(blog);
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 mx-auto w-full max-w-2xl">
      <div className="flex justify-between px-4  ">
        <article className=" format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src=""
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Jese Leos
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator & CEO Flowbite
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400"></p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {blog?.title}
            </h1>
            <p>{blog?.shortDescription}</p>
            <img src={blog?.blogImage} />
            <p>{blog?.longDescription}</p>
          </header>
        </article>
      </div>

      <section className="not-format">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>
            <div className="relative">
              <button
                id="dropdownCommentButton"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
                onClick={() => toggleDropdown("dropdownComment")}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                id="dropdownComment"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0"
              >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          <p>
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
      </section>
    </div>
  );
};

export default BlogDetails;
