import React from 'react'
import { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import './SellerHistory.css'
import CardComponent from "../Components/Card/CardComponent";
import { getProductByUserId } from "../Services/productService";

function SellerHistory(){

    const [data,setData] = useState([]);
    useEffect(()=>{
        let id = JSON.parse(sessionStorage.getItem("userId"))._id;
        console.log(id);
       getProductByUserId(id).then(result=>{
        console.log(result)
        if(result.data.product){
            setData(result.data.product);
        }
       });
    },[])

    console.log(data)

    return(
        <div class="about_page">
        {data.length>0 && (
            <div className='a_card'>
        {data.map(elem=>(
            <CardComponent
            data = {elem}
            id = {elem._id}
            title={elem.prodName}
            imageUrl={elem.image1?.imageUrl}
            body={elem.desc}
            act_price = {elem.actualPrice}
            disc_price= {elem.discountPrice}
        />
        ))}
    </div>
        )}

        
       
            
        </div>
    )
}

export default SellerHistory