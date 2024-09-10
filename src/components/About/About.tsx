"use client";

import { motion } from "framer-motion";
import Section from "../Section/Section";
import SectionMotion from "../Section/SectionMotion";
import SectionTitle from "../Section/SectionTitle";
import Skills from "./Skills";

const About = () => {
  return (
    <Section id="About">
      <SectionMotion>
        <SectionTitle>About me</SectionTitle>
        <p className="text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
        >
          <h3 className="mt-5 text-lg font-semibold sm:text-xl">
            Introduction
          </h3>
          <p className="h2 min-w-[305px] text-muted-foreground">
            Combining my technical expertise in Engineering with a passion for
            web development, I am actively seeking opportunities within the web
            development sphere where I can leverage my skills in problem-solving
            and apply my knowledge to innovative projects. Proficient in HTML,
            CSS, JavaScript, and TypeScript, I have hands-on experience with
            various web frameworks, including React, Next.js, and more.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        >
          <h3 className="mt-5 text-lg font-semibold hover:cursor-default sm:text-xl">
            Tech stack
          </h3>
          <div className="flex justify-center">
            <Skills />
          </div>
        </motion.div>
      </SectionMotion>
    </Section>
  );
};

export default About;
