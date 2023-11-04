import { useEffect } from "react";
import { teachTokApi } from "@data/client";
import { QuestionRepository } from "@data/question";
import { useSelector, useDispatch } from "react-redux";
import {
  selectNextQuestion,
  prevQuestionAction,
  nextQuestionAction,
  addQuestionAction,
} from "@data/question";

const questionRepository = new QuestionRepository({ api: teachTokApi});

export const useNextQuestion = () => {
  const dispatch = useDispatch();

  const { data, isError, isLoading, refetch } =
    questionRepository.nextQuestion();

  useEffect(() => {
    if (isError == false && isLoading == false && data != null) {
      dispatch(addQuestionAction(data));
    }
  }, [isError, isLoading, data]);

  const question = useSelector(selectNextQuestion);

  const next = () => {
    refetch();
    dispatch(nextQuestionAction);
  };

  const prev = () => dispatch(prevQuestionAction);

  return { data: question, isError, isLoading, next, prev };
};
