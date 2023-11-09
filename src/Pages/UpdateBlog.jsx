import toast from "react-hot-toast";
import { capitalizeWords } from "../Utilitis/Capitalize";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const params = useParams();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["blogDetailsData"],
    queryFn: async () => {
      const res = await fetch(`https://ph-blog-site-assignment-server.vercel.app/api/v1/blog/${params.id}`);
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(params);
  console.log(data);
  console.log(data[0].title)

  const { title, blogImage, category, shortDescription, longDescription } =
    data[0];
  const blogCategories = [
    "tech-and-gadgets",
    "travel-and-explore",
    "food-adventures",
    "health-&-fitness",
    "fashion-&-style",
    "home-decoration",
    "finance-&-money",
    "diy-projects",
    "book-reviews",
    "business-insights",
    "sports-&-more",
    "science-&-tech",
  ];

    const handleUpdate = (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.blogTitle.value;
      const blogImage = form.blogImg.value;
      const category = form.category.value;
      const shortDescription = form.shortDescription.value;
      const longDescription = form.longDescription.value;

      const UpdatedblogData = {
        title,
        blogImage,
        category,
        shortDescription,
        longDescription,
        userName: user?.displayName,
        userMail: user?.email,
        userPhoto: user?.photoURL,
      };

      console.log(UpdatedblogData);
      fetch(`https://ph-blog-site-assignment-server.vercel.app/api/v1/update-blog/${params.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdatedblogData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Blog Updated successfully");
          }
        });
      form.reset();
    };
  return (
    <div className="bg-[#10B981] m-10 p-5 text-white w-full md:w-2/3 mx-auto">
      <h3 className="text-3xl pb-4">Update This Blog</h3>
      <form onSubmit={handleUpdate} className="space-y-3">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <label>Blog Title</label>
            <input
              type="text"
              name="blogTitle"
              defaultValue={title}
              className="block w-full bg-[#2de0a5] focus:bg-[#179b6f] p-3 "
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label>Blog Image URL</label>
          <input
            type="text"
            name="blogImg"
            defaultValue={blogImage}
            className="block w-full bg-[#2de0a5] focus:bg-[#179b6f] p-3 "
            required
          />
        </div>

        <div className="flex-1 space-y-2">
          <label>Blog Category</label>
          <select
            className="block bg-[#2de0a5]  focus:bg-[#179b6f] p-3 w-full"
            name="category"
            defaultValue={category}
            required
          >
            <option value="">Select a Category</option>
            {blogCategories.map((category, index) => (
              <option key={index} value={category}>
                {capitalizeWords(category)}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label>Short Description</label>
          <textarea
            className="block  bg-[#2de0a5] focus:bg-[#179b6f] p-3 w-full h-24 resize-none"
            name="shortDescription"
            defaultValue={shortDescription}
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label>Long Description</label>
          <textarea
            className="block  bg-[#2de0a5] focus:bg-[#179b6f] p-3 w-full h-24 resize-none"
            name="longDescription"
            defaultValue={longDescription}
            required
          ></textarea>
        </div>

        <input
          className="bg-[#F5A623] w-full mt-5 py-3 text-lg font-medium cursor-pointer text-white"
          type="submit"
          value="UPDATE NOW"
        />
      </form>
    </div>
  );
};

export default UpdateBlog;
