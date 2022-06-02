import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


const Nav = () => {
   return (
       <>

      <div className="navbar">
        
 <Link  className="links" to={"/"}>
 <img
               className="icon"
               src="https://cdn-icons-png.flaticon.com/512/882/882704.png"
               alt=""
            />
         </Link>
       
     < Link className="links" to="/store">Store</ Link >
     < Link className="links" to="/mac">Mac</ Link>
     < Link className="links" to="/ipad">iPad</ Link>
     < Link className="links" to="/iphone">iPhone</ Link>
     < Link className="links" to="/about">About Us</ Link>
     <Link Link className="links" to="/login">Login</Link>
     <Link Link className="links" to="/cart">ShoppingCart</Link>
  


        
         
      </div>
       </>


   );
};

export default Nav;