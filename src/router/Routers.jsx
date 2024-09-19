import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Courses, Pay } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" index element={<About />} />
      <Route path="/contact" index element={<Contact />} />
      <Route path="/courses" index element={<Courses />} />
      <Route path="/pay/:course" index element={<Pay />} />
    </Routes>
  );
};

export default Routers;
