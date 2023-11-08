export * from "./DataSlice";
export * from "./ViewSlice";

import { dataReducer as data } from "./DataSlice";
import { viewReducer as view } from "./ViewSlice";
import { combineReducers } from "redux";

export default combineReducers({ data, view });
