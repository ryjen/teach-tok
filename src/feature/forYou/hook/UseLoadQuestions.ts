import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "@feature/forYou/state";
import { selectQuestions, selectById } from "@feature/forYou/selector";
import { default as repository } from "@feature/forYou/repository";

export const useLoadQuestions = (index: number) => {
  const dispatch = useDispatch();

  const data = repository.forYou(index);

  const { data: question, isError, isLoading, refetch } = data;

  const questions = useSelector(selectQuestions);

  useEffect(() => {
    if (question != null && isError == false && isLoading == false) {
      if (
        // already exists and less the 3 questions exist for a demo
        // TODO: request backend change
        questions.some(selectById(question.id)) == true &&
        questions.length < 3
      ) {
        refetch();
      } else {
        dispatch(addQuestion(question));
      }
    }
  }, [dispatch, question, isError, isLoading, questions, refetch]);

  return { questions, isError, isLoading, refetch };
};
