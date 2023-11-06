import { useState, useEffect } from "react";
import { teachTokApi as api } from "@data/client";

export const useNextQuestion = () => {
  // use an internal index to track question request tags
  const [current, setCurrent] = useState(0);

  const [isPrefetched, setIsPrefetched] = useState(false);

  console.log(`getting question ${current}`);

  const { data: question, isError, isLoading } = api.useForYouQuery(current);

  // TODO: move prefetch to repository and stay in data layer
  const prefetch = api.usePrefetch("forYou");

  const prefetchNext = () => {
    console.log(`prefetching question ${current + 1}`);
    prefetch(current + 1, { force: true });
    setIsPrefetched(true);
  };

  // automatically prefetch
  useEffect(() => {
    prefetchNext();
  }, [prefetchNext]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return {
    question,
    isError,
    isLoading: isLoading || !isPrefetched,
    next,
    prev,
  };
};
