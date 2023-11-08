import { combineReducers } from "@reduxjs/toolkit";
import { teachTokApi } from "@data/client";
import { reducer as app } from "@application/state";
import { reducer as forYou } from "@feature/forYou/state";

export const rootReducer = combineReducers({
  app,
  forYou,
  [teachTokApi.reducerPath]: teachTokApi.reducer,
});
