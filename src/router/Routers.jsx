import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Courses, Pay, Success, Cancel } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about-us" index element={<About />} />
      <Route path="/contact" index element={<Contact />} />
      <Route path="/courses" index element={<Courses />} />
      <Route path="/success" index element={<Success />} />
      <Route path="/cancel" index element={<Cancel />} />
      <Route path="/pay/:course" index element={<Pay />} />
    </Routes>
  );
};

export default Routers;
