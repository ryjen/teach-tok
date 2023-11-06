import type { RootState, AppState } from "@application/types";
import { createSelector } from "@reduxjs/toolkit";

export const selectTimeInApp = createSelector(
  (state: RootState): AppState => state.app,
  (state: AppState): number => state.timeInApp,
);
