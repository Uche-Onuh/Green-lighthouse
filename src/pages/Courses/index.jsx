import React, { useState, useEffect, useCallback } from "react";
import { Helmet, Container, Header, Card, Modal } from "../../components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { testimonial, courses } from "../../constants";

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? testimonial.length - 1 : currentIndex - 1);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === testimonial.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  }, [currentIndex]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    if (testimonial.length === 0) return;
    const interval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [nextSlide, testimonial.length]);

  // Function to handle opening the modal
  const handleSeeMore = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <Helmet title="Our Courses">
      <Header
        title="Our Courses"
        bgImage="bg-coursesbg"
        paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem ipsa totam dolores! Sit maxime veniam cumque atque excepturi quia ab,`}
      />

      <section className="w-full py-10 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Heading Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h1 className="font-bold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[60px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30%] after:border-b-4 after:border-alternate">
                Our Product & Methodology
              </h1>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] mb-4 sm:mb-6 md:mb-10">
                Your custom heading text goes here. Replace this placeholder to
                align with your content.
              </h2>

              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Replace with relevant text content. This could include
                highlights of the features or benefits.
              </p>

              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Add more information or supportive text that enhances your main
                message.
              </p>

              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-6 md:mb-10">
                Continue to add compelling content that resonates with your
                audience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full h-[50vh] bg-primary py-10 relative group">
        <Container>
          <h2 className="text-center mx-auto font-bold text-white text-[24px] sm:text-[30px] md:text-[38px] lg:text-[30px relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Testimonials
          </h2>

          {testimonial.length > 0 && (
            <div className="text-white md:px-10 text-center md:py-8">
              <div className="mb-6 flex">
                <div className="text-[22px] md:text-[40px] text-alternate">
                  <RiDoubleQuotesL />
                </div>
                <h3 className="text-[18px] md:text-[24px] ">
                  {testimonial[currentIndex].text}
                </h3>
                <div className="text-[22px] md:text-[40px]  text-alternate">
                  <RiDoubleQuotesR />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] mb-3 capitalize">
                Course ~ {testimonial[currentIndex].course}
              </p>
              <small className="text-[10px] md:text-[14px] capitalize">
                {testimonial[currentIndex].location}
              </small>
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            aria-label="Previous Slide"
            className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-tertiary"
            onClick={prevSlide}
          >
            <IoIosArrowBack size={25} />
          </button>
          <button
            aria-label="Next Slide"
            className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-tertiary"
            onClick={nextSlide}
          >
            <IoIosArrowForward size={25} />
          </button>

          {/* Dot Indicators */}
          <div className="flex top-[90%] justify-center py-2 z-5 absolute left-[50%] -translate-x-[50%]">
            {testimonial.map((slide, i) => (
              <div
                className={`text-2xl cursor-pointer ${
                  currentIndex === i ? "text-alternate" : "text-white"
                }`}
                onClick={() => goToSlide(i)}
                key={slide.id}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-10 md:py-20 bg-coursebg bg-no-repeat bg-cover bg-top">
        <Container>
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-primary text-center font-bold leading-[36px] sm:leading-[44px] md:leading-[48px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] md:after:bottom-[-10px] after:-translate-x-1/2 after:w-[10%] after:border-b-4 after:border-alternate">
              Our Courses
            </h1>
          </div>

          {/* Courses Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-5">
            {courses.map((course) => (
              <Card
                {...course}
                key={course.id}
                onSeeMore={() => handleSeeMore(course)} // Pass the function and course data
              />
            ))}
          </div>
        </Container>
        {/* Modal Component */}
        {isModalOpen && selectedCourse && (
          <Modal onClose={handleCloseModal} course={selectedCourse} />
        )}
      </section>
    </Helmet>
  );
};

export default Courses;
