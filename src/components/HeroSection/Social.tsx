"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="flex flex-row gap-3">
        <Link
          href="https://github.com/ev0clu"
          className="hover:scale-105 hover:opacity-75"
          aria-label="Github repository link"
        >
          <FaGithub className="h-7 w-7 text-emerald-500" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/laszlo-kis-1932a1276/"
          className="hover:scale-105 hover:opacity-75"
          aria-label="Linkedin profile link"
        >
          <FaLinkedin className="h-7 w-7 text-emerald-500" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Social;
