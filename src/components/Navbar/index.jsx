import React from "react";
import { logo } from "../../assets";
import { navLinks, socials } from "../../constants";
import { NavLink, useNavigate, Link } from "react-router-dom";

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
          <li
            key={link.id}
            className="text-[16px] leading-8 uppercase font-bold text-primary"
          >
            <NavLink to={link.path}>{link.display}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-8">
        {socials.map((social) => (
          <div key={social.id} className="text-[25px]">
            <Link className="" to={social.to}>
              <social.icon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
