import React from "react";
import Gif from "./Gif";

const Question = ({ questions, currentQuestion }) => {
  return (
    <div className="relative">
      <div className="rectangle bg-white py-8 px-20 ">
        <p className="text-center text-sm sm:text-lg cursor-default max-w-[242px] sm:max-w-none">
          {questions[currentQuestion].question}
        </p>
      </div>
      <div className=" w-24 h-24 bg-white absolute top-[-30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg rotate-45"></div>
      <div className=" w-8 h-8 bg-white absolute bottom-[-10px] left-12 rotate-45 z-[-1]"></div>
      <Gif absolute={true} />
    </div>
  );
};

export default Question;
