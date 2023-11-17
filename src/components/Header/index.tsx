"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Preloader from "../Preloader";
import { AnimatePresence, motion } from "framer-motion";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const data = [
    { name: "Work", href: "work" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenText, setMenuOpenText] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i: any) => ({
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setMenuOpenText(menuOpen);
    }, 400);
  }, [menuOpen]);

  const handleClick = () => {
    if (!loading) {
      // Cek apakah loading sudah true atau false
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      });
    }
  };

  const handleTest = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:px-20  px-10 py-8 text-sm bg-black fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 border-slate-50/[0.06] text-white supports-backdrop-blur:bg-white/60 bg-transparent">
      <div className="absolute z-30 left-0 right-0">
        <AnimatePresence mode="wait">
          {loading && <Preloader />}
        </AnimatePresence>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Link onClick={handleClick} href="/">
          Frans Virgawan
        </Link>
        <div className="lg:flex flex-row items-center gap-12 hidden">
          <Link onClick={handleClick} href="/#about">
            About
          </Link>
          <Link onClick={handleClick} href="/#work">
            Work
          </Link>
          <Link onClick={handleClick} href="/#contact">
            Contact
          </Link>
        </div>
        <div className="lg:hidden">
          <motion.p
            animate={{ color: menuOpen ? "#000" : "#fff" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative text-black z-50 top-0"
            onClick={handleMenuClick}
          >
            {menuOpen ? "Back" : "Menu"}
          </motion.p>
        </div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: menuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="bg-white  h-screen top-0 left-0 right-0 bottom-0 w-full fixed lg:hidden"
        >
          <div className="flex flex-col text-black uppercase justify-center items-center h-full gap-24">
            {data.map((item, key) => (
              <Link
                onClick={handleTest}
                key={key}
                href={`/#${item.href}`}
                className="overflow-hidden block"
              >
                <motion.p
                  custom={key}
                  animate={menuOpenText ? "open" : "closed"}
                  variants={slideUp}
                  className="text-lg block"
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
