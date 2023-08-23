import React from "react";
import Gif from "./Gif";
import { motion } from "framer-motion";
import uuid from "react-uuid";

const Question = ({ questions, currentQuestion, items }) => {
  return (
    <motion.div className="relative mb-2" variants={items} key={uuid()}>
      <div className="bg-white py-6 px-10 sm:py-8 sm:px-20">
        <p className="text-center text-lg cursor-default max-w-[242px] sm:max-w-none m-auto text-sm sm:text-lg">
          {questions[currentQuestion].question}
        </p>
      </div>
      <div className=" w-24 h-24 bg-white absolute top-[-40px] sm:top-[-30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg rotate-45">
        <Gif absolute={true} />
      </div>
      <div className=" w-8 h-8 bg-white absolute bottom-[-10px] left-12 rotate-45 z-[-1]"></div>
    </motion.div>
  );
};

export default Question;
