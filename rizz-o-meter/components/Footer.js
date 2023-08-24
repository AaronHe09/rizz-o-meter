"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import uuid from "react-uuid";

const Footer = () => {
  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.footer
        className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col text-center z-50"
        variants={variant}
        initial="hidden"
        animate="show"
        key={uuid()}
      >
        <div>
          <a
            href="https://github.com/AaronHe09"
            className="font-anonymous text-xl"
          >
            GitHub
          </a>
          <span className="font-anonymous text-xl m-2">|</span>
          <a
            href="https://www.linkedin.com/in/aaronhe09/"
            className="font-anonymous text-xl"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-anonymous text">aaronhe09@yahoo.com</p>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
