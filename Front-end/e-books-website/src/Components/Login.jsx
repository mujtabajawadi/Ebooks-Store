import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Loginimage from "../assets/Images/Login.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Both email and password are required");
      return;
    }

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
        setError(errorData.message || "Failed to log in");
        return;
      }

      const responseData = await response.json();
      console.log("User logged in successfully:", responseData);

      // Optionally store the token in localStorage or context
      localStorage.setItem("token", responseData.token);

      // Redirect to home page or dashboard
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Failed to log in. Please try again later.");
    }
  };

  return (
    <div className="background_3">
      <section>
        <div className="imgbox">
          <img src={Loginimage} alt="Login" />
        </div>
        <div className="contentbox">
          <div className="formbox_1">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="inputbox">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inputbox">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="loginbtn">
                <button type="submit" className="button">
                  Log In
                </button>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
