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
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptates soluta totam, pariatur id neque accusamus eum praesentium
            temporibus culpa minima adipisci sed illum dolore quam ut! Amet,
            dolores praesentium!`,
    extra: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, dicta iusto, iure repellendus quaerat quisquam voluptas numquam, sed similique autem dolor voluptate eos! Soluta laudantium reprehenderit maiores, labore dicta, nihil sint beatae iusto obcaecati accusantium, fugit modi nisi incidunt voluptatum non culpa officiis commodi provident! Ad deserunt reiciendis dignissimos aut.`,
    link: "/courses",
  },
  {
    id: "stock",
    img: stock,
    title: "Stock Market 101",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptates soluta totam, pariatur id neque accusamus eum praesentium
            temporibus culpa minima adipisci sed illum dolore quam ut! Amet,
            dolores praesentium!`,
    extra: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, dicta iusto, iure repellendus quaerat quisquam voluptas numquam, sed similique autem dolor voluptate eos! Soluta laudantium reprehenderit maiores, labore dicta, nihil sint beatae iusto obcaecati accusantium, fugit modi nisi incidunt voluptatum non culpa officiis commodi provident! Ad deserunt reiciendis dignissimos aut.`,

    link: "/courses",
  },
  {
    id: "business",
    img: bussiness,
    title: "Business 101",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptates soluta totam, pariatur id neque accusamus eum praesentium
            temporibus culpa minima adipisci sed illum dolore quam ut! Amet,
            dolores praesentium!`,
    extra: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, dicta iusto, iure repellendus quaerat quisquam voluptas numquam, sed similique autem dolor voluptate eos! Soluta laudantium reprehenderit maiores, labore dicta, nihil sint beatae iusto obcaecati accusantium, fugit modi nisi incidunt voluptatum non culpa officiis commodi provident! Ad deserunt reiciendis dignissimos aut.`,
    link: "/courses",
  },
];

export const faqs = [
  {
    id: "q1",
    question: "What services does TanahAir Offer?",
    reply: "This is a default reply",
  },
  {
    id: "q2",
    question: "What services does TanahAir Offer?",
    reply: "This is a default reply",
  },
  {
    id: "q3",
    question: "What services does TanahAir Offer?",
    reply: "This is a default reply",
  },
  {
    id: "q4",
    question: "What services does TanahAir Offer?",
    reply: "This is a default reply",
  },
  {
    id: "q5",
    question: "What services does TanahAir Offer?",
    reply: "This is a default reply",
  },
];

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
];

export const testimonial = [
  {
    id: "testimonal1",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et nobis nulla veniam possimus debitis blanditiis cumque dicta voluptates perferendis inventore, ab impedit! Labore sequi dolor consequuntur facere magni libero.`,
    course: "Stock Market 101",
    location: "Honolulu, Hawaii",
  },
  {
    id: "testimonal2",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et nobis nulla veniam possimus debitis blanditiis cumque dicta voluptates perferendis inventore, ab impedit! Labore sequi dolor consequuntur facere magni libero.`,
    course: "Investing for kids",
    location: "New York City, New York",
  },
  {
    id: "testimonal3",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et nobis nulla veniam possimus debitis blanditiis cumque dicta voluptates perferendis inventore, ab impedit! Labore sequi dolor consequuntur facere magni libero.`,
    course: "Stock Market 101",
    location: "Boston, Massachusetts",
  },
  {
    id: "testimonal4",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et nobis nulla veniam possimus debitis blanditiis cumque dicta voluptates perferendis inventore, ab impedit! Labore sequi dolor consequuntur facere magni libero.`,
    course: "Business 101",
    location: "Seattle, Washington State",
  },
];
