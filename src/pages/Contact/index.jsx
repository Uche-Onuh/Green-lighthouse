import React, { useState } from "react";
import { Helmet, Container, Header } from "../../components";
import { Link } from "react-router-dom";
import { socials } from "../../constants";
import { toast } from "react-toastify"; // Assuming you're using react-toastify

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Log the form input data
    console.log("Form Data:", form);

    try {
      // Uncomment this when ready to connect to the backend
      // const response = await fetch("", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(form),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to send message.");
      // }

      // const data = await response.json();
      toast.success("Message sent successfully!");
      setForm({ firstName: "", email: "", lastName: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Contact Us">
      <Header
        title="Contact Us"
        bgImage="bg-contactbg"
        paragraph={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem
          ipsa totam dolores! Sit maxime veniam cumque atque excepturi quia ab,`}
      />

      <section className="w-full py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-20 md:gap-20">
            <div className="w-full md:w-1/2 bg-primary rounded-xl py-8 px-10 text-white">
              <h2 className="font-bold text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] relative w-full md:w-4/5 leading-tight md:leading-snug mb-8">
                Get in touch
              </h2>
              {/* Contact Details */}
              <div className="mb-6">
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-1 md:mb-2">
                  Visit us
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-2 md:mb-2">
                  Come say hello at our office HQ
                </p>
                <Link
                  to=""
                  className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] hover:text-secondary"
                >
                  333 Southeast 2nd Avenue - Suite 2000 - Miami, FL 33131
                </Link>
              </div>
              <div className="mb-6">
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-1 md:mb-2">
                  Chat with us
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-2 md:mb-2">
                  Our friendly team is here to help
                </p>
                <Link
                  to="mailto:hello@greenlighthouse.com"
                  className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] hover:text-secondary"
                >
                  hello@greenlighthouse.com
                </Link>
              </div>
              <div className="mb-6">
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-1 md:mb-2">
                  Call us
                </p>
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-2 md:mb-2">
                  Mon - Fri from 5am to 5pm
                </p>
                <Link
                  to="tel:"
                  className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] hover:text-secondary"
                >
                  1-855-498-4400
                </Link>
              </div>
              <div className="mb-6">
                <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] mb-1 md:mb-2">
                  Social media
                </p>
                <div className="flex justify-start items-center gap-3">
                  {socials.map((social) => (
                    <div key={social.id} className="text-[16px] md:text-[18px]">
                      <Link
                        to={social.to}
                        aria-label={social.name}
                        className="text-white hover:text-secondary transition-colors"
                      >
                        <social.icon />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-start w-full mb-10 gap-3">
                  <div className="flex flex-col gap-3 w-1/2">
                    <label
                      htmlFor="firstName"
                      className="text-primary font-semibold"
                    >
                      First name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="px-1 py-2 border-[1px] border-alternate outline-none text-primary placeholder:text-primary placeholder:opacity-50 placeholder:text-[14px] bg-transparent rounded-none"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-1/2">
                    <label
                      htmlFor="lastName"
                      className="text-primary font-semibold"
                    >
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="px-1 py-2 border-[1px] border-alternate outline-none text-primary placeholder:text-primary placeholder:opacity-50 placeholder:text-[14px] bg-transparent rounded-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full mb-10">
                  <label htmlFor="email" className="text-primary font-semibold">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="px-1 py-2 border-[1px] border-alternate outline-none text-primary placeholder:text-primary placeholder:opacity-50 placeholder:text-[14px] bg-transparent rounded-none"
                  />
                </div>

                <div className="flex flex-col gap-3 mb-16 w-full">
                  <label
                    htmlFor="message"
                    className="text-primary font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="10"
                    rows="8"
                    onChange={handleChange}
                    value={form.message}
                    required
                    placeholder="Message"
                    className="px-3 py-2 border-[1px] border-alternate outline-none text-primary placeholder:text-primary placeholder:opacity-50 placeholder:text-[14px] bg-transparent rounded-none"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-alternate py-3 rounded-sm outline-none border-none hover:bg-tertiary hover:text-primary font-bold transition ease-in-out duration-700"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
