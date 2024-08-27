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
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                img={project.img}
                github={project.github}
                demo={project.demo}
              />
            );
          })}
        </div>
      </SectionMotion>
    </Section>
  );
};

export default Projects;
