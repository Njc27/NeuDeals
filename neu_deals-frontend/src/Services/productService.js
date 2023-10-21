import axios from "axios";


export const getAllProducts = async (body) =>{
    console.log('Recieved:',body);
    let res =  await axios.get("http://localhost:8080/products/getAll");
    console.log(res);
    return res;
}

export const uploadProduct = async(body) =>{
    console.log('Recieved:',body);
    let res =  await axios.post("http://localhost:8080/products/post",body);
    console.log(res);
    return res;
}

export const getProductByUserId = async(id) =>{
    console.log('Recieved:',id);
    let res =  await axios.get(`http://localhost:8080/products/getProductByUser/${id}`);
    console.log(res);
    return res;
}

export const getProductById = async (id) =>{
    console.log('Recieved:',id);
    let res =  await axios.get(`http://localhost:8080/products/getProduct/${id}`);
    return res;
}

export const deleteProdById = async (id) =>{
    console.log('Recieved:',id);
    let res =  await axios.get(`http://localhost:8080/products/deleteProduct/${id}`);
    return res;
}

export const updateProdById = async (body) =>{
    let res =  await axios.post(`http://localhost:8080/products/updateProd`,body);
    return res;
}