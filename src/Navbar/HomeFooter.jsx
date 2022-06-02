import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const HomeFooter = () => {
   return (
      <div className="homefooter">
         <p className="trialTexthome">
         To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version
          of iOS or iPadOS. Update to the latest version by going to Settings General  Software Update. Tap Download and Install.
         </p>
         <p className="trialTexthome">
         Available for qualifying applicants in the United States.
         </p>
         <p className="trialTexthome">
         Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
         </p>
         <p className="trialTexthome">
         Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
         </p>
         <p className="trialTexthome">
         $4.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your
          Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device 
          activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
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

export default HomeFooter;