import { teachTokApi } from "@data/client";
import { dataMiddleware as forYouData } from "@feature/forYou/store";

export const rootMiddleware = [teachTokApi.middleware, forYouData.middleware];
