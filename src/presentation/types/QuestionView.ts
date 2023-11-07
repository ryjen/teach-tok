import type { Question } from "@domain/types";

export interface QuestionView {
  question: Question | null;
  tab: string;
  time: number;
}
