"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <Image
        src="/coding-image.png"
        width={400}
        height={400}
        priority
        alt="Coding image"
      />
    </motion.div>
  );
};

export default Photo;
