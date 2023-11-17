"use client";
import { useIslg } from "@/hooks/utils";
import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2500], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Index() {
  const useIsLarge = useIslg();

  const [loading, setLoading] = useState(false);
  const textUp = {
    init: { y: "100%" },
    enter: {
      y: "0",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 600);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div>
      <motion.div
        style={{ y: useIsLarge ? y : 0 }}
        ref={container}
        className="h-screen  w-full text-center relative z-0 overflow-hidden"
      >
        <div className="flex flex-col bg-black justify-center items-center h-full w-full">
          <motion.div
            style={{ opacity }}
            className="lg:px-20 flex flex-col  justify-center items-center gap-2 w-full absolute top-0 bottom-32 z-0"
          >
            <div className="overflow-hidden w-full ">
              <motion.h1
                variants={textUp}
                initial="init"
                animate={loading ? "enter" : ""}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                className="font-extrabold text-3xl lg:text-8xl text-white lg:leading-tight w-full"
              >
                Frans Virgawan
              </motion.h1>
            </div>
            <div className="overflow-hidden w-full">
              <motion.h1
                variants={textUp}
                initial="init"
                transition={{
                  duration: 1.5,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5,
                }}
                animate={loading ? "enter" : ""}
                className={`font-bold ${styles.heading} leading-tight lg:text-[40px] text-lg w-full`}
              >
                Freelance Designer & Developer
              </motion.h1>
            </div>
          </motion.div>
        </div>
        <motion.section
          style={{ opacity }}
          className="flex flex-col gap-2 bottom-10 absolute z-0"
        >
          <ParallaxText baseVelocity={-5}>
            Keep scrolling to discover more
          </ParallaxText>
          <ParallaxText baseVelocity={5}>
            Keep scrolling to discover more
          </ParallaxText>
        </motion.section>
      </motion.div>
    </div>
  );
}
