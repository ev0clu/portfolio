"use client";

import { motion } from "framer-motion";
import { projects } from "@/config/projects";
import Section from "../Section/Section";
import SectionMotion from "../Section/SectionMotion";
import SectionTitle from "../Section/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section>
      <SectionMotion>
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-5">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index / 20,
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  techStack={project.techStack}
                  img={project.img}
                  github={project.github}
                  demo={project.demo}
                />
              </motion.div>
            );
          })}
        </div>
      </SectionMotion>
    </Section>
  );
};

export default Projects;
