import { combineReducers } from "redux";
import {userReducer} from "./userReducer";
import {productReducer} from "./productReducer";


const reducers = combineReducers({
    user:userReducer,
    products:productReducer
})

export default reducers
