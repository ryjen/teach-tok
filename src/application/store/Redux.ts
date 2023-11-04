import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./Reducer";
import { rootMiddleware } from "./Middleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootMiddleware),
});