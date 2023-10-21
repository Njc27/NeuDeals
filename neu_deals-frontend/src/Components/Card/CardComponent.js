import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Card.css"
import { deleteProdById } from '../../Services/productService';

const CardComponent = ({data,id,title,imageUrl,body,act_price,disc_price}) => {
  const navigate = useNavigate();
  const deleteProd =()=>{
    deleteProdById(id).then(res =>{
      console.log(res);
      window.location.reload(false);
    })
  }
  const edit = () =>{
    navigate("/editProd",{state:data})
  }

  return (
    <div className='card_app'>
    <div className='image-container'>
      <img src = {imageUrl} alt=''/>
    </div>
    <div className='card-content'>
    <div className='card-title'>
      <h4>{title}</h4>
    </div>
    <div className='card-body'>
      <p>{body}</p>
    </div>
    <div className='card-body'>
      <p>Actual Price: ${act_price}</p>
    </div>
    <div className='card-body'>
      <p>Discount Price: ${disc_price}</p>
    </div>
    </div>
    <div className='card-btn-layout'>
    <div className='card_btn'>
      <button onClick={()=>edit()}>
        <a>
          Edit
        </a>
      </button>
    </div>
    <div className='card_btn'>
      <button onClick={()=>deleteProd()}>
        <a>
          Delete
        </a>
      </button>
    </div>
    </div>
    
    </div>
  )
}

export default CardComponent