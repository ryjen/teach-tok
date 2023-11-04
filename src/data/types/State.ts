import type {Question} from '@domain/types'

export interface QuestionState {
  questions: Array<Question>
  currentQuestion: number
}
