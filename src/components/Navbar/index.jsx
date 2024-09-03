import React from "react";
import { logo } from "../../assets";
import { navLinks, socials } from "../../constants";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      {/* Logo Section */}
      <div className="w-[85px] h-auto">
        <NavLink to="/" aria-label="Home">
          <img src={logo} alt="Green lighthouse" className="w-full h-full" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center justify-center gap-8 md:gap-20">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-[14px] md:text-[16px] leading-8 uppercase font-bold text-primary"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "hover:text-secondary transition-colors"
              }
            >
              {link.display}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4 md:gap-8">
        {socials.map((social) => (
          <div key={social.id} className="text-[20px] md:text-[25px]">
            <Link
              to={social.to}
              aria-label={social.name}
              className="text-primary hover:text-secondary transition-colors"
            >
              <social.icon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
