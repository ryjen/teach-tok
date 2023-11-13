import { queryForYou, fetchReveal } from "./LocalDataSource";

export const dataRepository = {
  forYou: queryForYou,
  reveal: fetchReveal,
};
