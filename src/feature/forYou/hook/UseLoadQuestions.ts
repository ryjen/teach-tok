import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "@feature/forYou/state";
import { repository } from "@feature/forYou/repository";

export const useLoadQuestions = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const {
    data: question,
    isError,
    isLoading,
    isUninitialized,
    refetch,
  } = repository.forYou(index);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`prefetching ${index}`);
      setIndex(index + 1);
      refetch();
    }, getNextDelay());

    if (
      question != null &&
      isError == false &&
      isLoading == false &&
      isUninitialized == false
    ) {
      console.log(`loaded ${question.id}`);
      dispatch(addQuestion(question));
    }

    return () => clearTimeout(timer);
  }, [dispatch, index, setIndex, refetch, getNextDelay]);

  const getNextDelay = () => {
    return Math.min(2 ** index * 2000, 60000);
  };
  const reset = () => {
    setIndex(0);
    refetch();
  };

  return { index, isError, isLoading, isUninitialized, reset };
};
