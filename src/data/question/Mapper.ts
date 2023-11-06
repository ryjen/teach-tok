import type {
  ForYouResponse,
  RevealResponse,
  UserResponse,
  OptionResponse,
} from "@data/types";
import type { Question, User, Answer } from "@domain/types";
import FastImage from "react-native-fast-image";

export const questionForYou = (data: ForYouResponse) => {
  // TODO: move to presentation layer
  console.log(`preloading ${data.image}`);
  FastImage.preload([{ uri: data.image, priority: FastImage.priority.high }]);

  return <Question>{
    id: data.id,
    playlist: data.playlist,
    description: data.description,
    image: data.image,
    question: data.question,
    options: data.options.map(domainAnswer),
    user: domainUser(data.user),
  };
};

export const domainAnswer = (data: OptionResponse) =>
  <Answer>{ id: data.id, value: data.answer };

export const domainUser = (data: UserResponse) =>
  <User>{ name: data.name, avatar: data.avatar };

export const revealAnswer = (data: RevealResponse) =>
  data.correct_options.map(
    (option) =>
      <Answer>{
        id: option.id,
        value: option.answer,
      },
  );
