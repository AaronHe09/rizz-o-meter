"use client";
import Answers from "@/components/Answers";
import Gif from "@/components/Gif";
import Question from "@/components/Question";
import { useState } from "react";

const questions = [
  {
    question: "What's your preferred superhero alter ego?",
    options: [
      { text: "The Dynamic Dancer", points: 3 },
      { text: "The Mighty Muncher (of snacks)", points: 1 },
      { text: "The Laughing Lifter (of spirits)", points: 2 },
      { text: "The Fearless Napper", points: 1 },
    ],
  },
  {
    question: "When it's raining outside, you're most likely to:",
    options: [
      { text: "Dance like nobody's watching", points: 3 },
      { text: "Sing in the rain", points: 2 },
      { text: "Create a cozy blanket fort", points: 1 },
      { text: "Splash in puddles", points: 2 },
    ],
  },
  {
    question: "Your secret talent is:",
    options: [
      { text: "Juggling random objects", points: 2 },
      { text: "Impersonating cartoon characters", points: 3 },
      { text: "Balancing spoons on your nose", points: 1 },
      { text: "Making your pet laugh", points: 2 },
    ],
  },
  {
    question: "Choose your ultimate karaoke song:",
    options: [
      { text: "\"Don't Stop Believin'\" – Journey", points: 2 },
      { text: '"Happy" – Pharrell Williams', points: 3 },
      { text: '"I Will Survive" – Gloria Gaynor', points: 1 },
      { text: '"Bohemian Rhapsody" – Queen', points: 2 },
    ],
  },
  {
    question: "Your favorite way to start the day is by:",
    options: [
      { text: "Doing a spontaneous dance routine", points: 3 },
      { text: "Telling a joke to your mirror reflection", points: 2 },
      { text: "Creating a silly morning mantra", points: 1 },
      { text: "Greeting your pet with a dramatic monologue", points: 2 },
    ],
  },
  {
    question: "What's your go-to dance move when no one's watching?",
    options: [
      { text: "The Spontaneous Shimmy", points: 2 },
      { text: "The Funky Chicken", points: 3 },
      { text: "The Robot", points: 1 },
      { text: "The Moonwalk (attempted, at least)", points: 2 },
    ],
  },
  {
    question: "If you could have a conversation with any animal, you'd choose:",
    options: [
      { text: "Squirrels – they seem to have a lot of secrets", points: 2 },
      { text: "Dolphins – they're probably great storytellers", points: 3 },
      { text: "Cats – they'd give the most mysterious advice", points: 1 },
      {
        text: "Parrots – they'd repeat your own wisdom back to you",
        points: 2,
      },
    ],
  },
  {
    question: "Your ideal vacation destination is:",
    options: [
      { text: "A magical theme park", points: 3 },
      { text: "A tropical island with dancing palm trees", points: 2 },
      { text: "A cozy cabin in the mountains", points: 1 },
      { text: "Anywhere with a built-in giggling contest", points: 2 },
    ],
  },
  {
    question: "What's your signature dance move?",
    options: [
      { text: "The Rizz Roll", points: 2 },
      { text: "The Giggle Groove", points: 3 },
      { text: "The Chuckle Cha-Cha", points: 1 },
      { text: "The LOL Leap", points: 2 },
    ],
  },
  {
    question: "What's your spirit animal?",
    options: [
      { text: "Silly Seal", points: 2 },
      { text: "Laughing Llama", points: 3 },
      { text: "Giggling Gecko", points: 1 },
      { text: "Playful Penguin", points: 2 },
    ],
  },
];

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section className="max-w-[462px] w-full">
      <Question questions={questions} currentQuestion={currentQuestion} />
      <Answers currentQuestion={currentQuestion} questions={questions} />
    </section>
  );
};

export default Game;
