// import toast from "react-hot-toast";

const Addblog = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const carImage = form.carImg.value;
    const carName = form.carName.value;
    const carBrand = form.brand.value;
    const carType = form.type.value;
    const carPrice = form.carPrice.value;
    const carDescription = form.description.value;
    const carRating = form.rating.value;
    const carInfo = {
      carImage,
      carName,
      carBrand,
      carType,
      carPrice,
      carDescription,
      carRating,
    };
    fetch(
      "https://ph-brand-shop-assignment-server-f0np7f9b2-sujit-mandal.vercel.app/car",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(carInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //   toast.success("Item added successfully");
        }
      });
    form.reset();
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
            <option value="">Select a brand</option>
            {blogCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
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
