import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Card = ({ img, text, title, link }) => {
  return (
    <div className="bg-hover shadow-lg overflow-hidden rounded-md">
      {/* Image Section */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="px-4 py-6 sm:px-6 sm:py-8 md:py-10">
        <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] text-primary leading-[24px] sm:leading-[28px] md:leading-[32px] mb-2 sm:mb-3">
          {title}
        </h2>
        <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-3 sm:mb-4 md:mb-6">
          {text}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center gap-1">
          <Link
            to={link}
            aria-label="Learn more"
            className="relative font-bold text-[14px] sm:text-[16px] md:text-[18px] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:border-b-2 after:border-alternate after:transition-all after:duration-300 hover:after:w-[40%]"
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
