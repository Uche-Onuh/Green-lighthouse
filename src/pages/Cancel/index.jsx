import React from "react";
import { MdCancel } from "react-icons/md";
import { Helmet, Container } from "../../components";
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <Helmet title="Cancel">
      <Container>
        <div className="text-center py-24">
          <MdCancel className="text-9xl text-red-800 mx-auto mt-14 rounded-full p-2 bg-tertiary" />
          <h1 className="text-4xl text-center font-bold mt-10">
            Payment cancelled
          </h1>
          <p className="text-center mt-5 mb-14">
            Your payment was cancelled. Please try again.
          </p>

          <button>
            <Link
              to={"/courses"}
              className="bg-primary text-white px-6 py-3 rounded-md"
            >
              Go back to courses
            </Link>
          </button>
        </div>
      </Container>
    </Helmet>
  );
};

export default Cancel;
