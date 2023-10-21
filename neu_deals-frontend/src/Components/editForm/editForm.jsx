import React from "react"
import { useState,useEffect } from "react";
import { Navigate, useNavigate, useParams,useLocation} from "react-router-dom"
import "./editForm.css"
import { uploadImage } from "../../Services/imageService";
import { useDispatch } from 'react-redux';
import { updateProdById } from "../../Services/productService";

export default function EditForm(){
    const {item}=useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch();  
    const [catergoryName,setCatergoryName] = useState('');  
    const [adTitle, setAdTitle] = useState('');
    const [adProductBrand, setAdProductBrand] = useState('');
    const [adDescription, setAdDescription] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [discountPrice, setDiscountedPrice] = useState(0);
    const [addressLine1, setAddressLine1] = useState('');
    const [cityName, setCityName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [userName, setUserName] = useState('');
    const [userMobile, setUserMobile] = useState('');
    const [image1,setImage1] = useState('');
    const [image2,setImage2] = useState('');
    const [image3,setImage3] = useState('');
    const [image4,setImage4] = useState('');
    const location = useLocation();


    useEffect(() =>{
        if(sessionStorage.getItem("userId") !==undefined){
          let obj = JSON.parse(sessionStorage.getItem("userId"));
          if(obj?._id){
            setUserName(obj?._id);
          }
        }
    },[sessionStorage.getItem("userId")]);


    
    useEffect(() =>{
        setCatergoryName(location?.state?.categoryName);
        setAdTitle(location?.state?.prodName);
        setAdProductBrand(location?.state?.brandName)
        setAdDescription(location?.state?.desc)
        setItemPrice(location?.state?.actualPrice)
        setDiscountedPrice(location?.state?.discountPrice)
        setAddressLine1(location?.state?.addressLine)
        setCityName(location?.state?.cityName)
        setZipCode(location?.state?.zipCode)       
    },[location?.state]);




    

    const handleImageUpload = (e,imageNumber) =>{
        const data = new FormData() 
        data.append('image', e.target.files[0]);
        uploadImage(data).then(result =>{
            switch(imageNumber){
                case 1:
                    setImage1(result)
                case 2:
                    setImage2(result)
                case 3:
                    setImage3(result)
                case 4:
                    setImage4(result)
            }
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let body = {
            id:location?.state?._id,
            prodName : adTitle,
            brandName : adProductBrand,
            categoryName:item,
            desc:adDescription,
            actualPrice:itemPrice,
            discountPrice:discountPrice,
            addressLine:addressLine1,
            cityName:cityName,
            zipCode:zipCode,
            userId : userName
        }
        if(image1 !== ''){
            body.image1 = image1;
        }
        if(image2 !== ''){
            body.image2 = image2;
        }
        if(image3 !== ''){
            body.image3 = image3;
        }
        if(image4 !== ''){
            body.image4 = image4;
        }
        updateProdById(body).then(result =>{ 
            if(result?.data?.validate){
            alert("Product updated Succefully")
            navigate("../sellerHistory")
            }
        }).catch((e)=>{
            console.log(e);
        })
    };


    const handleClick = (event)=>{
        navigate("/sell")
    }

    return(
       <>
            <div className="external-container container border" style={{width:"60%"}}>  
                <div className="my-3 mx-2" style={{textAlign:"left"}}>
                    <h5>SELECTED CATEGORY : {item}</h5>
                    <p style={{textDecoration:"underline"}} onClick={() =>handleClick}>Back</p>
                </div>
                <hr/>
                <div className="my-3 mx-4" style={{textAlign:"left"}}>
                    <h5 className="my-3">INCLUDE DETAILS</h5>
                    <form action={handleSubmit}>
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">Ad Title *</label>
                            <input type="text" class="form-control" id="ad-title" value={adTitle} onChange={(event) => setAdTitle(event.target.value)} required/>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">Product Brand *</label>
                            <input type="text" class="form-control" id="ad-product-brand" value={adProductBrand} onChange={(event) => setAdProductBrand(event.target.value)} required/>
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleFormControlTextarea1" class="form-label">Ad Description *</label>
                            <textarea class="form-control" id="ad-description" rows="3" value={adDescription} onChange={(event) => setAdDescription(event.target.value)}  required></textarea>
                        </div>
                        <hr/>
                            <h5 className="my-3">SET A PRICE</h5>
                            <div className="price-input d-flex flex-row input-group mb-3 col-md-6">
                            <label className="mx-2" for="inputMPR">MRP </label>
                            <span class="input-group-text">$</span>
                                <div className="form-floating">
                                    <input type="number" style={{width: "48%"}} class="num-input form-control" id="item-price" min="0" placeholder="Amount" value={itemPrice} onChange={(event) => setItemPrice(event.target.value)} required/>
                                </div>
                            <label className="mx-2" for="inputMPR">Discounted Price </label>
                            <span class="input-group-text">$</span>
                                <div className="form-floating">
                                    <input type="number" style={{width: "48%"}} class="num-input form-control" id="item-price" min="0" placeholder="Amount" value={discountPrice} onChange={(event) => setDiscountedPrice(event.target.value)} required/>
                                </div>
                            </div>
                        <hr/>
                            <h5 className="my-3">UPLOAD UPTO 4 IMAGES</h5>
                            <div className="image-input">
                                <div class="d-flex flex-row">
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" onChange={(e)=>handleImageUpload(e,1)}/>
                                    </div>    
                                    <div class="mb-3 mx-2" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile" required onChange={(e)=>handleImageUpload(e,2)}/>
                                    </div>                          
                                </div>
                                <div class="d-flex flex-row">
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile"  onChange={(e)=>handleImageUpload(e,3)}/>
                                    </div>    
                                    <div class="mb-3 mx-1" style={{width:"50%"}}>
                                        <input class="form-control" type="file" id="formFile"  onChange={(e)=>handleImageUpload(e,4)}/>
                                    </div>                           
                                </div>
                            </div>
                        <hr/>
                            <h5 className="my-3">CONFIRM YOUR LOCATION</h5>
                            <div className="address">
                                <div class="form-group my-2">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="AddressLine1" placeholder="1234 Main St" value={addressLine1} onChange={(event) => setAddressLine1(event.target.value)}/>
                                </div> 
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="CityName" value={cityName} onChange={(event) => setCityName(event.target.value)}/>
                                    </div>
                                    <div class="form-group col-md-2 my-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" class="form-control" id="ZipCode" value={zipCode} onChange={(event) => setZipCode(event.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        <div className="submit">
                        <button type="submit" onClick={(e) =>handleSubmit(e)} class="btn btn-outline-secondary">Update AD</button>
                        </div>
                    </form>
                </div>
            </div>
       </>
    )
}