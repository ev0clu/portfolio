"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionMotionProps {
  children: ReactNode;
}

const SectionMotion = ({ children }: SectionMotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SectionMotion;
