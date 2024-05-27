import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Table from "./Components/Table";
import UpdateProduct from "./Components/updateProduct";
import AddProduct from "./Components/Modal";
import Cancel from "./Components/Cancel";
import Success from "./Components/Success";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import Product from "./Components/Product";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar";
import Fiction from "./Components/Fiction";
import NonFiction from "./Components/NonFiction";
import fictionBanner from  "./assets/Images/banner_mens.jpg";
import nonfictionBanner from "./assets/Images/banner_women.jpg";
import biographiesBanner from "./assets/Images/banner_kids.jpg";
import Biographies from "./Components/Biographies";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/fiction" element={<Fiction banner={fictionBanner}/>}/>
        <Route path="/non-fiction" element={<NonFiction banner={nonfictionBanner}/>}/>
        <Route path="/biographies" element={<Biographies banner={biographiesBanner}/>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Table />} />
        <Route path="/modal" element={<AddProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/deleteProduct/:id" element={<deleteProduct />} />
        <Route path="/product/:id" element={<Product />} />

      </Routes>
    </Router>
  );
}

export default App;
