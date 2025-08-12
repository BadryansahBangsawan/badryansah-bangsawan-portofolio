import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
    name: "Work Experiences",
    href: "#experiences",
  },
];

export const EXPERIENCES = [
  {
    company: "Saoraja cafe & Resto",
    title: "Social Media Admin Marketing",
    location: "Antang, Makassar,Indonesia",
    description: [
      "Mengelola kampanye iklan di Meta Ads & Google Ads secara rutin",
      "Meningkatkan engagement media sosial hingga 45% melalui strategi konten",
      "Terbiasa menggunakan Canva, Meta adds, dan Google form",
    ],
    icon: createElement(CgWorkAlt),
    date: "2023-2025",
  },
  {
    company: "Manujujaya",
    title: "Staff Administrasi Gudang",
    location: "Serui, Papua,indonesia",
    description: [
      "Mengelola dan mendokumentasikan keluar-masuk barang menggunakan sistem inventaris digital untuk memastikan akurasi stok harian",
      "Menyusun laporan stok dan pengiriman mingguan yang membantu meningkatkan efisiensi distribusi hingga 25%",
      "Berkoordinasi dengan tim logistik dan bagian pembelian untuk memastikan kelancaran arus barang dan ketersediaan stok",
    ],
    icon: createElement(CgWorkAlt),
    date: "last 2022 - now in 2025 ",
  },
];

export const PROJECTS = [
  {
    title: "Grab & Ship E-commerce Dashboard",
    description:
      "A responsive admin dashboard with real-time analytics, order management, and inventory tracking system.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/BadryansahBangsawan/Gens-project",
  },
  {
    title: "Spill the beans - Coffee Shop",
    description:
      "Real-time weather application with location-based forecasts and interactive maps.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/BadryansahBangsawan/Spillthebeans",
  },
  {
    title: "Saoraja Cafe And Resto - Coffee Shop",
    description:
      "Collaborative project management tool with drag-and-drop interface and team features.",
    tags: ["React", "Material UI"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/BadryansahBangsawan/saorajacafe-resto",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Figma",
];

export const SOCIALS_LINKS = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/badryansah-bangsawan/",
    icon: createElement(FaLinkedinIn),
  },
  {
    title: "Github",
    url: "https://github.com/BadryansahBangsawan",
    icon: createElement(FaGithub),
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/badryanbangsawan",
    icon: createElement(FaInstagram),
  },
];

export const LOCATION = {
  location: "Makassar, Indonesia",
  coords: {
    latitude: "-5.147665° S",
    longitude: "119.432731° E",
  },
  timezone: "Asia/Makassar",
};

export const CONTACTS = {
  email: "badryansah99@gmail.com",
  phone: "+62 852-4430-4050",
};
