import type { Answer } from "./Answer";
import type { User } from "./User";

export interface Question {
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Array<Answer>;
  user: User;
}
