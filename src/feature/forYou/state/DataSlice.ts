import type { ForYouResponse, RevealResponse } from "@data/types";
import type { DataState as State } from "@feature/forYou/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { questionForYou } from "@feature/forYou/transform";
import { selectById } from "@feature/forYou/selector";

const initialState: State = {
  questions: [],
};

const slice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state: State, action: PayloadAction<ForYouResponse>) => {
      if (state.questions.some(selectById(action.payload.id)) == false) {
        state.questions.push(questionForYou(action.payload));
      }
      // TODO: handle replacing stale data
    },
    addAnswers: (state: State, action: PayloadAction<RevealResponse>) => {
      const { id, correct_options: options } = action.payload;
      const question = state.questions.find(selectById(id));

      const correct = new Set<string>(options.map((opt) => opt.id));

      // TODO: immutable
      question?.options.forEach((opt) => {
        opt.isCorrect = correct.has(opt.id);
      });
    },
  },
});

export const dataReducer = slice.reducer;

export const { addQuestion, addAnswers } = slice.actions;
