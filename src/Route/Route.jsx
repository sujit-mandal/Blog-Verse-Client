import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Addblog from "../Pages/Addblog";

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
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default route;
