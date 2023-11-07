import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestionAction, selectQuestions } from "@data/question";
import { teachTokApi as api } from "@data/client";

export const useNextQuestion = (index: number) => {
  const questions = useSelector(selectQuestions);

  const {
    data: question,
    isError,
    isLoading,
    refetch,
  } = api.useForYouQuery(index);

  const dispatch = useDispatch();

  useEffect(() => {
    if (question && isError == false && isLoading == false) {
      if (
        // already exists and less the 3 questions exist
        questions.findIndex((q) => q.id == question.id) !== -1 &&
        questions.length < 3
      ) {
        console.log(`looking for another question`);
        refetch();
      } else {
        console.log(`adding ${question?.id}`);
        dispatch(addQuestionAction(question));
      }
    }
  }, [dispatch, question, isError, isLoading, questions, refetch]);

  return { questions, isError, isLoading, refetch };
};
