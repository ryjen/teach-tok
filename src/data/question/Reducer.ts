import type {Question} from '@domain/types'
import type {QuestionState as State} from '@data/types'
import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

const initialState: State = {
  questions: [],
  currentQuestion: -1
}

const slice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    add: (state: State, action: PayloadAction<Question>) => {
      const i = state.questions.findIndex(question => question.id == action.payload.id)
      if (i !== -1) {
	state.questions.splice(i, 1)
      }
      state.questions.push(action.payload)
    },
    current: (state: State, action: PayloadAction<number>) => {
      state.currentQuestions = action.payload
    },
  },
})

export const reducer = slice.reducer

export const {add, current} = slice.actions
