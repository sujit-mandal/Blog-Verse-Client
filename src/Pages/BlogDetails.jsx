import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Comment from "../Components/Comment/Comment";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();

  const getData = async () => {
    const blog = await fetch(
      `http://localhost:5000/api/v1/blog-details/${params.id}`
    ).then((res) => res.json());
    const comments = await fetch(
      `http://localhost:5000/api/v1/comment/${params.id}`
    ).then((res) => res.json());

    return { blog, comments };
  };

  // console.log(getData);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["blogDetails", params.id],
    queryFn: getData,
  });

  const { blog, comments } = data || {};
  // console.log(blog, comment);

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
    const commentText = e.target.comment.value;
    const commentData = {
      commentText,
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
          refetch();
        }
      });
  };
  const handleRemove = (id) => {
    fetch(`http://localhost:5000/api/v1/delete-comment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
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
      </section>
      {comments?.map((comment) => (
        <Comment
          key={comment._id}
          comment={comment}
          handleRemove={handleRemove}
        ></Comment>
      ))}
    </div>
  );
};

export default BlogDetails;
