import React from "react";
import Routers from "../../router/Routers";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="w-full h-full bg-[#f0f0f0]">
      <nav>
        <Navbar />
      </nav>
      <div>
        <Routers />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
