import axios from "axios";

export const userSignupService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/user/create",body);
    console.log(res);
    if(res.data.userId){
        sessionStorage.setItem('userId', (JSON.stringify( res?.data?.userId)));
    }
    
    return res;

}


export const userLoginService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/user/login",body);
    console.log(res);
    if(res.data.userData){
    sessionStorage.setItem('userId',(JSON.stringify( res?.data?.userData)));
    }
    return res;
}