import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" index element={<About />} />
      <Route path="/contact" index element={<Contact />} />
    </Routes>
  );
};

export default Routers;
