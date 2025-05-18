import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import BurgerMart from "@/public/BurgerMart.png";
import J1 from "@/public/j1.png";

export const links = [ 
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const education = [
  {
    degree: "B.Tech in CSE (8.0 CGPA)",
    college: "Rajasthan Technical University",
    location: "Kota, Rajasthan",
    date: "2021 - 2025",
  },
  {
    degree: "Senior Secondary (%)",
    college: "Royal Academy Sr. Sec School ",
    location: "Jalore, Rajasthan",
    date: "2018 - 2020",
  },
];

export const experiencesData = [
  {
    title: "WEB DEVELOPMENT INTERN",
    company: "WebSenor Private Limited",
    location: "Udaipur, Raj. (On-Site)",
    description: [
      "- Developed dynamic and high-performance web applications using React.js and Next.js,leveraging component-based architecture and server-side rendering (SSR).",
      "- Implemented strong-typed features with TypeScript and developer productivity by using interfaces, types, and type safety in large-scale projects.",
      "- Efficiently managed application state using Redux Toolkit for scalable state management,optimizing data flow, improving performance, and ensuring seamless UI across React applications.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - May 2025",
  },
  
] as const;

export const projectsData = [
  {
    title: "Burger Mart",
    description:
      "Enabled efficient order ,user data management and streamlining of operations.",
    tags: ["React", "Node.js", "Express.js", "Tailwind", "MongoDB"],
    imageUrl: BurgerMart,
    gitRepo: "https://github.com/suthararvind/Burger-Burst-Frontend",
    live: "https://burgermart.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "Contributed in developing a job portal application as part of a team during MERN stack training.",
    tags: ["React", "Javascript", "Tailwind", "Redux-Toolkit"],
    imageUrl: J1,
    gitRepo: "https://github.com/suthararvind",
    live: "https://github.com/suthararvind",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  
] as const;
