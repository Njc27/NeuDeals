

import React, {useState,useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Closet from '../../Assests/Closet1.jpg'
import Lamp from '../../Assests/Lamp.jpg'
import Bed from '../../Assests/Bed.png'
import Chair from '../../Assests/chair.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './home.css'
import Accordion from 'react-bootstrap/Accordion';
import HomeData from './HomeData'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux';





const Home = () => {

  const dispatch  = useDispatch();

  const [data, setData] = useState(HomeData);
  const {userData} =  useSelector(state =>state.user);
  const {productsData} =  useSelector(state =>state.products);




  // useEffect(()=>{
  //   console.log(sessionStorage.getItem("userId"))
  //     if(sessionStorage.getItem("userId") !==undefined){
  //       let obj = JSON.parse(sessionStorage.getItem("userId"));
  //       console.log(obj)
  //       if(obj?._id){
  //         navigate('../home');
  //       }
  //     }
  // },[userData])

  
  useEffect(()=>{
    dispatch(getProducts());
  },[])
  console.log(productsData)


  const navigate = useNavigate();

  const handleRegisterClick = (prod) => {
    navigate(`/ProductDetails/${prod}`);
  }
  // useEffect(()=>{
  //   dispatch(getProducts());
  // },[])

  const helpDetails = () =>{
    navigate('/help')
  }

  return (
    <div>

      {/* Carousel----- */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Closet}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Small hanging closet</h3>
          <p>Only for $30</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Lamp}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Table lamp</h3>
          <p>Only for $15</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bed}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Queen size bed</h3>
          <p>
          Only for $200
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>

    <div class="container-header">
      <p class="section-head-p">View Popular Items</p>
    </div>
    <br>
    </br>

    {/* Card----- */}

    <div className="col-md-9">
      {productsData?.length > 0 && (
        <div className="row">
        {productsData.map((values) => {
          const {_id,prodName,discountPrice,image1,desc}= values;
          return (
            <>
              <div className="col-md-4 mb-4" key={_id}>
                <div className="card">
                  <img src={image1?.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{prodName}</h5>
                    <p>Price {discountPrice}</p>
                    <p className="card-text">{desc}</p>
                    <input type = "button" onClick={() =>handleRegisterClick(_id)} value = "Details" class="btn btn-primary"/>
                  </div>
                </div>
              </div>
            </>
          )
          })}
        </div>
      )}
          </div>
    
    <div class="container-header">
      <p class="section-head-p">Frequently asked questions</p>
    </div>
    <br>
    </br>

    {/* Accordian----- */}
    <Accordion className="accordion" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q1. What is the cost of a NEU DEALS account ?</Accordion.Header>
        <Accordion.Body className='accordion-body'>
        It is free to register for an NEUDeals Business account. There’s no long-term commitment, and no minimum spend.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q2. What kind of products are available to buy on NEU DEALS ?</Accordion.Header>
        <Accordion.Body>
        NEU DEALS is a website for all your day-to-day purchases, whether you’re buying home supplies, furnitures, or decor items. With access to tens of thousands of different suppliers, you’ll find everyday low business pricing on hundreds of millions of products. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Q3. Who buys on NEU DEALS ?</Accordion.Header>
        <Accordion.Body>
        NEU DEALS customers range from undergraduates to graduates within the NEU campus with tens of thousands of students. We serve millions of student customers around the campus with NEU login access.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <br></br>

    
    {/* Button----- */}
    <div>
    <Button variant='danger' style={{width: '150px'}} onClick={helpDetails}>Ask for Help</Button>
    {/* <Button className="button-questions" variant='danger'>Post questions<br></br></Button> */}
    {/* <button className="button">Post questions</button> */}
    <br></br>
    </div>

    {/* Alert------ */}
    <br></br><br></br><br></br><div className="alert alert-info" role="alert">
    <strong>Heads up! This alert needs your attention ! The Big Summer Sale is 
    almost coming to an end ! Hurry Up !</strong>

    <br></br>
  </div>
  </div>
  )
}


export default Home;


