import { offlineClient } from "@data/client";
import { useState } from "react";

export const queryForYou = (index: number) => {
  const request = () => {
    return {
      data: offlineClient.forYou(index),
      isLoading: false,
      isError: false,
      isUninitialized: false,
      refetch: () => {
        setQuery(request());
      },
    };
  };

  const [query, setQuery] = useState(request());

  return query;
};

export const fetchReveal = (id: string) => {
  return async () => {
    return {
      data: offlineClient.reveal(id),
      isLoading: false,
      isError: false,
      isUninitialized: false,
    };
  };
};

export const localDataSources = [queryForYou, fetchReveal];
