import type { AppState as State } from "@application/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeInApp: 0,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateTimeInApp: (state: State) => {
      state.timeInApp = Date.now();
    },
  },
});

export const { updateTimeInApp } = slice.actions;

export const reducer = slice.reducer;
