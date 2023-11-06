import type { QuestionView } from "@presentation/types";
import { createContext, useContext } from "react";

export const QuestionContext = createContext<QuestionView | null>(null);

export const useQuestionView = (): QuestionView =>
  useContext(QuestionContext) || {
    question: null,
    tab: "",
    time: 0,
    likes: 0,
    comments: 0,
    bookmarks: 0,
    shares: 0,
  };
