import type { Question } from "@domain/types";
import type { QuestionState as State } from "@data/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: State = {
  data: [],
  current: -1,
  isLoading: true,
  isError: false,
};

const slice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    add: (state: State, action: PayloadAction<Question>) => {
      const i = state.data.findIndex(
        (question) => question.id == action.payload.id,
      );
      if (i === -1) {
        state.data.push(action.payload);
      }
    },
    next: (state: State) => {
      if (state.current + 1 < state.data.length) {
        state.current = state.current + 1;
      }
    },
    prev: (state: State) => {
      if (state.current > 0) {
        state.current = state.current - 1;
      }
    },
  },
});

export const reducer = slice.reducer;

export const { add, next, prev } = slice.actions;
