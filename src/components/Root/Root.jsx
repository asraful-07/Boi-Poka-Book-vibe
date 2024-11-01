import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className=" container mx-auto p-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;