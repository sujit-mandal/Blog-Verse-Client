import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const BlogDetails = () => {
  //   const blog = useLoaderData();
  const params = useParams();
  const { data: blog, isLoading } = useQuery({
    queryKey: ["blogDetails", params.id], // A unique query key
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/blog-details/${params.id}`
      );
      return res.json();
    },
  });

  console.log(params);
  console.log(blog);
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
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
          </header>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
