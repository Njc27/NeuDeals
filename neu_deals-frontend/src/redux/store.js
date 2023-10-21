import {applyMiddleware,compose, createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit'

import reducers from "./reducers/index.js";
import thunk from "redux-thunk";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMOSE || compose;

const store = createStore (
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;