import React from "react";
import { Helmet, Container } from "../../components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { Card } from "../../components";
import { courses } from "../../constants";

const Home = () => {
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
                aria-label="View our course dialog"
                className="bg-alternate text-white py-5 px-8 text-[18px] hover:bg-hover hover:text-primary uppercase inline-block"
              >
                View our course dialog
              </Link>
            </div>
            <div className="w-full md:w-[40%]"></div>
          </div>
        </Container>
      </section>

      <section className="w-full py-20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="w-full md:w-4/5 font-bold text-[40px] md:text-[60px] text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30%] after:border-b-4 after:border-alternate">
                Financial Learning, Reimagined
              </h1>
            </div>

            <div className="md:w-1/2">
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

      <section className="w-full py-20">
        <Container></Container>
      </section>
    </Helmet>
  );
};

export default Home;
