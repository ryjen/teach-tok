import { range as rand } from "@domain/Random";
import type {
  ForYouResponse,
  RevealResponse,
  OptionResponse,
} from "@data/types";

const correctID = "1337";

const forYou = (index: number): ForYouResponse => {
  const a = rand(10, 999) + index;
  const b = rand(10, 999) + index;

  return {
    type: "mcq",
    id: rand(1000, 9999),
    playlist: `A playlist ${rand(10, 99)}`,
    description: `This is a randomly generated test question ${index}`,
    image: `https://picsum.photos/200/300?index=${rand(1000, 9999)}`,
    question: `What is ${a} + ${b}?`,
    options: [
      <OptionResponse>{
        id: rand(100, 999).toString(),
        answer: `${a - b}`,
      },
      <OptionResponse>{
        id: rand(100, 999).toString(),
        answer: `${a * b}`,
      },
      <OptionResponse>{
        id: correctID,
        answer: `${a + b}`,
      },
    ],
    user: {
      name: "Test User",
      avatar: `https://picsum.photos/50/50?index=${index}`,
    },
  };
};

const reveal = (id: string): RevealResponse => {
  return {
    id: id,
    correct_options: [
      <OptionResponse>{
        id: correctID,
        answer: "What is a + b?",
      },
    ],
  };
};

export const offlineClient = {
  forYou,
  reveal,
};
