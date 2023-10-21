import { ActionTypes } from "../constants/actionTypes";
const initialState = {
    userData:{}
 };
 export const userReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case(ActionTypes.SIGNUP_ACTION):
      return {...state,userData:payload}
      case(ActionTypes.LOGIN_ACTION):
      return {...state,userData:payload}
       default:
          return state;
    }
 }