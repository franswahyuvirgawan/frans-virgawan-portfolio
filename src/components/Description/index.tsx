import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Circle from "../Circle";
import { useIslg } from "@/hooks/utils";

function Introducing() {
  const body = useRef(null);
  const { scrollYProgress } = useScroll({
    target: body,
    offset: ["start end", "end end"],
  });

  const opacityText = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <motion.div
      ref={body}
      style={{ opacity: opacityText }}
      className="flex flex-col items-start lg:gap-12 gap-6 relative"
    >
      <h1 className="lg:text-6xl text-2xl font-semibold text-white lg:-mt-28 -mt-12">
        Introduction
      </h1>
      <div className="flex flex-row items-start gap-4">
        <div className="border border-b-[0.5px] border-white w-[100px] mt-3 lg:block hidden"></div>
        <p className="text-white lg:text-xl text-sm lg:w-[80%] font-light leading-loose tracking-wide">
          Hello, I&apos;m Fran&apos;s Wahyu Virgawan, a student majoring in
          Information Technology at Udayana University. I have a strong passion
          for application development, particularly in the field of front-end
          development, and I&apos;m currently utilizing React.js and Next.js as
          one of my primary tools for exploring and working on my projects. I
          firmly believe that with dedication and a strong commitment to
          learning, I can achieve success in the world of application
          development and make a meaningful contribution to the technology
          industry.
        </p>
      </div>
      <div className="flex flex-row justify-end w-full absolute lg:-bottom-48 -bottom-28">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          className="lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]"
        >
          <Circle />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Index() {
  const useIsLarge = useIslg();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={container}
      style={{ y: useIsLarge ? y : 0 }}
      className="bg-[#0F0F0F] h-screen w-full z-[5] relative flex flex-col lg:px-40 px-10 justify-center"
    >
      <motion.div style={{ opacity }}>
        <Introducing />
      </motion.div>
    </motion.div>
  );
}
