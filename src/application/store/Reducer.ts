import {questionReducer} from '@data/question'
import {teachTokApi} from '@data/client'

export const rootReducer = combineReducers({
  questions: questionReducer, 
  [teachTokApi.reducerPath]: teachTokApi.reducer,
})

