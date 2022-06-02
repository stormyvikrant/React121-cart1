import React from "react";
import HomeFooter from "../Navbar/HomeFooter";
// import "./Home.css";


const Home = () => {
   return (
   <>
   <div className="firstDiv">
         <h1 className="heading">iPhone 13 Pro</h1>
         <p className="subHeading">Oh. So. Pro</p>
         <img className="image" src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_alpine_green__bxgqurawflau_large.jpg" alt="" />
      </div>
         <div className="firstDiv">
         <h3 className="heading">The new</h3>
         <h1 className="heading">iPhone se</h1>
         <p className="subHeading">Love the power . Love the Price</p>
         <img className="image" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6H3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1645509721263" alt="" />
      </div>
      <div>
          <HomeFooter/>
      </div>
   </>
      
   );
};

export default Home;