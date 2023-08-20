"use client";
import React from "react";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";

const Footer = () => {
  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.footer
      className=" absolute bottom-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col text-center"
      variants={variant}
      initial="hidden"
      animate="show"
    >
      <div>
        <Link
          href="https://github.com/AaronHe09"
          className="font-anonymous text-xl"
        >
          GitHub
        </Link>
        <span className="font-anonymous text-xl m-2">|</span>
        <Link
          href="https://www.linkedin.com/in/aaronhe09/"
          className="font-anonymous text-xl"
        >
          LinkedIn
        </Link>
      </div>
      <p className="font-anonymous text">aaronhe09@yahoo.com</p>
    </motion.footer>
  );
};

export default Footer;
