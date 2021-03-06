import { mainReducer } from './reducers/mainReducer';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));
