import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/Authcontext";
import"../Pages/Login.css";
const Login = () => {
   const { handleAuth } = useContext(AuthContext);

   const navigate = useNavigate();

   return (
      <div className="loginbox"
      >
         <h1>Login</h1>
         <div>
              <input className="inp1"
            type="text"
            placeholder="Username"
         />
         <input
           className="inp2"
            type="password"
            placeholder="Password"
         />
         </div>
       
         <button className="loginbutton"
            style={{
               width: "120px",
               borderRadius: "5px",
               border: "1px solid rgb(50, 50, 51)",
               backgroundColor: "rgb(50, 50, 51)",
               color: "white",
               height: "30px",
               marginTop: "30px",
               cursor: "pointer",
            }}
            onClick={() => {
               handleAuth(true);
               navigate(-2, { replace: true });
            }}
         >
            Login
         </button>
      </div>
   );
};

export default Login;