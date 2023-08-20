import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 left-1/2 transform -translate-y-1/2 flex flex-col gap-4 animate-slideIn text-center">
      <div>
        <Link
          href="https://github.com/AaronHe09"
          className="font-anonymous text-xl"
        >
          GitHub
        </Link>
        <span className="font-anonymous text-xl">|</span>
        <Link
          href="https://www.linkedin.com/in/aaronhe09/"
          className="font-anonymous text-xl"
        >
          LinkedIn
        </Link>
      </div>
      <p className="font-anonymous text">aaronhe09@yahoo.com</p>
    </footer>
  );
};

export default Footer;
