import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Table from "./Components/Table";
import UpdateProduct from "./Components/updateProduct";
import AddProduct from "./Components/Modal";
import Cancel from "./Components/Cancel";
import Success from "./Components/Success";
import Checkout from "./Components/Checkout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Table />} />
        <Route path="/modal" element={<AddProduct />}/>
        <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
        <Route path="/deleteProduct/:id" element={<deleteProduct/>}/>
        <Route path="/Home/:id" element={<Home/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
