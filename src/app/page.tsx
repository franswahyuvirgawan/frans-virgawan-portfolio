"use client";
import React, { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import Landing from "../components/Landing";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Description from "../components/Description";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-black">
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <Landing />
      <div id="about">
        <Description />
      </div>
      <About />
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
