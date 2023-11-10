import type { PayloadAction } from "@reduxjs/toolkit";
import type { Option } from "@domain/types";
import type { ViewState as State } from "@feature/forYou/types";
import { selectById } from "@feature/forYou/selector";
import { addAnswers } from "./DataSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState: State = {
  selected: [],
  numCorrect: 0,
};

const slice = createSlice({
  name: "forYou/view",
  initialState,
  reducers: {
    toggleOption: (state: State, action: PayloadAction<Option>) => {
      const index = state.selected.findIndex(selectById(action.payload.id));
      if (index === -1) {
        state.selected.push(action.payload);
      } else {
        state.selected.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAnswers, (state, action) => {
      state.selected = [];
      state.numCorrect = action.payload.correct_options.length;
    });
  },
});

export const viewReducer = slice.reducer;

export const { toggleOption, setError } = slice.actions;
