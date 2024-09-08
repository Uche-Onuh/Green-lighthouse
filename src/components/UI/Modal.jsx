import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ onClose, course }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="relative bg-white p-6 rounded-md shadow-md max-w-[90%] md:max-w-[50%] w-full max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-[red] hover:text-black focus:outline-none"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <IoMdClose size={40} />
        </button>
        <div className="w-full h-[300px] my-10">
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-[24px] md:text-[30px] font-bold mb-4">
          {course.title}
        </h2>
        <p className="mb-4">{course.text}</p>
        <p className="mb-4">{course.extra}</p>
        {/* Add more details as needed */}
        <button className="bg-alternate text-white py-1 px-2 md:py-2 md:px-4 text-[12px] sm:text-[14px] md:text-[16px] hover:bg-hover hover:text-primary uppercase inline-block transition-colors duration-300">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default Modal;
