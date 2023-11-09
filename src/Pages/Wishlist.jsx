import WishlistCard from "../Components/WishlistCard/WishlistCard";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishlistData"],
    queryFn: async () => {
      const res = await fetch(
        `https://ph-blog-site-assignment-server.vercel.app/api/v1/wishlist?email=${user?.email}`,
        { credentials: "include" }
      );
      return res.json();
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(blogs);

  const handleRemove = (id) => {
    fetch(
      `https://ph-blog-site-assignment-server.vercel.app/api/v1/remove-wishlist/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Post successfully removed from wishlist.");
      });
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}>
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Read on Later..
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog) => (
          <WishlistCard
            key={blog._id}
            blog={blog}
            handleRemove={handleRemove}
          ></WishlistCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Wishlist;
