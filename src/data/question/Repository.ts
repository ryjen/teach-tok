import type { Api } from "@data/types";

export class QuestionRepository {
  api: Api;

  constructor({ api }: { api: Api }) {
    this.api = api;
  }

  nextQuestion = () => this.api.useForYouQuery();

  revealAnswer = (id: string) => this.api.useRevealQuery(id);
}
