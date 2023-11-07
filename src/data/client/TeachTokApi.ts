import type { Question, Answer } from "@domain/types";
import type { ForYouResponse, RevealResponse } from "@data/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { questionForYou, revealAnswer } from "@data/question";

export const teachTokApi = createApi({
  reducerPath: "teachTokApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cross-platform.rp.devfactory.com",
  }),
  endpoints: (builder) => ({
    forYou: builder.query<Question, number>({
      query: () => "/for_you",
      onCacheEntryAdded: (data, key) => {
        console.log(`caching ${key}.${data.id}`);
        return `${key}.${data.id}`;
      },
      transformResponse: (data: ForYouResponse): Question =>
        questionForYou(data),
    }),
    reveal: builder.query<Answer[], string>({
      query: (id: string) => `/reveal?id=${id}`,
      transformResponse: (data: RevealResponse): Answer[] => revealAnswer(data),
    }),
  }),
});
