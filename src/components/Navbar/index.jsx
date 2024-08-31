import React from "react";
import { logo } from "../../assets";
import { navLinks } from "../../constants";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="w-[85px] h-auto">
        <NavLink to="/">
          <img src={logo} alt="Green lighthouse" className="w-full h-full" />
        </NavLink>
      </div>
      <ul className="flex items-center justify-center gap-20">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.display}</NavLink>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
