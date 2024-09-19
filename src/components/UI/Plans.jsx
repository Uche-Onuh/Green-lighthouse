import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Plans = ({ title, perks, price, selected }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div
      className={`bg-primary shadow-lg overflow-hidden rounded-md py-16 pl-6 pr-32 relative cursor-pointer hover:scale-105 transition-transform duration-300 min-h-[450px] w-full ${
        selected ? "shadow-lg shadow-secondary" : ""
      }`}
    >
      <h1 className="font-bold text-[40px] leading-[30px] text-white">
        {title}
      </h1>
      <ul className="mt-4 space-y-2 py-10">
        {perks.map((perk, index) => (
          <li key={index} className="flex items-center text-[18px] text-white">
            <IoIosCheckmarkCircle className="text-white mr-2" />
            {perk}
          </li>
        ))}
      </ul>

      <h3 className="absolute bottom-5 right-5 font-bold text-[40px] leading-[30px] text-white">
        {formattedPrice}
      </h3>
    </div>
  );
};

export default Plans;
