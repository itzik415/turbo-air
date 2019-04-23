import { combineReducers } from 'redux'
import { storesReducer } from "./storesReducer";
import { searchFiledReducer } from "./searchFiledReducer";
import { responsiveNavbarReducer } from "./responsiveNav";

export const mainReducer = combineReducers({
  storesReducer,
  searchFiledReducer,
  responsiveNavbarReducer
})
