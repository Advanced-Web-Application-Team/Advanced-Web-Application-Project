
import {createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk";
import { layoutReducer } from "./reducers/LayoutForDesignPageReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from "./reducers/AuthReducers";


let middleware = [thunk];

let rootReducer = combineReducers({
    auth: authReducer,
    layout: layoutReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;