import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

interface SkillsProps {
  tileClassName?: string;
  tooltipClassName?: string;
}

const Skills = ({ tileClassName, tooltipClassName }: SkillsProps) => {
  return (
    <div className="my-5 grid min-w-[300px] grid-cols-3 justify-items-center gap-10 sm:grid-cols-5">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <FaReact className={tileClassName} aria-label="React skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>React</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiNextdotjs className={tileClassName} aria-label="Next.js skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Next.js</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiTypescript
              className={tileClassName}
              aria-label="Typescript skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Typescript</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <RiTailwindCssFill
              className={tileClassName}
              aria-label="TailwindCSS skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>TailwindCSS</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiShadcnui
              className={tileClassName}
              aria-label="Shadcn UI skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>ShadcnUI</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiMui className={tileClassName} aria-label="Material UI skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>MaterialUI</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiStyledcomponents
              className={tileClassName}
              aria-label="Styled-Components skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Styled-Components</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <FaNodeJs className={tileClassName} aria-label="Node.js skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Node.js</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiExpress
              className={tileClassName}
              aria-label="Express.js skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Express.js</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiNestjs className={tileClassName} aria-label="Nest.js skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Nest.js</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiPrisma className={tileClassName} aria-label="Prisma ORM skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Prisma ORM</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <SiMongodb className={tileClassName} aria-label="MongoDB skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>MongoDB</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <BiLogoPostgresql
              className={tileClassName}
              aria-label="PostgreSQL skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>PostgreSQL</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <IoLogoFirebase
              className={tileClassName}
              aria-label="Firebase skill"
            />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Firebase</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <FaDocker className={tileClassName} aria-label="Docker skill" />
          </TooltipTrigger>
          <TooltipContent className={tooltipClassName}>
            <p>Docker</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Skills;
