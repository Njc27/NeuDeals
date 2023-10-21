import React,{useEffect,useState} from 'react'
import classes from'./ProductDetails.css'
import Table1 from '../../Assests/Table1.jpg'
import Table2 from '../../Assests/Table2.jpg'
import { useParams} from "react-router-dom"
import { getProductById } from '../../Services/productService';
import { payementService } from '../../Services/payementService'


const ProductDetails = () => {

  const {item}=useParams();
  const [productData,setProductData] = useState([])
  const [currentImage,setCurrentImage] = useState();


  useEffect(() =>{
    let id = item;
    getProductById(id).then(result =>{
      console.log(result)
      if(result?.data?.product){
        setProductData(result?.data?.product)
      }
    })
  },[])

  useEffect(() =>{
    setCurrentImage(productData[0]?.image1?.imageUrl)
  },[productData])

  const selectImage = (img) =>{
    setCurrentImage(img);
  }



  const goToPayement = () =>{
    payementService(productData[0]).then(result =>{
      if(result.data.url){
        window.location.href = result.data.url;
      }
    })

  }


  return (
    <div className="MainContainer">
      {
        productData?.length >0 && (
          <>
          <div style={{display : "flex"}}>
            <div className="ProductPreview">
            <h1 className="ProductTitle"> {productData[0]?.prodName} </h1>
            <img src={currentImage} className = "previewImg" alt='Product Preview'/>
        </div>
        <div className='prod_prev'>
            <img className='ProductImage' src={productData[0]?.image1?.imageUrl} onClick={()=>{selectImage(productData[0]?.image1?.imageUrl)}}></img>
            <img className='ProductImage' src={productData[0]?.image2?.imageUrl} onClick={()=>{selectImage(productData[0]?.image2?.imageUrl)}}></img>
            <img className='ProductImage' src={productData[0]?.image3?.imageUrl} onClick={()=>{selectImage(productData[0]?.image3?.imageUrl)}}></img>
            <img className='ProductImage' src={productData[0]?.image4?.imageUrl} onClick={()=>{selectImage(productData[0]?.image4?.imageUrl)}}></img>
        </div>
        </div>
       <div className="ProductData">
       <div className='ProductDescription'> Brand : {productData[0]?.brandName} </div>
        <div className='ProductDescription'> Catergory : {productData[0]?.categoryName} </div>
        <div className='ProductDescription'> Description : {productData[0]?.desc} </div>
        <div className='ProductDescription'> Actual Prize : {productData[0]?.actualPrice} </div>
        <div className='ProductDescription'> Discount Prize : {productData[0]?.discountPrice} </div>

        <div>
           <button className='AddCart' onClick={() =>{goToPayement()}}>Buy Now</button>
        </div>

        </div>
        
          </>
        )
      }
        
        

      </div>
  )
}

export default ProductDetails