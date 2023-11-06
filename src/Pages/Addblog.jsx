// import toast from "react-hot-toast";

import { capitalizeWords } from "../Utilitis/Capitalize";

const Addblog = () => {
  const blogCategories = [
    "tech-and-gadgets",
    "travel-and-explore",
    "food-adventures",
    "health-&-fitness",
    "self-improvement",
    "fashion-&-style",
    "home-decoration",
    "parenting-tips",
    "finance-&-money",
    "diy-projects",
    "book-reviews",
    "eco-friendly",
    "business-insights",
    "gaming-world",
    "sports-&-more",
    "mental-wellness",
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
      addedTime: new Date(),
      
    };

    console.log(blogData)
    fetch(
      "http://localhost:5000/api/v1/create-new-blog",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blogData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //   toast.success("Item added successfully");
          console.log(data);
        }
      });
    // form.reset();
  };
  return (
    <div className="bg-[#435C70] m-10 p-5 text-white w-full md:w-2/3 mx-auto">
      <h3 className="text-3xl pb-4">Add a New Blog</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <label>Blog Title</label>
            <input
              type="text"
              name="blogTitle"
              className="block w-full bg-[#54657D] focus:bg-[#6f85a4] p-3 "
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label>Blog Image URL</label>
          <input
            type="text"
            name="blogImg"
            className="block w-full bg-[#54657D] focus:bg-[#6f85a4] p-3 "
            required
          />
        </div>

        <div className="flex-1 space-y-2">
          <label>Blog Category</label>
          <select
            className="block bg-[#54657D]  focus:bg-[#6f85a4] p-3 w-full"
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
            className="block  bg-[#54657D] focus:bg-[#6f85a4] p-3 w-full h-24 resize-none"
            name="shortDescription"
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label>Long Description</label>
          <textarea
            className="block  bg-[#54657D] focus:bg-[#6f85a4] p-3 w-full h-24 resize-none"
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
    </div>
  );
};

export default Addblog;
