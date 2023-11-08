import { teachTokApi } from "@data/client";
import { dataMiddleware as forYouData } from "@feature/forYou/store";

export const rootMiddleware = {
  append: [teachTokApi.middleware],
  prepend: [forYouData.middleware],
};
