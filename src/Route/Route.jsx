import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Addblog from "../Pages/Addblog";
import Allblog from "../Pages/Allblog";
import Featuredblogs from "../Pages/Featuredblogs";
import Wishlist from "../Pages/Wishlist";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-new-blog",
        element: <Addblog></Addblog>,
      },
      {
        path: "/all-blog-posts",
        element: <Allblog></Allblog>,
      },
      {
        path: "/featured-blogs",
        element: <Featuredblogs></Featuredblogs>,
      },
      {
        path: "/wishlist-blogs",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>,
          </PrivateRoute>
        ),
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/update-blog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default route;
