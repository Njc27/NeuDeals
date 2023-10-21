import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    productsData:{}
 };
 export const productReducer = (state = initialState, {type,payload}) => {
   console.log(type,payload)
    switch (type) {
        case(ActionTypes.GET_PRODUCTS):
      return {...state,productsData:payload}
       default:
          return state;
    }
 }