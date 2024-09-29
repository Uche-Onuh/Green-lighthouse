import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { stock, bussiness, invest } from "../assets";

export const navLinks = [
  {
    id: "about",
    path: "about-us",
    display: "About us",
  },
  {
    id: "courses",
    path: "courses",
    display: "Courses",
  },
  {
    id: "contact",
    path: "contact",
    display: "Contact us",
  },
];

export const socials = [
  {
    id: "x",
    icon: FaXTwitter,
    to: "",
  },
  {
    id: "insta",
    icon: FaInstagram,
    to: "",
  },
  {
    id: "facebook",
    icon: FaFacebookSquare,
    to: "",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    to: "",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    to: "",
  },
];

export const courses = [
  {
    id: "invest",
    img: invest,
    title: "Investing for kids",
    subheading: "Unlock the Secrets of Saving and Investing",
    text: `Investing for Kids course aims at exposing young learners to the stock market, saving and planning economically. The course covers interactive classes and relatable situations to help kids know how to make a good decision when it comes to money matters.`,
    extra: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, dicta iusto, iure repellendus quaerat quisquam voluptas numquam, sed similique autem dolor voluptate eos! Soluta laudantium reprehenderit maiores, labore dicta, nihil sint beatae iusto obcaecati accusantium, fugit modi nisi incidunt voluptatum non culpa officiis commodi provident! Ad deserunt reiciendis dignissimos aut.`,
    list: [
      {
        id: "item1",
        item: "How the stock market works.",
      },
      { id: "item2", item: "Important Financial terms." },
      { id: "item3", item: "Types of investment options." },
      { id: "item4", item: "What time and value is." },
      { id: "item5", item: "An understanding that business is an investment." },
    ],
    link: "/courses",
  },
  {
    id: "stock",
    img: stock,
    title: "Stock Market 101",
    subheading: "Master the Market",
    text: `Stock Market 101 — for older students who are ready to take a deeper dive into investment opportunities. This course goes from the fundamentals of investing in stocks up to professional investment techniques.`,
    extra: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, dicta iusto, iure repellendus quaerat quisquam voluptas numquam, sed similique autem dolor voluptate eos! Soluta laudantium reprehenderit maiores, labore dicta, nihil sint beatae iusto obcaecati accusantium, fugit modi nisi incidunt voluptatum non culpa officiis commodi provident! Ad deserunt reiciendis dignissimos aut.`,
    list: [
      {
        id: "item1",
        item: "Learn about how the economy or stock market works as a whole.",
      },
      { id: "item2", item: "Learn how to screen and select stocks." },
      { id: "item3", item: "Trade the stock account you opened confidently." },
    ],
    link: "/courses",
  },
  {
    id: "business",
    img: bussiness,
    title: "Business 101",
    subheading: "Start Your Entrepreneurial Journey",
    text: `Business 101 is where children learn the basics of what it takes to own and operate a business. This course covers everything from learning about credit cards to budgeting.`,
    extra: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, dicta iusto, iure repellendus quaerat quisquam voluptas numquam, sed similique autem dolor voluptate eos! Soluta laudantium reprehenderit maiores, labore dicta, nihil sint beatae iusto obcaecati accusantium, fugit modi nisi incidunt voluptatum non culpa officiis commodi provident! Ad deserunt reiciendis dignissimos aut.`,
    list: [
      {
        id: "item1",
        item: "Learn the difference between good debt and bad debt.",
      },
      {
        id: "item2",
        item: "Understand how to use credit and debit cards responsibly",
      },
      { id: "item3", item: "Develop budgeting skills." },
      { id: "item4", item: "Explore the basics of entrepreneurship." },
    ],
    link: "/courses",
  },
];

export const faqs = [
  {
    id: "q1",
    question: "What age groups are your courses designed for?",
    reply: `Our courses cater to kids aged 8 years and above, as well as young adults.
`,
  },
  {
    id: "q2",
    question: "How are the classes conducted?",
    reply: "Classes are conducted online in interactive group settings.",
  },
  {
    id: "q3",
    question: "What topics do your courses cover?",
    reply: `Our courses cover a wide range of topics including the stock market, saving and investing, financial planning, and entrepreneurship.`,
  },
  {
    id: "q4",
    question: "Who teaches the courses?",
    reply: `Our courses are taught by experienced educators and entrepreneurs.`,
  },
  {
    id: "q5",
    question: "How can I enroll my child in a course?",
    reply: `You can enroll your child by visiting our course catalog and selecting the desired course.`,
  },
];

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Courses",
        link: "/courses",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
      {
        name: "Terms of Services",
        link: "/tos",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
];

export const testimonial = [
  {
    id: "testimonal1",
    text: `My teenager now invests in the stock market, thanks to the Stock Market 101 course. It has opened their eyes to the future that awaits them.`,
    course: "Stock Market 101",
    location: "Honolulu, Hawaii",
  },
  {
    id: "testimonal2",
    text: `Green Lighthouse has totally changed the relationship my child has to money. Not only was the Investing for Kids course informative but my child can now talk about stocks and savings without blinking!`,
    course: "Investing for kids",
    location: "New York City, New York",
  },
  {
    id: "testimonal3",
    text: `Business 101 has taught my child about some of the basics of entrepreneurship. They want to start their own business at 10! It was fun.`,
    course: "Stock Market 101",
    location: "Boston, Massachusetts",
  },
];

export const plans = [
  {
    id: "basic",
    title: "Basic",
    price: 49,
    perks: ["4 Pre-recorded videos"],
  },
  {
    id: "classic",
    title: "Classic",
    price: 99.99,
    perks: ["4 weeks duration", "1 class per week", "55 minutes per class"],
  },
  // {
  //   id: "ultimate",
  //   title: "Ultimate",
  //   price: 150,
  //   perks: ["4 weeks duration", "1 class per week", "55 minutes per class"],
  // },
];
