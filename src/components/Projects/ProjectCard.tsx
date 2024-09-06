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
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

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
  const getMotionXY = (): {
    motionX: number;
    motionY: number;
    motionScale: number;
  } => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 640 && window.innerWidth < 768) {
        return { motionX: 0, motionY: 20, motionScale: 1.15 };
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        return { motionX: 0, motionY: 70, motionScale: 1.4 };
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        return { motionX: 170, motionY: 25, motionScale: 2 };
      } else if (window.innerWidth >= 1280) {
        return { motionX: 200, motionY: -20, motionScale: 2 };
      } else return { motionX: 0, motionY: 0, motionScale: 1 };
    }
    return { motionX: 0, motionY: 0, motionScale: 1 };
  };

  const { motionX, motionY, motionScale } = getMotionXY();

  return (
    <Card className="flex flex-col hover:bg-accent/30 hover:shadow-inner sm:gap-5 lg:h-80 lg:flex-row">
      <div className="mx-auto p-5 lg:w-1/3">
        <motion.div
          whileHover={{
            scale: motionScale,
            x: motionX,
            y: motionY,
            transition: { duration: 0.3 },
          }}
          className="rounded-md"
        >
          <Image
            src={img}
            width={1920}
            height={970}
            alt={name}
            loading="lazy"
            className="rounded-md"
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-between lg:w-2/3">
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
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-md hover:text-accent-foreground hover:text-emerald-600",
              )}
            >
              GitHub
            </Link>
            <Link
              href={demo}
              aria-label="Demo link"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-md bg-emerald-500 hover:bg-emerald-500/90 hover:text-foreground",
              )}
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
