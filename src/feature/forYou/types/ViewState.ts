import type { Option } from "@domain/types";

export interface ViewState {
  selected: Array<Option>;
  numCorrect: number;
}
