import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQuestion, setError } from "@feature/forYou/state";
import { repository } from "@feature/forYou/repository";

export const useLoadQuestions = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const getNextDelay = () => {
    return Math.min(2 ** index * 2000, 60000);
  };

  const data = repository.forYou(index);

  const { data: question, isError, isLoading, isUninitialized, refetch } = data;

  if (
    question != null &&
    isError == false &&
    isLoading == false &&
    isUninitialized == false
  ) {
    console.log(`loaded ${question.id}`);
    dispatch(addQuestion(question));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`prefetching ${index}`);
      setIndex(index + 1);
      refetch();
    }, getNextDelay());

    return () => clearTimeout(timer);
  }, [dispatch, index]);

  const reset = () => {
    setIndex(0);
    refetch();
  };

  return { index, isError, isLoading, isUninitialized, reset };
};
