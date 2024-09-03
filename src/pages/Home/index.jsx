import React, { useState } from "react";
import { Helmet, Container } from "../../components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { Card } from "../../components";
import { courses, faqs } from "../../constants";
import { IoChevronDown } from "react-icons/io5";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Helmet title="Home">
      <section className="w-full h-[90vh] bg-herobg bg-center bg-cover bg-no-repeat relative">
        <div className="bg-black opacity-30 absolute inset-0"></div>
        <Container>
          <div className="flex justify-center items-center absolute inset-0 left-[5%] top-[40%] translate-y-[-40%]">
            <div className="w-full md:w-[60%] px-4">
              <h1 className="text-[60px] text-white font-bold leading-[65px] mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur
              </h1>
              <Link
                to=""
                aria-label="View our course catalogue"
                className="bg-alternate text-white py-5 px-8 text-[18px] hover:bg-hover hover:text-primary uppercase inline-block"
              >
                View our course catalogue
              </Link>
            </div>
            <div className="w-full md:w-[40%]"></div>
          </div>
        </Container>
      </section>

      <section className="w-full py-20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h1 className="w-full md:w-4/5 font-bold text-[40px] md:text-[60px] text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30%] after:border-b-4 after:border-alternate">
                Financial Learning, Reimagined
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-6 md:mb-10">
                Your custom heading text goes here. Replace this placeholder to
                align with your content.
              </h2>
              <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Replace with relevant text content. This could include
                highlights of the features or benefits. Replace with relevant
                text content. This could include highlights of the features or
                benefits.
              </p>
              <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-4 md:mb-6">
                Add more information or supportive text that enhances your main
                message.Add more information or supportive text that enhances
                your main message.
              </p>
              <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] mb-6 md:mb-10">
                Continue to add compelling content that resonates with your
                audience.Continue to add compelling content that resonates with
                your audience.
              </p>

              <div className="flex items-center gap-1">
                <Link
                  to="/about"
                  aria-label="Learn more"
                  className="relative font-bold text-[16px] md:text-[18px] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:border-b-2 after:border-alternate after:transition-all after:duration-300 hover:after:w-[40%]"
                >
                  Learn more
                </Link>
                <FaChevronRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full py-20 bg-coursebg bg-no-repeat bg-cover bg-top">
        <Container>
          <div className="mb-12">
            <h1 className="text-[50px] text-primary text-center font-bold leading-[48px] relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:-translate-x-1/2 after:w-[10%] after:border-b-4 after:border-alternate">
              Our Courses
            </h1>
          </div>
          <div className="flex justify-center items-center gap-5">
            {courses.map((course) => (
              <Card {...course} key={course.id} />
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full py-20 bg-faqbg bg-no-repeat bg-cover bg-top">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="w-full md:w-4/5 font-bold text-[40px] md:text-[60px] text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30%] after:border-b-4 after:border-alternate">
                Frequently asked questions
              </h1>
            </div>

            <div className="md:w-1/2">
              {faqs.map((faq, i) => (
                <div
                  className="p-[40px] rounded-[8px] bg-grey mb-3"
                  key={faq.id}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer "
                    onClick={() => handleToggleAnswer(i)}
                  >
                    <p className="font-bold text-[16px] md:text-[18px] leading-[22px] md:leading-[24px]">
                      {i + 1}. {faq.question}
                    </p>

                    <div
                      className={`transform transition-transform bg-alternate p-[2px] rounded-full ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      <IoChevronDown />
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-300  ${
                      openIndex === i ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <div className="mt-4 text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]  text-secondary">
                      <p className="font-medium">{faq.reply}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full py-20 bg-ctobg bg-no-repeat bg-cover bg-center">
        <Container>
          <div className="w-[70%] md:w-1/2 mx-auto text-center">
            <h1 className="text-[50px] text-secondary text-center font-bold leading-[48px] mb-10">
              Get Started
            </h1>
            <p className="font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] mb-6 md:mb-10 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nemo nobis placeat vitae iusto voluptas voluptatibus
              deserunt voluptatem vel minima.
            </p>
            <Link
              to=""
              aria-label="Enroll for a course"
              className="bg-alternate text-white py-5 px-8 text-[18px] hover:bg-hover hover:text-primary uppercase inline-block"
            >
              Enroll for a course
            </Link>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
