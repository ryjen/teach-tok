import type {ForYouResponse} from '@data/types'
import type {Question, User, Answer} from '@domain/types'

export const questionsForYou = (data: ForYouResponse) => <Question>{
  id: data.id,
  playlist: data.playlist,
  description: data.description,
  image: data.image,
  question: data.question,
  options: data.options.map( option => <Answer>{ id: option.id, value: id.answer }),
  user: <User>{ name: data.name, avatar: data.avatar },
}
