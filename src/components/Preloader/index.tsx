"use client";
import { motion } from "framer-motion";

export default function Index() {
  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      initial="initial"
      variants={slideUp}
      exit="exit"
      className="h-screen w-full bg-white fixed justify-center flex flex-col items-center text-black z-50"
    ></motion.div>
  );
}
