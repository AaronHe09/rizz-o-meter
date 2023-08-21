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
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-black cursor-default orange_gradient mb-2">
        {ranking}
        <p className="mt-1">You Scored: {results} Points</p>
      </h1>
      <button
        type="button"
        onClick={handlePlayAgain}
        className="text-2xl sm:text-3xl mt-5 bg-white py-4 w-full hover:shadow-xl transition-shadow duration-300 rounded-lg"
      >
        Play Again
      </button>
    </section>
  );
};

export default Results;
