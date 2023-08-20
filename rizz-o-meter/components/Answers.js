import React from "react";
import clsx from "clsx";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import uuid from "react-uuid";

const Answers = ({ questions, currentQuestion, variant, items }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="relative ml-16 before:content-[''] before:absolute before:left-[-1px] before:top-[-2px] before:h-64 sm:before:h-[260px] before:border-l-2 before:border-dotted before:border-white"
        variants={variant}
        initial="hidden"
        animate="show"
        exit="hidden"
        key={uuid()}
      >
        {questions[currentQuestion].options.map((option, index) => {
          return (
            <motion.div
              className="relative text-sm sm:text-lg cursor-default ml-5 mt-5 pl-7 py-4 rounded-xl bg-white"
              variants={items}
              key={uuid}
            >
              <button
                type="button"
                className="before:absolute before:transform before:-translate-y-1/2 before:top-1/2 before:left-[-10px] before:h-[2px] before:w-5 before:bg-white before:z-[-1]"
              >
                {option.text}
              </button>
              <div
                className={clsx(
                  "rounded-full h-6 w-6 absolute bg-black border-solid border-2 border-white top-1/2 transform -translate-y-1/2  left-[-32px]",
                  { "bg-yellow-300": index === 0 },
                  { "bg-green-400": index === 1 },
                  { "bg-rose-800": index === 2 },
                  { "bg-cyan-400": index === 3 }
                )}
              >
                <div className="relative bg-white h-[7px] w-[7px] rounded full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default Answers;
