import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Card = ({ img, text, title, link }) => {
  return (
    <div className="bg-hover shadow-lg overflow-hidden">
      <div className="w-full h-[300px]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="px-6 py-10">
        <h2 className="font-bold text-[20px] md:text-[24px] text-primary leading-[28px] md:leading-[32px] mb-3">
          {title}
        </h2>
        <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-4 md:mb-6">
          {text}
        </p>

        <div className="flex items-center gap-1">
          <Link
            to={link}
            aria-label="Learn more"
            className="relative font-bold text-[16px] md:text-[18px] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:border-b-2 after:border-alternate after:transition-all after:duration-300 hover:after:w-[40%]"
          >
            Learn more
          </Link>
          <FaChevronRight aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Card;
