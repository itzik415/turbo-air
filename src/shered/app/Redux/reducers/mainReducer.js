import { combineReducers } from 'redux'
import { storesReducer } from "./storesReducer";
import { searchFiledReducer } from "./searchFiledReducer";
import { responsiveNavbarReducer } from "./responsiveNav";
import { contactFormReducer } from "./contactFormReducer";

export const mainReducer = combineReducers({
  storesReducer,
  searchFiledReducer,
  responsiveNavbarReducer,
  contactFormReducer
})
