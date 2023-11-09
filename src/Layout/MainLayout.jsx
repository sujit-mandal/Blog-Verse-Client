import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
      <ScrollRestoration />
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
