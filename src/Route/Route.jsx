import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Addblog from "../Pages/Addblog";
import Allblog from "../Pages/Allblog";
import ErrorPage from "../Pages/ErrorPage";
import Featuredblogs from "../Pages/Featuredblogs";
import Wishlist from "../Pages/Wishlist";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";
import SeeAllCard from "../Components/BlogCard/SeeAllCard";
import Contact from "../Pages/Contact";

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
        path: "/see-all-posts",
        element: <SeeAllCard></SeeAllCard>,
      },
      {
        path: "/featured-blogs",
        element: <Featuredblogs></Featuredblogs>,
      },
      {
        path: "/wishlist-blogs",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/update-blog/:id",
        element: <UpdateBlog></UpdateBlog>,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default route;
