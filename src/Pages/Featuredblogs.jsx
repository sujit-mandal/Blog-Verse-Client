import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Featuredblogs = () => {
  const navigate = useNavigate();
  const handleButtonClick = (row) => {
    navigate(`/blog-details/${row?._id}`);
  };
  const columns = [
    {
      name: "Serial No",
      selector: (row, index) => index + 1, // Add a "Serial No" column
      sortable: false, // To make it non-sortable
      width: "105px",
    },
    {
      name: "Blog Title",
      selector: (row) => row.title,
      width: "400px",
    },
    {
      name: "Short Description",
      selector: (row) => row.shortDescription,
      width: "300px",
    },
    {
      name: "User",
      selector: (row) => row.userName,
      width: "120px",
    },
    {
      name: "User Profile",
      selector: (row) => (
        <img src={row.userPhoto} className="w-10 h-10 rounded-full mx-auto" />
      ),
      width: "120px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          style={{
            backgroundColor: "#10B981", // Customize button background color
            color: "white", // Customize button text color
            padding: "5px 10px", // Customize button padding
            borderRadius: "5px", // Customize button border radius
            cursor: "pointer", // Add a pointer cursor on hover
          }}
          onClick={() => handleButtonClick(row)}
        >
          View
        </button>
      ),
      width: "120px",
    },
  ];

  const customStyles = {
    head: {
      style: {
        backgroundColor: "lightblue", // Customize header background color
        fontWeight: "bold", // Customize header font weight
        fontSize: "16px", // Customize header font size
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        height: "40px",
      },
    },
  };

  const { data } = useQuery({
    queryKey: ["featuredBlogData"],
    queryFn: async () => {
      const res = await fetch("https://ph-blog-site-assignment-server.vercel.app/api/v1/featured-blogs");
      return res.json();
    },
  });
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}>
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Featured Blog
      </h1>

      {<DataTable columns={columns} data={data} customStyles={customStyles} />}
    </motion.div>
  );
};

export default Featuredblogs;
