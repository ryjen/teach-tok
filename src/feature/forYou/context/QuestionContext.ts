import type { Question } from "@domain/types";
import { createContext, useContext } from "react";

export const QuestionContext = createContext<Question | null>(null);

export const useQuestionContext = (): Question | null =>
  useContext(QuestionContext);
