import { getAllProducts } from "../../Services/productService";
import { ActionTypes } from "../constants/actionTypes";


export const getProducts = () =>{

    return async dispatch =>{
        let respnd = await getAllProducts();
    if(respnd.status === 201){
        dispatch({
            type:ActionTypes.GET_PRODUCTS,
            payload:respnd?.data?.products
        })
    }
    else{
        dispatch({
            type:ActionTypes.GET_PRODUCTS,
            payload:null
        })
    }
    }
}