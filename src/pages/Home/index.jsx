import React, { useState } from "react";
import { Helmet, Container } from "../../components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { faqs } from "../../constants";
import { courseimg } from "../../assets";
import { IoChevronDown } from "react-icons/io5";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Helmet title="Home">
      <section className="w-full h-[60vh]  md:h-[90vh] bg-herobg bg-center bg-cover bg-no-repeat relative">
        {/* Overlay */}
        <div className="bg-black opacity-30 absolute inset-0"></div>

        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center absolute inset-0 md:left-[5%] top-[50%] md:top-[40%] md:translate-y-[-40%] px-4">
            <div className="w-full md:w-[60%]">
              {/* Heading */}
              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white font-bold leading-tight md:leading-[65px] mb-6 md:mb-16">
                Empowering the Next Generation of Financial Leaders
              </h1>

              {/* Button */}
              <Link
                to=""
                aria-label="View our course catalogue"
                className="bg-alternate text-white py-3 px-6 md:py-5 md:px-8 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-hover hover:text-primary uppercase inline-block transition-colors duration-300"
              >
                View our course catalogue
              </Link>
            </div>

            {/* Placeholder for Right Side */}
            <div className="hidden md:block w-full md:w-[40%]"></div>
          </div>
        </Container>
      </section>

      <section className="w-full py-10 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Heading Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h1 className="font-bold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[60px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30%] after:border-b-4 after:border-alternate">
                Financial Learning, Reimagined
              </h1>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] mb-4 sm:mb-6 md:mb-10">
                Renewed finance education
              </h2>

              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Here at Green Lighthouse, we believe that financial literacy is
                the very foundation to a successful future.
              </p>

              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Using our platform, kids learn financial and entrepreneurial
                concepts in a gamified group class format.
              </p>

              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-6 md:mb-10">
                We make learning about money fun and meaningful with interactive
                lessons based on real-world situations.
              </p>

              {/* Link with Chevron */}
              <div className="flex items-center gap-1">
                <Link
                  to="/about"
                  aria-label="Learn more"
                  className="relative font-bold text-[14px] sm:text-[16px] md:text-[18px] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:border-b-2 after:border-alternate after:transition-all after:duration-300 hover:after:w-[40%]"
                >
                  Learn more
                </Link>
                <FaChevronRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full py-10 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-primary text-center font-bold leading-[36px] sm:leading-[44px] md:leading-[48px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] md:after:bottom-[-10px] after:-translate-x-1/2 after:w-[10%] after:border-b-4 after:border-alternate">
              Our Courses
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            {/* Heading Section */}
            <div className="w-full h-[350px] md:w-1/2 mb-6 md:mb-0">
              <img
                src={courseimg}
                alt="our courses"
                className="w-full h-[350px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 ">
              <p className="max-w-[100%] lg:max-w-[80%] font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Check out our many course offerings for kids to help get them
                prepared with the knowledge and skills needed in the financial
                world. Our range of courses, from explaining the stock market to
                moving into entrepreneurship are designed for various age groups
                and levels of learning.
              </p>

              {/* Link with Chevron */}
              <div className="flex items-center gap-1">
                <Link
                  to="/courses"
                  aria-label="Learn more"
                  className="relative font-bold text-[14px] sm:text-[16px] md:text-[18px] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:border-b-2 after:border-alternate after:transition-all after:duration-300 hover:after:w-[40%]"
                >
                  Learn more
                </Link>
                <FaChevronRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full py-16 sm:py-20 bg-faqbg bg-no-repeat bg-cover bg-top">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* FAQ Title Section */}
            <div className="w-full md:w-1/2">
              <h1 className="font-bold text-[32px] sm:text-[40px] md:text-[60px] text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30%] after:border-b-4 after:border-alternate">
                Frequently Asked Questions
              </h1>
            </div>

            {/* FAQ Items */}
            <div className="w-full md:w-1/2">
              {faqs.map((faq, i) => (
                <div
                  className="p-4 sm:p-6 md:p-8 bg-grey rounded-md mb-4"
                  key={faq.id}
                >
                  {/* Question Section */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggleAnswer(i)}
                  >
                    <p className="font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px]">
                      {i + 1}. {faq.question}
                    </p>
                    <div
                      className={`transform transition-transform duration-300 bg-alternate p-1 rounded-full ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      <IoChevronDown />
                    </div>
                  </div>

                  {/* Answer Section */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <div className="mt-3 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-alternate">
                      <p className="font-medium">{faq.reply}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full py-16 sm:py-20 bg-ctobg bg-no-repeat bg-cover bg-center">
        <Container>
          <div className="w-full sm:w-[80%] md:w-1/2 mx-auto text-center px-4">
            {/* Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] text-secondary font-bold leading-[36px] sm:leading-[48px] mb-6 sm:mb-8 md:mb-10">
              Get Started
            </h1>

            {/* Description */}
            <p className="font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] mb-2 sm:mb-6 md:mb-8 text-white">
              Join the Green Lighthouse Community
            </p>
            <p className="font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] mb-4 sm:mb-6 md:mb-8 text-white">
              Empower your child with essential financial skills. Sign up for a
              class with us today and move one step closer to that great
              financial opportunity.
            </p>

            {/* CTA Button */}
            <Link
              to=""
              aria-label="Enroll for a course"
              className="bg-alternate text-white py-4 sm:py-5 px-6 sm:px-8 text-[16px] sm:text-[18px] hover:bg-hover hover:text-primary uppercase inline-block transition-all duration-300"
            >
              Enroll now
            </Link>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
