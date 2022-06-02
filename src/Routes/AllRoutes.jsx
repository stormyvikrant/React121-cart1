// import "./App.css";
// import Banner from "./components/Banner";
// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Footer from "./components/Footer";

// import FaqPage from "./components/FaqPage";
// import Contact from "./components/Contact";
import Login from "../Pages/Login";
import ProductDetails from "../Pages/ProductDetail";
import PrivateComponent from "../Pages/PrivateComponent";
import { ShoppingCart } from "../Pages/Shopingcart";
import Store from "../Pages/Store";
import Mac from "../Pages/Mac";
import IPad from "../Pages/Ipad";
import Iphone from "../Pages/Iphone";
import About from "../Pages/About";

function AllRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/store" element={<Store />}></Route>
    <Route path="/mac" element={<Mac />}></Route>
    <Route path="/ipad" element={<IPad />}></Route>
    <Route path="/iphone" element={<Iphone />}></Route>
    <Route path="/about" element={<About/>}></Route>
    {/* <Route path="/contact" element={<Contact />}></Route> */}
    {/* <Route path="/faq" element={<FaqPage />}></Route> */}
    <Route path="/login" element={<Login />}></Route>
    <Route
       path="/store/:id"
       element={
          <PrivateComponent>
             <ProductDetails />
          </PrivateComponent>
       }
    ></Route>
    <Route
       path="/ShoppingCart"
       element={
          <PrivateComponent>
             <ShoppingCart />
          </PrivateComponent>
       }
    ></Route>
 </Routes>
  );
}

export default AllRoutes;
