import React from "react";
import { Helmet, Container, Header } from "../../components";

const Contact = () => {
  return (
    <Helmet title="Contact Us">
      <Header
        title="Contact Us"
        bgImage="bg-contactbg"
        paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem
          ipsa totam dolores! Sit maxime veniam cumque atque excepturi quia ab,`}
      />
    </Helmet>
  );
};

export default Contact;
