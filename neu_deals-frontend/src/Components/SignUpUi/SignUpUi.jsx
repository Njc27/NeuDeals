import React, { useEffect,useState} from 'react'
// import bgImg from '../../Assests/sale.jpeg'
import { useForm } from 'react-hook-form';
import './SignUpUi.css'
import Fetch from 'react-fetch'
import { userSignup } from '../../redux/actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// const fetch = require('node-fetch');

// const fetch = require('node-fetch');

const SignUpUi = () => {
  const dispatch = useDispatch();
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');

  const [fname_error,setFname_error] = useState(false);
  const [lname_error,setLname_error] = useState(false);
  const [email_error,setEmail_error] = useState(false);
  const [phoneNumber_error,setPhoneNumber_error] = useState(false);
  const [address_error,setAddress_error] = useState(false);
  const [password_error,setPassword_error] = useState(false);

  const {userData} =  useSelector(state =>state.user);
  const navigate = useNavigate();

  var passwordReg = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*]).{8,12}$/
var reg = /[a-z.]*[@]\bnortheastern.edu/
var user = /^(?=.[a-z])(?=.[A-Z])[a-zA-Z]{6,10}$/
var phnNumber = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/

  useEffect(()=>{
    if(fname === ''){
     setFname_error(true);
    }
    else{
      setFname_error(false);
    }

    if(lname === ''){
      setLname_error(true);
     }
     else{
       setLname_error(false);
     }

     if(email === '' || !reg.test(email)){
      setEmail_error(true);
     }
     else{
      setEmail_error(false);
     }

     if(phoneNumber === '' || !phnNumber.test(phoneNumber)){
      setPhoneNumber_error(true);
     }
     else{
      setPhoneNumber_error(false);
     }

     console.log(password);
     console.log(passwordReg.test(password))

    //  if(password === '' || !passwordReg.test(password)){
    //   setPassword_error(true);
    //  }
    //  else{
    //   setPassword_error(false);
    //  }

     if(address === ''){
      setAddress_error(true);
     }
     else{
      setAddress_error(false);
     }
  })



  useEffect(()=>{
      if(sessionStorage.getItem("userId") !== undefined){
        let obj = JSON.parse(sessionStorage.getItem("userId"));
        if(obj?._id){
          navigate('../home');
        }
      }
  },[userData])


    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = e => {
      e.preventDefault();
      if(fname === '' || lname=== '' || email === '' || phoneNumber==='' || address==='' || password===''){
        alert('Fields cannot be null');
      }
      else{
        dispatch(userSignup(fname,lname,email,phoneNumber,address,password));
      }
    }

  return (
    <section>
    <div className="register">
        <div className="column-1">
            <h2>Register Here</h2>
            <span>For a fair and share deal!!</span>

            <form id='form' className='flex flex-col' onSubmit={(e)=>handleSubmit(onSubmit(e))}>
    
          <input type="text"
            placeholder="Enter First name"
            {...register("fname", { required: true })}
            onChange={(e) =>{setFname(e.target.value)}}
          />

          {fname_error&&(
            <div className="error">
            {"First Name is required"}

          </div>
          )}
         
        

          <input
            placeholder="Enter Last name" 
            {...register("lname", { required: true })}
            onChange={(e) =>{setLname(e.target.value)}}

          />

            {lname_error&&(
            <div className="error">
            {"Last Name is required"}

          </div>
          )}

          <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /[a-z.]*[@]\bnortheastern.edu/,
            })}
            onChange={(e) =>{setEmail(e.target.value)}}

          />
          {
            email_error&&(
              <div className="error">

            {"Enter email id with domain @northeastern.edu"}
          </div>
            )
          }
          
    
        
          <input placeholder="Enter phone number"
            {...register("phoneNumber",{
              required: true,
            pattern: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
            })}

            onChange={(e) =>{setPhoneNumber(e.target.value)}}
          />

          {
            phoneNumber_error&&(
              <div className="error">
              {"Enter your phone number in the format 'xxx-xxx-xxxx'"}
          </div>
            )
          }
          <input
            placeholder='Enter your Address'
            {...register("address", {
            required: true,
            })}
            onChange={(e) =>{setAddress(e.target.value)}}

          />
          {address_error&&(
            <div className="error">

          {"Enter valid address"}
          </div>
          )}

          <input
            placeholder="Enter password"
            type='password'
            {...register("password", {
            required: true,
            pattern: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*]).{8,12}$/,
              
            })}
            onChange={(e) =>{setPassword(e.target.value)}}

          />
          {/* {password_error&&(
            <div className="error">

            {"Entered a valid password"}
              {<ul className='pass_ul'>
                Password should contain
                <li>At least one capital letter,</li>
                <li>At least one small letter,</li>
                <li>At least one number,</li>
                <li>At least one special character,</li>
                <li> And minimum length of 8,12</li>
            </ul>
              }
          </div>
          )} */}

          
        <div>  

          <input className="button" type="submit"/>
        </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default SignUpUi