import { dataReducer } from "./DataSlice";
import { viewReducer } from "./ViewSlice";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  data: dataReducer,
  view: viewReducer,
});
