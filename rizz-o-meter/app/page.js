"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import question from "../public/assets/question.json";
import { useRouter } from "next/navigation";
import { easeOut, motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const items = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        easeOut,
      },
    },
  };

  const handleClick = () => {
    router.push("/game");
  };

  return (
    <motion.section
      className="text-center flex flex-col justify-center items-center"
      variants={variant}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold leading-[1.15] text-black cursor-default"
        variants={items}
      >
        Welcome to <br className="sm:hidden" />
        Rizz-O-Meter
        <br />
        <motion.span className="orange_gradient inline-block mt-2">
          Unleash Your <br className="sm:hidden" />
          Inner "Rizz"!
        </motion.span>
      </motion.h1>
      <Player src={question} autoplay loop className=" w-60"></Player>
      <motion.p
        className="text-center text-md text-lg cursor-default max-w-[242px] sm:max-w-none"
        variants={items}
      >
        You're about to embark on a playful journey to determine your "Rizz"
        level.
      </motion.p>
      <motion.button
        type="button"
        className=" bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 mt-7 rounded-lg text-2xl border-none py-2 w-52"
        onClick={handleClick}
        variants={items}
      >
        Get Started
      </motion.button>
    </motion.section>
  );
}
