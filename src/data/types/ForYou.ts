import type {OptionResponse} from './Option'
import type {UserResponse} from './User'

export interface ForYouResponse {
  type: string,
  id: number,
  playlist: string,
  description: string,
  image: string,
  question: string,
  options: Array<OptionResponse>,
  user: UserResponse,
}
