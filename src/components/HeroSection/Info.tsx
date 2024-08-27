"use client";

import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <span className="text-sm font-semibold sm:text-lg">
        Full Stack Developer
      </span>
      <h1 className="text-4xl font-semibold leading-none tracking-wider sm:text-5xl md:leading-[3rem] xl:text-7xl">
        Hello I&apos;m <br />
        <span className="text-emerald-400">Laszlo Kis</span>
      </h1>
      <p className="max-w-full text-sm text-muted-foreground sm:text-lg">
        A Result-Oriented Web Developer building dynamic, user-friendly web
        applications that leads to the success of the overall product
      </p>
    </motion.div>
  );
};

export default Info;
