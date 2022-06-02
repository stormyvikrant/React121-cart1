import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Store.css";

const Ipad = () => {
   const [data, setData] = useState([]);

   const getData = async () => {
      let fetched = await fetch("http://localhost:3000/ipad");
      fetched = await fetched.json();
      setData([...fetched]);
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div className="store">
         {data.map((e) => {
            return (
               <div className="Cardbox">

               <Link key={e.id} to={`/mac/${e.id}`} className="storeCards">
                  <img src={e.image} alt="" />
                  <div className="productdetail">
                       <p >{e.model}</p>
                  <p >{e.price}</p>
                  </div>
                
               </Link>
               </div>
            );
         })}
      </div>
   );
};

export default Ipad;