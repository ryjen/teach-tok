import type { Question, User, Option } from "@domain/types";
import type { ForYouResponse, UserResponse, OptionResponse } from "@data/types";
import FastImage from "react-native-fast-image";
import { range as rand } from "@domain/Random";

export const questionForYou = (data: ForYouResponse) => {
  FastImage.preload([{ uri: data.image, priority: FastImage.priority.high }]);

  return <Question>{
    id: data.id,
    playlist: data.playlist,
    description: data.description,
    image: data.image,
    question: data.question,
    options: data.options.map(optionFromResponse),
    answers: [],
    user: userFromResponse(data.user),
    likes: rand(50, 150),
    comments: rand(50, 150),
    bookmarks: rand(50, 150),
    shares: rand(50, 150),
  };
};

const optionFromResponse = (data: OptionResponse) =>
  <Option>{ id: data.id, value: data.answer, isCorrect: false };

export const userFromResponse = (data: UserResponse) =>
  <User>{ name: data.name, avatar: data.avatar };
