import axios from "axios";

export const payementService = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/payement/makePayement",body);
    return res;
}