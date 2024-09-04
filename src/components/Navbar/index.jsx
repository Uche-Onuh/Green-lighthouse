import React, { useState } from "react";
import { logo } from "../../assets";
import { navLinks, socials } from "../../constants";
import { NavLink, Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center py-4 relative">
      {/* Logo Section */}
      <div className="w-[85px] h-auto">
        <NavLink to="/" aria-label="Home">
          <img src={logo} alt="Green lighthouse" className="w-full h-full" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center justify-center gap-8 md:gap-20">
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
      <div className="hidden md:flex justify-center items-center gap-4 md:gap-8">
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

      {/* Mobile Menu Icon */}
      <div
        className={`block md:hidden text-[30px] cursor-pointer ${
          toggle ? "text-[red]" : "text-primary"
        } hover:text-secondary font-bold`}
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle();
          }
        }}
        aria-expanded={toggle}
        aria-controls="mobile-menu"
      >
        {toggle ? <IoMdClose /> : <CiMenuFries />}
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          toggle
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        } transform transition-transform duration-300 ease-in-out absolute top-[100%] bg-hover w-[50%] left-[50%] z-10 origin-top`}
      >
        <ul className="flex flex-col items-start justify-start gap-8 md:gap-20 py-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className=" px-4 text-[14px] leading-8 uppercase font-bold text-primary"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "hover:text-secondary transition-colors"
                }
                onClick={handleToggle}
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
