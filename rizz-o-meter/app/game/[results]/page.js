"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Results = () => {
  const [ranking, setRanking] = useState("");
  const { results } = useParams();
  const route = useRouter();

  useEffect(() => {
    setRanking(playerRanking());
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
    route.push("/");
  };

  return (
    <section className="flex justify-center items-center max-w-[600px] w-full h-[600px] gap-5">
      <div className="basis-5/12 bg-white h-full rounded-xl"></div>
      <div className="basis-7/12 h-full text-center">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-black cursor-default orange_gradient mb-2">
          {ranking}
        </h1>
        <p className="mt-1 text-lg sm:text-xl">You Scored: {results} Points</p>
      </div>
    </section>
  );
};

export default Results;

{
  /* <h1 className="text-center text-5xl md:text-6xl font-extrabold text-black cursor-default orange_gradient mb-2">
        {ranking}
        <p className="mt-1">You Scored: {results} Points</p>
      </h1>
      {ranking === "Master Rizz" && (
        <form className="flex justify-center gap-5">
          <textarea
            id="advice"
            name="advice"
            spellCheck={true}
            rows={2}
            className="bg-transparent outline outline-1 resize-none max-w-[200px] w-full rounded-lg"
          ></textarea>
          <button>Submit</button>
        </form>
      )}
      <button
        type="button"
        onClick={handlePlayAgain}
        className="text-2xl sm:text-3xl mt-5 bg-white py-4 max-w-sm w-full hover:shadow-xl transition-shadow duration-300 rounded-lg"
      >
        Play Again
      </button> */
}
