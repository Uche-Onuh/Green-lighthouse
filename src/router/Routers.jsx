import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default Routers;
