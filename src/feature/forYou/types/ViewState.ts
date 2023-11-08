import type { Option, Question } from "@domain/types";

export interface ViewState {
  selected: Array<Option>;
  numCorrect: number;
}

export interface QuestionViewState {
  question: Question | null;
  view: ViewState;
}
