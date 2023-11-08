import type { User } from "./User";
import type { Option } from "./Option";

export interface Question {
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Array<Option>;
  user: User;
  likes: number;
  comments: number;
  bookmarks: number;
  shares: number;
}
