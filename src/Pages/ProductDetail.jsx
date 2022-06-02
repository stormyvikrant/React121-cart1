import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
import "./ProductDetails.css"
import axios from "axios";

const ProductDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const { isAuth } = useContext(AuthContext);
     const fetchData = async () => {

      let fetched = await fetch(`http://localhost:3000/store/${id}`);
      fetched = await fetched.json();
      setData({ ...fetched });
   };
   console.log(data);

   useEffect(() => {
      fetchData();
   }, []);

   if (!isAuth) {
      return <Navigate to={"/login"} />;
   }
   
   return (
      <div className="cardbox">
<div className="card">
  <img src={data.image} alt="" />
 <div className="cardDetails">
  <p className="productdetail-heading">{data.model}</p>
            <p>{data.price}</p>
            <p>{data.details}</p>
          <button className="detailsBtn" onClick={()=>{
axios.post("http://localhost:3000/cart",{
   id:data.id,
   image:data.image,
      model:data.model,
      price: data.price,
      Details:data.Details
}).then(res=>console.log(res.data))

}} >Add to cart</button>    
         </div>

         
      </div>
      </div>
 
   );
};

export default ProductDetails;