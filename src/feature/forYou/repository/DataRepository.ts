import { queryForYou, fetchReveal } from "./RemoteDataSource";

export const dataRepository = {
  forYou: (index: number) => queryForYou(index),
  reveal: (id: string) => fetchReveal(id),
};
