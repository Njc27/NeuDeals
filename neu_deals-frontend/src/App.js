import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home.jsx'
import SignUpUi from './Components/SignUpUi/SignUpUi.jsx';
import Login from './Components/Login/login.jsx';
import Sell from './Components/Sell/sell.jsx';
import SellForm from "./Components/Sell/sellForm.jsx"
import Help from './Components/Help/help.jsx'
import SellerHistory from './SellerHistory/SellerHistory';
import EditForm from './Components/editForm/editForm';

import Category from './Components/Category/category'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/footer';
import Payment from './Components/Payment/Payment';
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="container">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SignUpUi" element={<SignUpUi />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/sell/form/:item" element={<SellForm/>}/>
          <Route path="/help" element={<Help />}  />
          <Route path="/sellerHistory" element={<SellerHistory />}  />
          <Route path="/category" element={<Category />}  />
          <Route path ="/payment" element = {<Payment/>} />
          <Route path="/ProductDetails/:item" element={<ProductDetails />}  />
          <Route path = "editProd" element = {<EditForm/>} />
         </Routes>
        <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;
