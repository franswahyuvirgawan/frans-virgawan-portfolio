import { useIslg } from "@/hooks/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface dataItem {
  name: string;
  href: string;
}

interface ListData {
  listData: dataItem;
}

const LinkButton: React.FC<ListData> = ({ listData }) => {
  const useIsLarge = useIslg();
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={{
        color: useIsLarge ? (hover ? "#000000" : "#ffffff") : "#ffffff",
      }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="relative z-0 overflow-hidden rounded-full"
    >
      <a
        className="px-8 relative z-10 border h-14 flex flex-col justify-center rounded-full tracking-wide lg:text-base text-sm"
        href={listData.href}
      >
        {listData.name}
      </a>
      <motion.div
        animate={{ right: useIsLarge ? (hover ? "0%" : "100%") : "100%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute z-0 bg-white h-full w-full border top-0 rounded-full"
      ></motion.div>
    </motion.div>
  );
};

export default function Index() {
  const useIsLarge = useIslg();
  const data = [
    { name: "franswahyu7@gmail.com", href: "" },
    { name: "+62 878 5206 0215", href: "" },
  ];

  const description = useRef(null);
  const isInView = useInView(description);

  const slideUp = {
    initial: {
      width: "0%",
    },
    open: {
      width: "100%",
      transition: { duration: 1.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 },
    },
    closed: {
      width: "0%",
      transition: { duration: 0.5 },
    },
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <motion.div
      ref={container}
      style={{ y: useIsLarge ? y : 0 }}
      className="h-screen backdrop-blur-sm w-full bg-black relative z-0 flex flex-col justify-center"
    >
      <motion.div className="w-full absolute z-0 h-full flex flex-col items-start justify-center lg:px-20 px-10 gap-12">
        <div className="flex flex-col gap-9">
          <h1 className="lg:text-[80px] text-3xl leading-normal tracking-wide text-white">
            Let&apos;s work together
          </h1>
          <motion.div
            ref={description}
            initial="initial"
            variants={slideUp}
            animate={isInView ? "open" : "closed"}
            className="border-t-2"
          ></motion.div>
        </div>
        <div className="flex lg:flex-row flex-col items-start gap-6 lg:items-center">
          {data.map((item, index) => (
            <LinkButton key={index} listData={item} />
          ))}
        </div>
      </motion.div>
      <div className="lg:px-20 px-10 py-10 text-sm bg-black absolute z-20 bottom-0 text-white w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06]  supports-backdrop-blur:bg-white/60 bg-transparent">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end">
          <Link className="lg:block hidden" href="/">
            Frans Virgawan
          </Link>
          <div className="w-full lg:w-min flex flex-col gap-6">
            <p>Social</p>
            <div className="flex flex-row items-center gap-12 justify-between">
              <Link
                href="https://www.instagram.com/franswahyuu/"
                passHref={true}
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/in/fran-s-wahyu-virgawan-0b35441bb/"
                passHref={true}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/franswahyuvirgawan"
                passHref={true}
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
