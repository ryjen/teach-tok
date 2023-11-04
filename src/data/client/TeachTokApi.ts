import type {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const teachTokApi = createApi({
  reducerPath: 'teachTokApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cross-platform.rp.devfactory.com'
  }),
  endpoints: builder => ({
    forYou: builder.query<Question, void>({
      query: () => '/for_you',
      transformResponse: (data: ForYouResponse): Question => questionForYou(data)
    }),
    reveal: builder.query<Answer, void>({
      query: (id: string) => `/reveal?id=${id}`,
      transformResponse: (data: RevealResponse): Answers => revealAnswer(data)
    })
  })
})
