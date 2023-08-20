import { Player } from "@lottiefiles/react-lottie-player";
import question from "../public/assets/question.json";

import React from "react";

const Gif = () => {
  return (
    <>
      <Player src={question} autoplay loop className=" w-60"></Player>
    </>
  );
};

export default Gif;
