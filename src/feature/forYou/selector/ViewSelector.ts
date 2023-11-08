import type { Option, Question } from "@domain/types";

type Entity = Option | Question;

export const selectById = (id: string | number) => (item: Entity) =>
  id == item.id;
