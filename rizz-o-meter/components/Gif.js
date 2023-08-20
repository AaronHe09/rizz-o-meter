import { Player } from "@lottiefiles/react-lottie-player";
import gif from "../public/assets/question.json";
import React from "react";

const Gif = ({ absolute }) => {
  return (
    <>
      <Player
        src={gif}
        autoplay
        loop
        className={
          absolute === true
            ? "w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]"
            : "w-60"
        }
      ></Player>
    </>
  );
};

export default Gif;
