import {teachTokApi} from '@data/client'

type Api = typeof teachTokApi

export class QuestionRespository {
  api: Api

  constructor({api}: {api: Api}) {
    this.api = api
  }

  nextQuestion = () => this.api.useForYouQuery()

  revealAnswer = (id: string) => this.api.useRevealQuery(id)
}
