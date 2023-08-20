import { Player } from "@lottiefiles/react-lottie-player";
import gif from "../public/assets/question.json";
import React from "react";
import { transform } from "framer-motion";

const Gif = ({ absolute }) => {
  return (
    <>
      <Player
        src={gif}
        autoplay
        loop
        className={
          absolute === true
            ? "w-24 absolute  top-[-30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            : "w-60"
        }
      ></Player>
    </>
  );
};

export default Gif;
