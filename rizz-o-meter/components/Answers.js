import React from "react";

const Answers = ({ questions, currentQuestion }) => {
  return (
    <div className="relative ml-16 before:content-[''] before:absolute before:left-[-1px] before:top-[-2px] before:h-64 sm:before:h-[260px] before:border-l-2 before:border-dotted before:border-white">
      {questions[currentQuestion].options.map((option) => {
        return (
          <div className="relative text-sm sm:text-lg cursor-default ml-5 mt-5 pl-7 py-4 rounded-xl bg-white">
            <p className="before:absolute before:transform before:-translate-y-1/2 before:top-1/2 before:left-[-10px] before:h-[2px] before:w-5 before:bg-white before:z-[-1]">
              {option.text}
            </p>
            <div className="rounded-full h-6 w-6 absolute bg-black border-solid border-2 border-white top-1/2 transform -translate-y-1/2  left-[-32px]">
              <div className="relative bg-white h-2 w-2 rounded full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
