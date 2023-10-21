import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


console.log(sessionStorage.getItem("userId"));
  useEffect(() =>{
      if(sessionStorage.getItem("userId") !==undefined){
        let obj = JSON.parse(sessionStorage.getItem("userId"));
        if(obj?._id){
          setIsLoggedIn(true)
        }
      }
      else if(sessionStorage.getItem("userId") === null){
        setIsLoggedIn(false);
      }
  },[sessionStorage.getItem("userId")])


  const logOutUser = () =>{
    sessionStorage.clear();
    setIsLoggedIn(false);
  }

  const sellProducts = () =>{
    if(isLoggedIn){
      navigate('../sell');
    }
    else{
      alert('You need to Login in order to Sell');
    }
  }
  

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
     <IconContext.Provider value={{ color: '#fff', paddingRight: '20px' }}>
      <div className='navbar'>
         <Link to='#' className='menu-bars'>
             <FaIcons.FaBars onClick={showSidebar} />
         </Link>
         <Link to='/home' className='navbar-heading'>
            NEU DEALS
         </Link>
         <div onClick={()=>sellProducts()}><button className="navbar-sell">SELL</button>
         </div>
      </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if(item.isLogin){
                if(!isLoggedIn){
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span className='nav_title'>{item.title}</span>
                      </Link>
                    </li>
                  );
                }
              }
              else if(item.isLogout) {
                if(isLoggedIn){
                  return (
                    <li key={index} className={item.cName} onClick={() =>logOutUser()}>
                      <Link to={""}>
                        {item.icon}
                        <span className='nav_title'>{item.title}</span>
                      </Link>
                    </li>
                  );
                }
              }
              else{
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className='nav_title'>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;