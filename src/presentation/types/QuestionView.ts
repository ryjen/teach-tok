import type { Question } from "@domain/types";

export interface QuestionView {
  question: Question | null;
  selected: Set<string>;
  numCorrect: number;
}
