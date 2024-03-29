import { useState } from "react";
import TopPostCard from "../Components/BlogCard/TopPostCard";
import { useQuery } from "@tanstack/react-query";
import { capitalizeWords } from "../Utilitis/Capitalize";
import { motion } from "framer-motion";
import Spinner from "../Components/Spinner/Spinner";

const Allblog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
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
    console.log("Search button clicked.");
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearchValue(searchText);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allBlogData", selectedCategory, searchValue],
    queryFn: async () => {
      const res = await fetch(
        `https://blogverse-server.vercel.app/api/v1/all-blogs?category=${selectedCategory}&q=${searchValue}`
      );
      return res.json();
    },
  });
  if (isLoading) {
    <Spinner/>
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}>
      <div>
        <div className="mx-auto mt-5 w-screen max-w-screen-md leading-6">
          <form
            onSubmit={handleSubmit}
            className="relative flex w-full flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0"
          >
            <div className="flex gap-5">
              <label className="focus-within:ring h-14 rounded-md bg-gray-200 px-2 ring-emerald-200">
                <select
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent px-6 py-4 outline-none"
                  name="category"
                  id="category"
                >
                  <option disabled selected>
                    Choose One
                  </option>
                  {blogCategories.map((category) => (
                    <option key={category} value={category}>
                      {capitalizeWords(category)}
                    </option>
                  ))}
                </select>
              </label>
              <input
                type="name"
                name="search"
                className="ml-1 h-14 w-full cursor-text rounded-md border py-4 pl-6 outline-none ring-emerald-200 sm:border-0 sm:pr-40 sm:pl-12 focus:ring"
                placeholder="Search by blog title..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-emerald-500 px-10 text-center align-middle text-base font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((blog) => (
          <TopPostCard key={blog._id} blog={blog}></TopPostCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Allblog;
