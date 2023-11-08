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

export type OptionStatus = boolean | null;

export const selectOptionStatus = (option: Option) =>
  createSelector(
    (state: RootState): ViewState => state.forYou.view,
    (state: ViewState): OptionStatus => {
      const index = state.selected.findIndex(selectById(option.id));
      if (index < 0) return null;
      return index !== 0;
    },
  );
