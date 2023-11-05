import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Addblog from "../Pages/Addblog";
import Allblog from "../Pages/Allblog";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/api/v1/recent-blogs'),
      },
      {
        path: "/add-new-blog",
        element: <Addblog></Addblog>,
      },
      {
        path: "/all-blog-posts",
        element: <Allblog></Allblog>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default route;