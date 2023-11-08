import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "@feature/forYou/state";
import { selectQuestions } from "@feature/forYou/selector";
import { repository } from "@feature/forYou/repository";

export const useLoadQuestions = (index: number) => {
  const dispatch = useDispatch();

  const data = repository.forYou(index);

  const [prefetch, setPrefetch] = useState(3);

  const { data: question, isError, isLoading, refetch } = data;

  const questions = useSelector(selectQuestions);

  useEffect(() => {
    if (question != null && isError == false && isLoading == false) {
      console.log(`loaded ${question.id}`);
      dispatch(addQuestion(question));
      if (questions.length < prefetch) {
        refetch();
        setPrefetch(prefetch + Math.floor(prefetch / 2));
      }
    }
  }, [questions, isError, isLoading, refetch, question, dispatch]);

  return { questions, isError, isLoading, refetch };
};
