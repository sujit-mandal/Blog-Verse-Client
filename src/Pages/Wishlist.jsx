import WishlistCard from "../Components/WishlistCard/WishlistCard";
// import BlogCard from "../Components/BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Wishlist = () => {
  // const blogData = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["wishlistData"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/wishlist?email=${user?.email}`
      );
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(blogs);

  const handleRemove = (id) => {
    fetch(`http://localhost:5000/api/v1/remove-wishlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
 
  return (
    <div>
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Read on Later..
      </h1>
      <div className="grid grid-cols-3">
        {blogs?.map((blog) => (
          <WishlistCard key={blog._id} blog={blog} handleRemove={handleRemove}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
