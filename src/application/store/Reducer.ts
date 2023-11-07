import { combineReducers } from "@reduxjs/toolkit";
import { teachTokApi } from "@data/client";
import { reducer as app } from "@application/state";
import { questionReducer as questions } from "@data/question";

export const rootReducer = combineReducers({
  app,
  questions,
  [teachTokApi.reducerPath]: teachTokApi.reducer,
});
