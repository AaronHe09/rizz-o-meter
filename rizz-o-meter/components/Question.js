import React from "react";
import Gif from "./Gif";
import { motion } from "framer-motion";
import uuid from "react-uuid";

const Question = ({ questions, currentQuestion, items }) => {
  return (
    <motion.div className="relative mb-2" variants={items} key={uuid()}>
      <div className="rectangle bg-white py-8 px-20 ">
        <p className="text-center text-sm sm:text-lg cursor-default max-w-[242px] sm:max-w-none m-auto">
          {questions[currentQuestion].question}
        </p>
      </div>
      <div className=" w-24 h-24 bg-white absolute top-[-30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg rotate-45"></div>
      <div className=" w-8 h-8 bg-white absolute bottom-[-10px] left-12 rotate-45 z-[-1]"></div>
      <Gif absolute={true} />
    </motion.div>
  );
};

export default Question;
