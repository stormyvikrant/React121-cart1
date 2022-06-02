import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="footer">
         <p className="trialText">
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other terms apply.
         </p>
         <div className="footerLinks">
            <Link className="footLinks" to={"/faq"}>
               FAQ's
            </Link>
            <p>Job opportunities</p>
            <Link className="footLinks" to={"/contact"}>
               Contact Us
            </Link>
            <div>
               <p>Social Media</p>
              
            </div>
         </div>
         
      </div>

   );
};

export default Footer;