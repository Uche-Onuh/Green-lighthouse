import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
