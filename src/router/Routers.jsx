import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Courses, Pay, Success, Cancel } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/pay/:course" element={<Pay />} />
    </Routes>
  );
};

export default Routers;
