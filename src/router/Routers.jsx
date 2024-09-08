import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Courses } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" index element={<About />} />
      <Route path="/contact" index element={<Contact />} />
      <Route path="/courses" index element={<Courses />} />
    </Routes>
  );
};

export default Routers;
