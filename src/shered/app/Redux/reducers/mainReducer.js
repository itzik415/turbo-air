import { combineReducers } from 'redux'
import { storesReducer } from "./storesReducer";
import { searchFiledReducer } from "./searchFiledReducer";

export const mainReducer = combineReducers({
  storesReducer,
  searchFiledReducer
})
