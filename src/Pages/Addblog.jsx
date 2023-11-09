import toast from "react-hot-toast";

import { capitalizeWords } from "../Utilitis/Capitalize";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
const Addblog = () => {
  const { user } = useContext(AuthContext);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.blogTitle.value;
    const blogImage = form.blogImg.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;

    const blogData = {
      title,
      blogImage,
      category,
      shortDescription,
      longDescription,
      userName: user?.displayName,
      userMail: user?.email,
      userPhoto: user?.photoURL,
    };

    console.log(blogData);
    fetch("https://ph-blog-site-assignment-server.vercel.app/api/v1/create-new-blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item added successfully");
          console.log(data);
        }
      });
    // form.reset();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="bg-[#10B981] m-10 p-5 text-white w-full md:w-2/3 mx-auto"
    >
      <h3 className="text-3xl pb-4">Add a New Blog</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <label>Blog Title</label>
            <input
              type="text"
              name="blogTitle"
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
            className="block w-full bg-[#2de0a5] focus:bg-[#179b6f] p-3 "
            required
          />
        </div>

        <div className="flex-1 space-y-2">
          <label>Blog Category</label>
          <select
            className="block bg-[#2de0a5]  focus:bg-[#179b6f] p-3 w-full"
            name="category"
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
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label>Long Description</label>
          <textarea
            className="block  bg-[#2de0a5] focus:bg-[#179b6f] p-3 w-full h-24 resize-none"
            name="longDescription"
            required
          ></textarea>
        </div>

        <input
          className="bg-[#F5A623] w-full mt-5 py-3 text-lg font-medium cursor-pointer text-white"
          type="submit"
          value="ADD BLOG NOW"
        />
      </form>
    </motion.div>
  );
};

export default Addblog;
