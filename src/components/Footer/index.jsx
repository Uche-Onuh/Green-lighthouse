import React from "react";
import { footerLinks, socials } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-wrap justify-between items-start border-b-2 border-b-hover text-white py-14">
        <div className="flex flex-col items-start justify-center gap-3 mb-6 md:mb-0">
          <h2 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-6 md:mb-10 uppercase">
            Contact
          </h2>
          <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-2 md:mb-4">
            333 Southeast 2nd Avenue - Suite 2000 - Miami, FL 33131
          </p>
          <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-2 md:mb-4">
            Phone: 1-855-498-4400
          </p>
          <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-2 md:mb-4">
            Email: pd@teachnkidslearn.com
          </p>
          <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-2 md:mb-5">
            Hours: 8:30 am – 5:30 pm, Monday – Friday (limited support evenings,
            weekends and holidays)
          </p>

          <div className="flex justify-start items-center gap-8">
            {socials.map((social) => (
              <div key={social.id} className="text-[40px]">
                <Link
                  to={social.to}
                  aria-label={social.name} // Add aria-label for accessibility
                  className="text-white hover:text-secondary transition-colors"
                >
                  <social.icon />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title} className="mb-6 md:mb-0">
            <h2 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-6 md:mb-10 uppercase">
              {col.title}
            </h2>
            <ul>
              {col.links.map((link) => (
                <li
                  key={link.name}
                  className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-2 md:mb-5 hover:text-secondary transition-colors"
                >
                  <Link to={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-white mt-4 flex justify-between items-center text-[14px] md:text-[16px]">
        <p className="font-normal">
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
