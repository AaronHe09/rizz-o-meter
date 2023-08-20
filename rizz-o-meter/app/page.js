"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import question from "../public/assets/question.json";
import "animate.css";

export default function Home() {
  return (
    <section className="text-center flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.15] text-black cursor-default animate__animated animate__fadeInDown">
        Welcome to <br className="sm:hidden" />
        Rizz-O-Meter
        <br />
        <span className="orange_gradient inline-block mt-2">
          Unleash Your <br className="sm:hidden" />
          Inner "Rizz"!
        </span>
      </h1>
      <Player src={question} autoplay loop className=" w-60"></Player>
      <p className="text-center text-md text-lg cursor-default animate__animated animate__fadeInDown max-w-[242px] sm:max-w-none">
        You're about to embark on a playful journey to determine your "Rizz"
        level.
      </p>
      <button
        type="button"
        className=" bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 mt-7 rounded-lg animate__animated animate__fadeIn text-2xl border-none py-2 w-52 hover:scale-110 transition-all duration-500"
      >
        Get Started
      </button>
    </section>
  );
}
