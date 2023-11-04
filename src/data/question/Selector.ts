import type { RootState } from "@application/types";
import type { QuestionState } from "@data/types";
import type { Question } from "@domain/types";
import { createSelector } from "@reduxjs/toolkit";

export const selectNextQuestion = createSelector(
  (state: RootState): QuestionState => state.questions,
  (state: QuestionState): Question | null => {
    if (
      state.currentQuestion > 0 &&
      state.currentQuestion < state.questions.length
    ) {
      return state.questions[state.currentQuestion];
    }
    return null;
  },
);
