import React from "react";

const Header = ({ bgImage, title, paragraph }) => {
  return (
    <div
      className={`w-full h-[65vh] ${bgImage} bg-cover bg-no-repeat bg-center relative`}
    >
      <div className="md:max-w-[50%] absolute left-0 bottom-0 py-5 px-5 md:py-20 md:px-24 bg-hover">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-primary font-bold leading-tight md:leading-[65px] mb-6 md:mb-16">
          {title}
        </h1>
        <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Header;
