"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import Advice from "@/components/Advice";

const Results = () => {
  const [ranking, setRanking] = useState("");
  const [isShowing, setIsShowing] = useState(true);
  const [advices, setAdvices] = useState([]);
  const { results } = useParams();
  const router = useRouter();

  useEffect(() => {
    setRanking(playerRanking());
    const getAdvices = async () => {
      const res = await fetch(`${window.location.href}/api/advice`);
      const data = await res.json();
      setAdvices(data);
    };
    getAdvices();
  }, []);

  const playerRanking = () => {
    if (results > 0 && results < 15) {
      return "Beginner Rizz";
    } else if (results < 21) {
      return "Intermediate Rizz";
    } else if (results < 26) {
      return "Advanced Rizz";
    } else {
      return "Master Rizz";
    }
  };

  const handlePlayAgain = () => {
    setIsShowing(false);
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const items = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        easeOut,
      },
    },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.section
          className="flex justify-center items-center  w-full h-[600px] gap-5 flex-col-reverse md:flex-row"
          variants={variant}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div
            className="basis-2/3 bg-white h-full rounded-xl w-full overflow-y-scroll break-words p-3"
            variants={items}
          >
            <Advice advices={advices} />
          </motion.div>
          <motion.div
            className="basis-1/3 h-full text-center w-full"
            variants={items}
          >
            <div>
              <h1 className="text-center text-5xl font-extrabold text-black cursor-default orange_gradient mb-2">
                {ranking}
              </h1>
              <p className="mt-1 text-lg sm:text-xl cursor-default">
                You Scored: {results} Points
              </p>
            </div>
            <Form ranking={ranking} />
            <button
              type="button"
              className="mt-2 text-lg py-1 px-5 rounded-md bg-black text-white"
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Results;
