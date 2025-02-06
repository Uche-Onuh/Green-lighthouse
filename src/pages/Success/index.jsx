import React from "react";
import { IoCard } from "react-icons/io5";
import { Helmet, Container } from "../../components";

const Success = () => {
  return (
    <Helmet title="Success">
      <Container>
        <div className="text-center py-24">
          <IoCard className="text-9xl text-primary mx-auto mt-14 rounded-full p-2 bg-tertiary" />
          <h1 className="text-4xl text-center font-bold mt-10">
            Payment successful
          </h1>
          <p className="text-center mt-5 mb-14">
            Thank you for your payment. You are now enrolled in the course.
          </p>
        </div>
      </Container>
    </Helmet>
  );
};

export default Success;
