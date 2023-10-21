import axios from "axios";


export const uploadImage = async (formData) =>{
    console.log("reacheddddddddddddddddddd")
    let res =  await axios.post("http://localhost:8080/image/upload",formData);
    return res.data.data;
}