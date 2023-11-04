import type {Answer} from './Answer'

export interface Question {
  id: number,
  playlist: string,
  description: string,
  image: string,
  question: string,
  options: Array<Answer>,
  user: User,
}
