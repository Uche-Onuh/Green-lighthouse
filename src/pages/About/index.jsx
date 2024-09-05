import React from "react";
import { Helmet, Container, Header } from "../../components";

const About = () => {
  return (
    <Helmet title="About">
      <Header
        title="About Us"
        bgImage="bg-aboutbg"
        paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem
          ipsa totam dolores! Sit maxime veniam cumque atque excepturi quia ab,`}
      />

      <section className="w-full py-5 md:py-20">
        <div className="w-[90%] md:w-[70%] mx-auto py-[50px] px-[20px] md:px-[50px] shadow-2xl my-8 md:my-16">
          <h2 className="font-bold text-center text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Our Philosophy
          </h2>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            <b>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              voluptates earum, illo ipsum pariatur illum excepturi ut rem
              animi. Quibusdam, tempore quo veritatis deleniti labore quidem nam
              id odit beatae?
            </b>
          </p>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            quia.
          </p>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
            sequi a, rem aliquid nostrum expedita vel iusto accusantium minima
            eos aliquam! Temporibus laudantium omnis in a repudiandae!
            Consequatur tempora doloribus error dicta eveniet nisi magnam
            facilis maiores tempore aspernatur praesentium eligendi sunt
            corrupti velit repellat, debitis, autem nobis numquam impedit vero
            nemo! Ab iusto quis esse beatae, vero laborum, quam neque hic
            dolores aliquam enim possimus dicta necessitatibus nisi.
          </p>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            explicabo ad repellat eligendi veniam itaque error fugiat maxime, a
            quaerat.
          </p>

          <h2 className="font-bold text-center text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Our Team
          </h2>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
            maxime nesciunt tenetur? Possimus repellat tenetur, provident
            laboriosam error consectetur quasi, molestias eius distinctio ullam
            architecto! Ducimus quas cum quidem placeat, iste delectus officiis.
            Ut corrupti autem natus nihil nemo numquam facilis doloremque,
            minima sit atque, est laudantium, veniam earum odit odio? Vel
            obcaecati laboriosam placeat odio officiis earum non! Modi,
            repellendus iusto. Maxime, veniam saepe ullam distinctio unde
            dolorem?
          </p>
        </div>
      </section>

      <section className="w-full py-5 md:py-20">
        <div className="w-[90%] md:w-[70%] mx-auto py-[50px px-[20px] sm:px-[50px] py-[50px] shadow-2xl md:my-16">
          <h2 className="font-bold text-center text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-primary relative w-full md:w-4/5 leading-tight md:leading-snug after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[10%] after:border-b-4 after:border-alternate mb-8">
            Our History
          </h2>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            <b>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              voluptates earum, illo ipsum pariatur illum excepturi ut rem
              animi. Quibusdam, tempore quo veritatis deleniti labore quidem nam
              id odit beatae?
            </b>
          </p>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            quia.
          </p>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
            sequi a, rem aliquid nostrum expedita vel iusto accusantium minima
            eos aliquam! Temporibus laudantium omnis in a repudiandae!
            Consequatur tempora doloribus error dicta eveniet nisi magnam
            facilis maiores tempore aspernatur praesentium eligendi sunt
            corrupti velit repellat, debitis, autem nobis numquam impedit vero
            nemo! Ab iusto quis esse beatae, vero laborum, quam neque hic
            dolores aliquam enim possimus dicta necessitatibus nisi.
          </p>

          <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            explicabo ad repellat eligendi veniam itaque error fugiat maxime, a
            quaerat.
          </p>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
