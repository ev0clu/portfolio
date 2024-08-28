"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  img: string;
  github: string;
  demo: string;
}

const ProjectCard = ({
  name,
  description,
  techStack,
  img,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <Card className="flex h-80 flex-col hover:bg-accent/30 hover:shadow-inner sm:flex-row sm:gap-5">
      <div className="mx-auto p-5 sm:w-1/3">
        <motion.img
          whileHover={{
            scale: 2,
            x: 200,
            y: -20,
            transition: { duration: 0.3 },
          }}
          src={img}
          width={500}
          height={500}
          alt={name}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between sm:w-2/3">
        <div>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {techStack.map((stack, index) => {
              return (
                <span
                  key={name + stack + index}
                  aria-label={stack}
                  className="h-10 w-max rounded-md border border-input bg-accent px-4 py-2 text-sm hover:cursor-default hover:text-emerald-500"
                >
                  {stack}
                </span>
              );
            })}
          </CardContent>
        </div>
        <CardFooter>
          <div className="flex w-full flex-row justify-center gap-5 sm:justify-end">
            <Link
              href={github}
              aria-label="GitHub link"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 hover:text-accent-foreground hover:text-emerald-600"
            >
              GitHub
            </Link>
            <Link
              href={demo}
              aria-label="Demo link"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 rounded-md bg-emerald-500 px-4 py-2 hover:bg-emerald-500/90 hover:text-background"
            >
              Demo
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
