import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import teuserImg from "@/public/teuser.png";
import exeImg from "@/public/exe.png";

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

export const experiencesData = [
  {
    title: "ENSA",
    location: "Casablanca, MA",
    description: "I graduated after 5 year of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Matious - Full-Stack Developer",
    location: "Casablanca, MA",
    description: "Stack : VueJs, TypeScript, Python.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2020 - 12/2020",
  },
  {
    title: "Capgemini - Full-Stack Developer",
    location: "Casablanca, MA",
    description: "Stack : .Net - ReactJS.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2020 - 08/2022",
  },
  {
    title: "Codein - Full-Stack Developer",
    location: "Casablanca, MA",
    description: "Stack : Symfony - ReactJS",
    icon: React.createElement(CgWorkAlt),
    date: "08/2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Casablanca, MA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "08/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Teuser",
    description:
      "Developed an MVP for a web application designed to track communication among clients, shippers, and providers.",
    tags: [
      "React",
      "Next.js",
      "Graphql",
      "Apollo",
      "Postgres",
      "Tailwind",
      "DrizzleORM",
    ],
    imageUrl: teuserImg,
  },
  {
    title: "EXE",
    description:
      "Founder and CTO of EXE, a social mobile application tailored for athletes.",
    tags: ["React Native", "TypeScript", "Node.js", "Graphql", "Apollo"],
    imageUrl: exeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
