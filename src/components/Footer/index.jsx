import React from "react";
import { footerLinks, socials } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-b-hover text-white py-10 md:py-14 gap-8 md:gap-4">
        {/* Contact Section */}
        <div className="flex flex-col items-start justify-center gap-3 mb-6 md:mb-0 w-full md:w-1/2">
          <h2 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-4 md:mb-6 uppercase">
            Contact
          </h2>
          <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] mb-2">
            P.O Box 5847, Naperville, IL 60567
          </p>
          <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] mb-2">
            Phone: 1-630-923-1323
          </p>
          <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] mb-2">
            Email: hello@greenlighthouse.co
          </p>
          <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] mb-4">
            Hours: 9:00 am – 5:00 pm CST, Monday – Friday
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-start items-center gap-6">
            {socials.map((social) => (
              <div key={social.id} className="text-[24px] md:text-[28px]">
                <Link
                  to={social.to}
                  aria-label={social.name}
                  className="text-white hover:text-secondary transition-colors"
                >
                  <social.icon />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-1/2">
          {footerLinks.map((col) => (
            <div key={col.title} className="w-full">
              <h2 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-4 md:mb-6 uppercase">
                {col.title}
              </h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] hover:text-secondary transition-colors"
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-white mt-6 md:mt-4 flex flex-col md:flex-row justify-between items-center text-[14px] md:text-[16px] gap-4 md:gap-0">
        <p className="font-normal text-center md:text-left">
          Copyright © {currentYear} Green Lighthouse. All rights reserved.
        </p>
        <Link
          to="/"
          className="font-semibold hover:text-secondary transition-colors"
          aria-label="Website designed by Chase Media"
        >
          Website by Chase Media
        </Link>
      </div>
    </>
  );
};

export default Footer;
