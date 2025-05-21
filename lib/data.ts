import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const LINKS = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experiences",
    href: "#experiences",
  },
];

export const EXPERIENCES = [
  {
    company: "University of Toronto",
    title: "Bachelors in Computer Engineering",
    location: "Toronto, ON",
    description: [
      "Minor in Artificial Intelligence",
      "GPA: 3.83/4.00",
      "Deans list every semester",
    ],
    icon: createElement(LuGraduationCap),
    date: "2019-2024",
  },
  {
    company: "PlayStation",
    title: "Software Developer Intern",
    location: "Waterloo, ON",
    description: [
      "Worked on the front-end for the Library App on the PlayStation 5 Console team",
      "Developed robust APIs using Python to collect and analyze coverage statistics, significantly enhancing the efficiency and reliability of the automation framework, resulting in a 25% increase in test coverage accuracy",
    ],
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Dashboard",
    description:
      "A responsive admin dashboard with real-time analytics, order management, and inventory tracking system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API service for a social media platform with user authentication and post management.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with location-based forecasts and interactive maps.",
    tags: ["Next.js", "React", "OpenWeather API", "Mapbox"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with drag-and-drop interface and team features.",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Material UI",
  "Redux",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
];

export const SOCIALS_LINKS = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: createElement(FaLinkedinIn),
  },
  {
    title: "Github",
    url: "https://github.com/",
    icon: createElement(FaGithub),
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: createElement(FaInstagram),
  },
];

export const LOCATION = {
  location: "Bandung, West Java, Indonesia",
  coords: {
    latitude: "-6.914744° S",
    longitude: "107.609810° E",
  },
  timezone: "Asia/Jakarta",
};

export const CONTACTS = {
  email: "afrizal.mufriz25@gmail.com",
  phone: "+62 812-8000-0000",
};
