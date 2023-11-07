import type { RootState } from "@application/types";
import type { QuestionState } from "@data/types";
import type { Question } from "@domain/types";
import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentQuestion = createSelector(
  (state: RootState): QuestionState => state.questions,
  (state: QuestionState): Question | null => {
    if (state.current > 0 && state.current < state.data.length) {
      return state.data[state.current];
    }
    return null;
  },
);

export const selectQuestions = createSelector(
  (state: RootState): QuestionState => state.questions,
  (state: QuestionState): Array<Question> | null => state.data,
);
