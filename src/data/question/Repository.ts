import type { Api } from "@data/types";

export class QuestionRepository {
  api: Api;

  constructor({ api }: { api: Api }) {
    this.api = api;
  }

  nextQuestion = (current: number) => this.api.useForYouQuery(current);

  revealAnswer = (id: string) => this.api.useRevealQuery(id);
}
