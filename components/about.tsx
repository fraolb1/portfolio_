"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate Full Stack Software Developer with hands-on experience in building robust, scalable, and user-friendly web and mobile applications. 
        I specialize in both frontend and backend development, bringing ideas to life with technologies like JavaScript, React, Node.js, Next.js, and Express, 
        as well as databases like MongoDB and Firebase. With a strong foundation in software engineering principles and a keen eye for detail, I enjoy crafting clean, 
        maintainable code and collaborating across teams to deliver impactful digital solutions. Whether it's developing from scratch or optimizing existing systems, 
        I thrive on solving real-world problems through code.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}
