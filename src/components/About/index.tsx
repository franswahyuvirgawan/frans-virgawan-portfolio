import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Circle2 from "../Circle2";
import { useIslg } from "@/hooks/utils";

export default function Index() {
  const useIsLarge = useIslg();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0px 10%)", "inset(0px 0%)"]
  );

  const imagePath = "/images/background2.jpg";

  const text1 = "HTML - CSS - Javascript - Typescript";
  const text2 = "SASS - React JS - Next JS";
  const text3 = "React Native (Interactive App)";
  const text4 = "Figma - Photoshop";
  const description = useRef(null);
  const isInView = useInView(description);

  const slideUp = {
    initial: {
      y: "100%",
    },
    single: {
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: (i: any) => ({
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full lg:px-36 px-10 relative z-10 h-screen bg-[#0F0F0F]">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          ref={container}
          style={{
            backgroundImage: `url(${imagePath})`,
            clipPath: useIsLarge ? clipPath : "inset(0px 0%)",
          }}
          className="h-full bg-cover w-screen bg-center z-10 top-0 absolute"
        ></motion.div>
      </div>
      <div className="relative z-20 flex flex-col h-full text-[#fff]  lg:gap-9 gap-3  lg:justify-center bottom-20 lg:bottom-0 lg:top-0 lg:right-0 lg:left-0 justify-end ">
        <div className="overflow-hidden -mt-24">
          <motion.h1
            variants={slideUp}
            animate={isInView ? "open" : "closed"}
            className="lg:text-6xl text-2xl font-bold text-end"
          >
            SKILLS
          </motion.h1>
        </div>
        <div className="flex flex-col lg:gap-3 gap-2">
          <div className="relative flex gap-2 flex-wrap items-end justify-end lg:text-2xl text-sm">
            {text1.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="overflow-hidden inline-flex relative"
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    className="flex flex-row"
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>
          <div className="relative flex gap-2 flex-wrap items-end justify-end lg:text-2xl text-sm">
            {text2.split(" ").map((word, index) => {
              const wordCount = text1.split(/\s+/).length;
              const number = index + wordCount;
              return (
                <span
                  key={index}
                  className="overflow-hidden inline-flex relative"
                >
                  <motion.span
                    variants={slideUp}
                    custom={number}
                    animate={isInView ? "open" : "closed"}
                    className="flex flex-row"
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>
          <div className="relative flex gap-2 flex-wrap items-end justify-end lg:text-2xl text-sm">
            {text3.split(" ").map((word, index) => {
              const wordCount1 = text1.split(/\s+/).length;
              const wordCount2 = text2.split(/\s+/).length;
              const number = index + wordCount1 + wordCount2;
              return (
                <span
                  key={index}
                  className="overflow-hidden inline-flex relative"
                >
                  <motion.span
                    variants={slideUp}
                    custom={number}
                    animate={isInView ? "open" : "closed"}
                    className="flex flex-row"
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>
          <div className="relative flex gap-2 flex-wrap items-end justify-end lg:text-2xl text-sm">
            {text4.split(" ").map((word, index) => {
              const wordCount1 = text1.split(/\s+/).length;
              const wordCount2 = text2.split(/\s+/).length;
              const wordCount3 = text3.split(/\s+/).length;
              const number = index + wordCount1 + wordCount2 + wordCount3;
              return (
                <span
                  key={index}
                  className="overflow-hidden inline-flex relative"
                >
                  <motion.span
                    variants={slideUp}
                    custom={number}
                    animate={isInView ? "open" : "closed"}
                    className="flex flex-row"
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row absolute z-20 lg:bottom-40 bottom-80 right-0 lg:left-0">
          <motion.div
            ref={description}
            className="lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]"
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          >
            <Circle2 />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
