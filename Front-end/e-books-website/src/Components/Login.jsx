//Login part1

// import React from 'react'
// import './Login.css'
// import { Link } from 'react-router-dom'
// // import sidebook from "../Images/sidebook.jpg"
// // import instagram from "../Images/instagram.jfif"
// // import facebook from "../Images/facebook.jfif"
// // import twitter from "../Images/twitter.jfif"

// const Login = () => {
//   return (
//     <div className='container'>
//        <section>
//         {/* <div className="imgbox" >
//            <img src={sidebook}></img>
//         </div> */}
//         <div className="contentbox">
//           <div className='formbox'>
//             <h2>Login</h2>
//             <form action="">
//               <div className='inputbox'>
//                   <span>Username</span>
//                   <input type='text' name=''></input>
//                   </div>
//                   <div className='inputbox'>
//                   <span>Password</span>
//                   <input type='password' name=''></input>
//               </div>
//               <div className='remember'>
//                 <label ><input type='checkbox' name=''></input> Remember me</label>
//               </div>
//               <div className='inputbox'>
//                   <input type='submit' value='Sign in' name=''></input>
//                   </div>
//                   <div className='inputbox'>
//                     <p>Don't have an account?<Link className="signup" to="/Signup">SignUp</Link></p>
//                   </div>
//             </form>
//             {/* <h3>Login with social media</h3>
//             <ul className='social'>
//               <li><img src={facebook}></img></li>
//               <li><img src={instagram}></img></li>
//               <li><img src={twitter}></img></li>
//             </ul> */}
//           </div>
//         </div>
//        </section>
//     </div>
//   )
// }

// export default Login

//Login Part-02

// import React, { useState } from "react";
// import "./Login.css";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to log in");
//       }

//       const responseData = await response.json();
//       alert("User logged in successfully:", responseData);
//       // Optionally, redirect the user to a different page after successful login
//     } catch (error) {
//       console.error("Error logging in:", error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <section>
//         <div className="contentbox">
//           <div className="formbox">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="inputbox">
//                 <span>Username</span>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                 ></input>
//               </div>
//               <div className="inputbox">
//                 <span>Password</span>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 ></input>
//               </div>
//               <div className="remember">
//                 <label>
//                   <input type="checkbox" name=""></input> Remember me
//                 </label>
//               </div>
//               <div className="inputbox">
//                 <Link type="submit" to="/" value="Sign in">
//                   Sign In
//                 </Link>
//               </div>
//               <div className="inputbox">
//                 <p>
//                   Don't have an account?
//                   <Link className="signup" to="/Signup">
//                     Sign Up
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;

//Login Part-03

import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import Loginimage from "../assets/Images/Login.jpg";
import google from "../assets/Images/google.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to log in");
      }
else{
      const responseData = await response.json();
      console.log("User logged in successfully:", responseData);
      // Optionally, redirect the user to a different page after successful login
    }} catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="background_3">
      <section>
        <div className="imgbox">
          <img src={Loginimage}></img>
        </div>
        <div className="contentbox">
          <div className="formbox_1">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputbox">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="inputbox">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                ></input>
              </div>
              {/* <div className="remember">
                <label>
                  <input type="checkbox" name=""></input> Remember me
                </label>
              </div> */}
              <div className="loginbtn" onClick={handleSubmit}>
                <Link className="button"  to="/" value="Sign in" >
                  Log In
                </Link>
              </div>
              <div className="signuplink">
                <p>
                  Don't have an account?
                  <Link className="signup" to="/Signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
            <h3>Login with social media</h3>
            <ul className="icons">
              <img className="img_1" src={google}></img>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
