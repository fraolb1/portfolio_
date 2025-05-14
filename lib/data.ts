import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import healthSyncImg from "@/public/healthSync.png";
import fundTrackerImg from "@/public/fundTracker.png";
import oneHRImg from "@/public/oneHR.png";

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
    title: "AAiT",
    location: "Addis Ababa, 5 Kilo",
    description:
      "Enrolled in software engineering major",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Intern",
    location: "Addis Ababa, Bole",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Addis Ababa, Bole",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    id:'fbbhnrffeirne89',
    title: "HealthSync",
    description:
      `An AI-powered platform that connects patients with verified doctors.
      I worked as a front end and AI backend developer for about a year on this project.`,
    tags: ["React", "Next.js", "Express" , "MongoDB", "Tailwind", "Python" , "Transformers"],
    imageUrl: healthSyncImg,
  },
  {
    id:'dgvbdsrbebsduxx123',
    title: "oneHR",
    description:
      "oneHR encompasses all HR functions in an automated and streamlined manner. Worked on the project as a fullstack for 2 years.",
    tags: ["React", "Next.js", "Tailwind", "Framer", "Antd", "Material UI"],
    imageUrl: oneHRImg,
  },
  {
    id:'cvvdkvjnektei234kgjn',
    title: "Fund Tracker",
    description:
      "Fund Tracker helps you manage funds with complete transparency, showing exactly where each penny is allocated through milestone-based disbursement workflows. Worked on it for 6 months.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: fundTrackerImg,
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
