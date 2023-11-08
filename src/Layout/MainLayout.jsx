import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className = "max-w-screen-xl mx-auto">
      <Toaster/>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
