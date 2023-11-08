import { teachTokApi as api } from "@data/client";

export const queryForYou = (index: number) => api.useForYouQuery(index);

export const fetchReveal = (id: string) => api.endpoints.reveal.initiate(id);

export const remoteDataSources = [queryForYou, fetchReveal];
