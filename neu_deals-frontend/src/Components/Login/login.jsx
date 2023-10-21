import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "../Login/login.css"
import { useDispatch,useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/loginAction';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userData} =  useSelector(state =>state.user);

  useEffect(()=>{
      if(sessionStorage.getItem("userId") !== undefined){
        let obj = JSON.parse(sessionStorage.getItem("userId"));
        console.log(obj)
        if(obj?._id){
          navigate('../home');
        }
      }
  },[userData])


  const handleRegisterClick = () => {
    navigate('/SignUpUi');
  }


const [isActive,setIsActive] = useState(false)
  const handleSignIn = (e) =>{
    e.preventDefault();
    dispatch(loginUser(email,password));
  }

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  return (
    <div className="center">
      <h1>Sign In</h1>
      <form method="post">
      <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
        What do you want to do today?<i class="fa fa-caret-down"></i>
        </div>
        {isActive &&
          <div className='dropdown-content'>
          <div className='dropdown-item'>
            Buy
          </div>
          <div className='dropdown-item'>
            Sell
          </div>
        </div>
        }
        
      </div>
        <div className="txt_field">
          <input type="text" required  onChange={(e) =>{setEmail(e.target.value)}}/>
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required onChange={(e) =>{setPassword(e.target.value)}}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" onClick={(e)=>handleSignIn(e)}/>
        <div className="signup_link">
          Not Registered yet? <a href="#" onClick={handleRegisterClick}>Register here</a>
        </div>
      </form>
    </div>
  )
}

export default Login