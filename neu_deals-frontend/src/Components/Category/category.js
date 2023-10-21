import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Categories from './categories';
import "./category.css";

const Category = () => {

  const [data, setData] = useState(Categories);
  const navigate = useNavigate();

  const filterResult=(catItem)=> {
    const result=Categories.filter((curData)=>{
      return curData.category===catItem;
    });
    setData(result);
  }

  const resetResult=(resetItem)=> {
    const reset_result=Categories.filter((curData)=>{
      return curData.reset===resetItem;
    });
    setData(reset_result);
  }

  const handleRegisterClick = () => {
    navigate('/ProductDetails');
  }
  return (
    <>
      {/* <h1 className="text-center text-info" style={{color:'red'}}>Select your Style</h1> */}
      <h1 className='heading'>SELECT YOUR STYLE</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Electronics')}>ELECTRONICS</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Furnitures')}>FURNITURES</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Apparels')}>APPARELS</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> filterResult('Books')}>BOOKS</div>
            <div className="btn btn-warning w-100 mb-4" onClick={()=> resetResult('RemoveFilter')}>REMOVE FILTER</div>

          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const {id,title,price,image,description}= values;
                return (
                  <div className="col-md-4" key={id}>
                    <div className="card">
                      <img src={image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>Price ${price}</p>
                        <p className="card-text">{description}</p>
                        <a href="#" onClick={() =>handleRegisterClick()} className="btn btn-primary">Details</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Category;
