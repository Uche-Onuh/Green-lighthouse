import React from "react";
import { Helmet, Header } from "../../components";

const About = () => {
  return (
    <Helmet title="About">
      <Header
        title="About Us"
        bgImage="bg-aboutbg"
        paragraph={`At Green Lighthouse, we support the development of financial and 
        entrepreneurial skills for young people. Our unique platform offers fun, virtual
        group classes that provide valuable financial information, helping kids 
        feel confident in the world of finance.`}
      />

      <section className="w-full py-5 md:py-20">
        <div className="w-[90%] md:w-[70%] mx-auto py-[50px] px-[20px] md:px-[50px] shadow-2xl my-8 md:my-16">
          <h2 className="font-bold text-center mx-auto text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Our Philosophy
          </h2>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            <b>Inspiring Financial Literacy and Entrepreneurship</b>
          </p>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            We believe that financial literacy is fundamental to a successful
            future. Our philosophy is that every child has the right to quality
            financial education. To make learning about money both exciting and
            relevant, we combine interactive lessons with practical applications
            in real life. Our vision is to encourage young people to be more
            critical in their approach towards their financial decision-making
            and develop a sustainable entrepreneurial spirit.
          </p>

          <h2 className="font-bold text-center mx-auto text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Our Team
          </h2>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            <b>Meet Our Experts</b>
          </p>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Our team comprises experienced educators and successful
            entrepreneurs dedicated to sharing our knowledge with the next
            generation. Our founder, Curtis Williams, is an experienced
            entrepreneur and investor committed to teaching people how to make
            smart financial decisions. His combination of real-world know-how
            and educational expertise sets the tone for all our classes.
          </p>
        </div>
      </section>

      <section className="w-full py-5 md:py-20">
        <div className="w-[90%] md:w-[70%] mx-auto py-[50px px-[20px] sm:px-[50px] py-[50px] shadow-2xl md:my-16">
          <h2 className="font-bold text-center mx-auto text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Our History
          </h2>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            <b>A Journey of Empowerment</b>
          </p>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Green Lighthouse was founded on the belief that every child deserves
            a bright financial future. Our founder, Curtis Williams, began
            investing in equities and real estate at a young age. Recognizing
            the power of education and mentorship, he established Green
            Lighthouse to empower young learners with his knowledge and
            experience. Over the years, we have become a reliable platform for
            educating kids on finance and equipping them with essential skills.
          </p>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
