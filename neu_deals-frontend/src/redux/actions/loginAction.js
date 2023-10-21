import { ActionTypes } from "../constants/actionTypes";
// import { userSignupService } from "../Services/loginService";
import { userSignupService,userLoginService } from "../../Services/loginService";

export const userSignup = (fname,lname,email,phoneNumber,address,password) =>{
    console.log('Received', fname,lname,email,phoneNumber,address,password);

    let body = {
        fname:fname,
        lname:lname,
        email:email,
        phoneNumber:phoneNumber,
        address:address,
        password:password
    }

    return async dispatch =>{
        let respnd = await userSignupService(body);
        console.log(respnd)
    if(respnd.status === 200){
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:respnd
        })
    }
    else{
        dispatch({
            type:ActionTypes.SIGNUP_ACTION,
            payload:null
        })
    }
    }
}

export const loginUser = (email,password) =>{
    let body = {
        email:email,
        password:password
    }
    return async dispatch =>{
        let respnd = await userLoginService(body);
    if(respnd.status === 200){
        dispatch({
            type:ActionTypes.LOGIN_ACTION,
            payload:respnd
        })
    }
    else{
        dispatch({
            type:ActionTypes.LOGIN_ACTION,
            payload:null
        })
    }
    }

}