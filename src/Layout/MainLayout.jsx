import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import Topnav from "../Components/Header/Topnav";

const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Toaster />
      <Topnav />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
