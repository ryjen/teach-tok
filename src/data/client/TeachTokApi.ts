import type { ForYouResponse, RevealResponse } from "@data/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teachTokApi = createApi({
  reducerPath: "teachTokApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_API_DOMAIN}`,
  }),
  endpoints: (builder) => ({
    forYou: builder.query<ForYouResponse, number>({
      query: () => "/for_you",
    }),
    reveal: builder.query<RevealResponse, string>({
      query: (id: string) => `/reveal?id=${id}`,
    }),
  }),
});
