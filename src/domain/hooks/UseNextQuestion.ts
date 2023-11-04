
import {teachTokApi} from '@data/client'
import {QuestionRepository} from '@data/question'
import {useSelector, useDispatch} from 'react-redux'
import {selectNextQuestion, setCurrentQuestion} from '@data/question'

const questionRepository = new QuestionRepository(teachTokApi)

export const useNextQuestion = () => {
  const dispatch = useDispatch()

  const {data, isError, isLoading, refetch} = questionRepository.useNextQuestionQuery()

  useEffect( () => {
    if (!isError && !isLoading && data) {
      dispatch(addQuestion(data))
    }
  }, [isError, isLoading, data])

  const questions = useSelector(selectQuestions)

  const next = () => {
  }

  const prev = () => {
    dispatch(setCurrentQuestion(d
  }

  return {question, isError, isLoading, next, prev}

}
