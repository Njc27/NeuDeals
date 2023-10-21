import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Payment = () => {
  
  const navigate = useNavigate();

  useEffect(()=>{
    alert("Your payment was successful");
    navigate('/home')
  }
  )
  return (
    <div>

    </div>
  );
};

export default Payment;