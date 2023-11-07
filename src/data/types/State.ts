import type { Question } from "@domain/types";

export interface QuestionState {
  data: Array<Question>;
  current: number;
  isLoading: boolean;
  isError: boolean;
}
