import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Table from "./Components/Table";
import UpdateProduct from "./Components/updateProduct";
import AddProduct from "./Components/Modal";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Table />} />
        <Route path="/modal" element={<AddProduct />}/>
        <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
        <Route path="/deleteProduct/:id" element={<deleteProduct/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
