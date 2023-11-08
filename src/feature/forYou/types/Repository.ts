import type { ForYouResponse, RevealResponse } from "@data/types";

export interface Query<T> {
  data: T;
  isError: boolean;
  isLoading: boolean;
}

export interface Repository {
  forYou: (index: number) => Query<ForYouResponse>;
  reveal: (id: string) => Query<RevealResponse>;
}
