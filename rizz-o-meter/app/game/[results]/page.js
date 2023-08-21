"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

const Results = () => {
  const [ranking, setRanking] = useState("");
  const [userAdvice, setUserAdvice] = useState("");
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
    <section className="flex justify-center items-center  w-full h-[600px] gap-5">
      <div className="basis-5/12 bg-white h-full rounded-xl"></div>
      <div className="basis-7/12 h-full text-center">
        <div>
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-black cursor-default orange_gradient mb-2">
            {ranking}
          </h1>
          <p className="mt-1 text-lg sm:text-xl">
            You Scored: {results} Points
          </p>
        </div>
        <Form
          ranking={ranking}
          setUserAdvice={setUserAdvice}
          userAdvice={userAdvice}
        />
        <button
          type="button"
          className="mt-2 text-lg py-1 px-5 rounded-md bg-black text-white"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Results;
