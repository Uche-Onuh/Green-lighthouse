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
    display: "contact us",
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
    link: "/invest",
  },
  {
    id: "stock",
    img: stock,
    title: "Stock Market 101",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptates soluta totam, pariatur id neque accusamus eum praesentium
            temporibus culpa minima adipisci sed illum dolore quam ut! Amet,
            dolores praesentium!`,
    link: "/stock-market-101",
  },
  {
    id: "business",
    img: bussiness,
    title: "Business 101",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptates soluta totam, pariatur id neque accusamus eum praesentium
            temporibus culpa minima adipisci sed illum dolore quam ut! Amet,
            dolores praesentium!`,
    link: "/business-101",
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

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-4",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];
