import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";

const Featuredblogs = () => {
  const handleButtonClick = (row) => {
    console.log("Button clicked for row:", row);
  };
  const columns = [
    {
      name: "Serial No",
      selector: (row, index) => index + 1, // Add a "Serial No" column
      sortable: false, // To make it non-sortable
      width: "120px",
    },
    {
      name: "Blog Title",
      selector: (row) => row.title,
    },
    {
      name: "Short Description",
      selector: (row) => row.shortDescription,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          style={{
            backgroundColor: "blue", // Customize button background color
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
        fontSize: "14px", // Customize cell font size
      },
    },
  };

  const { data } = useQuery({
    queryKey: ["blogdata"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/featured-blogs");
      return res.json();
    },
  });
  console.log(data);
  return (
    <div>
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Featured Blog
      </h1>

      {<DataTable columns={columns} data={data} customStyles={customStyles} />}
    </div>
  );
};

export default Featuredblogs;
