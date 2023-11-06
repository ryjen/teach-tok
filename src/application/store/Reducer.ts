import { combineReducers } from "@reduxjs/toolkit";
import { teachTokApi } from "@data/client";
import { reducer as appReducer } from "@application/state";

export const rootReducer = combineReducers({
  app: appReducer,
  [teachTokApi.reducerPath]: teachTokApi.reducer,
});
