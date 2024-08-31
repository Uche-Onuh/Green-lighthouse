import React from "react";
import Routers from "../../router/Routers";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container";

const Layout = () => {
  return (
    <div className="w-full h-full bg-[#f0f0f0]">
      <nav>
        <Container>
          <Navbar />
        </Container>
      </nav>
      <div>
        <Container>
          <Routers />
        </Container>
      </div>
      <footer>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
