import type {OptionResponse} from './Option'

export interface RevealResponse {
  id: string,
  correct_options: Array<OptionResponse>
}
