import React, { useState } from 'react';
import './help.css';
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Help = () => {
  const [data, setData] = useState({name: "", email:"", phone:"", message:""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
  }

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zil5oso', 'template_zdpsdcf', form.current, 'i-P7o958HGHVlVjeV')

    
      .then((result) => {
          console.log(result.text);
          alert("Thank you for reaching out to us. We will get back to you shortly");
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <h1 className='form-heading'>CONTACT <span>HERE</span></h1>
      <input type="text" name="name" placeholder='Enter Name' className='form-input' required/>
      <input type="email" name="email"  placeholder='example@northeastern.com' className='form-input' required/>
      <input type="tel" name="phone"  placeholder='+91' className='form-input' pattern="^[0-9+\(\)#\.\s\/ext-]+$" required/>
      <textarea name="message" placeholder='Type here.....' className='form-input-message' required/>
      <button type='submit' className='form-button'>SEND</button>
      <p className='form-message'>{data.name}{data.email}{data.phone}{data.message}</p>
    </form>
  )
}

export default Help;
