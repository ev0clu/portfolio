import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiShadcnui,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

export const skillsConfig = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "ShadcnUI",
    icon: SiShadcnui,
  },
  {
    name: "MaterialUI",
    icon: SiMui,
  },
  {
    name: "Styled-Components",
    icon: SiStyledcomponents,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
] as const;

export type TSkillsConfig = (typeof skillsConfig)[number];
