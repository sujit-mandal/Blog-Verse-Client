import BlogCard from "../Components/BlogCard/BlogCard";

const Allblog = () => {
  const blogCategories = [
    "Tech and Gadgets",
    "Travel and Explore",
    "Food Adventures",
    "Health & Fitness",
    "Self Improvement",
    "Fashion & Style",
    "Home Decoration",
    "Parenting Tips",
    "Finance & Money",
    "Wellness & Care",
    "Pop Culture",
    "DIY Projects",
    "Book Reviews",
    "Eco-Friendly",
    "Business Insights",
    "Gaming World",
    "Learning Hub",
    "Sports & More",
    "Mental Wellness",
    "Science & Tech",
  ];
  return (
    <div>
      <div>
        <div className="mx-auto mt-5 w-screen max-w-screen-md leading-6">
          <form className="relative flex w-full flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0">
            <div className="flex">
              <label className="focus-within:ring h-14 rounded-md bg-gray-200 px-2 ring-emerald-200">
                <select
                  className="bg-transparent px-6 py-4 outline-none"
                  name="category"
                  id="category"
                >
                  <option value="All">All</option>
                  {blogCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <input
                type="name"
                name="search"
                value="Search by blog title..."
                className="ml-1 h-14 w-full cursor-text rounded-md border py-4 pl-6 outline-none ring-emerald-200 sm:border-0 sm:pr-40 sm:pl-12 focus:ring"
                placeholder="City, Address, Zip :"
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
      <BlogCard></BlogCard>
    </div>
  );
};

export default Allblog;
