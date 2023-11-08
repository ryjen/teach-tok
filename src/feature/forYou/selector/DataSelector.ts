import type { Question, Option } from "@domain/types";
import type { RootState } from "@application/types";
import type { DataState, ForYouState, ViewState } from "@feature/forYou/types";
import { createSelector } from "@reduxjs/toolkit";
import { selectById } from "./ViewSelector";

export const selectQuestions = createSelector(
  (state: RootState): DataState => state.forYou.data,
  (state: DataState): Array<Question> => state.questions,
);

export const selectForYouView = createSelector(
  (state: RootState): ForYouState => state.forYou,
  (state: ForYouState): ViewState => state.view,
);

export const selectOptionIsSelected = (option: Option) =>
  createSelector(
    (state: RootState): ViewState => state.forYou.view,
    (state: ViewState): boolean => state.selected.some(selectById(option.id)),
  );

export const selectQuestionIncomplete = createSelector(
  (state: RootState): ViewState => state.forYou.view,
  (state: ViewState): boolean => state.numCorrect > state.selected.length,
);

export const selectQuestionCorrect = createSelector(
  (state: RootState): ViewState => state.forYou.view,
  (state: ViewState): boolean =>
    state.selected.every((option) => option.isCorrect),
);
