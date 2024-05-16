// import React, { useState } from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to sign up user");
//       }

//       const responseData = await response.json();
//       alert("User signed up successfully:", responseData);
//       // Optionally, redirect the user to a different page after successful signup
//     } catch (error) {
//       console.error("Error signing up user:", error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <section>
//         <div className="contentbox">
//           <div className="formbox">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="inputbox">
//                 <span>First Name</span>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="inputbox">
//                 <span>Last Name</span>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="inputbox">
//                 <span>Email</span>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="inputbox">
//                 <span>Password</span>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="submit-container">
//                 <input type="submit" className="submit" value="Sign Up" />
//                 <div className="submit">
//                   <Link className="login" to="/Login">
//                     Login
//                   </Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
//import sidebook from "../Images/sidebook.jpg";
import Login from "../assets/Images/Login.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up user");
      }
else{
      const responseData = await response.json();
      alert("User signed up successfully:", responseData);
      // Optionally, redirect the user to a different page after successful signup
    } }catch (error) {
      console.error("Error signing up user:", error.message);
    }
  };

  return (
    <div className="background_2">
      <section>
        <div className="imgbox">
          <img src={Login} alt="" />
        </div>
        <div className="contentbox">
          <div className="formbox">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputbox">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="inputbox">
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="inputbox">
                <span>Email</span>
                <input
                  type="text"
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

              <div className="submit-container">
                <input type="submit" className="submit" value="Sign Up" onClick={handleSubmit} />
                <div className="submit">
                  <Link className="login" to="/Login">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
