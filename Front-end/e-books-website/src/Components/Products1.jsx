import React, { useContext, useLayoutEffect, useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";
import { useLocation } from "react-router-dom";
import Item from "./Item";
import "./Products1.css";
import star_icon from "../assets/Images/star_icon.png";
import star_dull_icon from "../assets/Images/star_dull_icon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Product = (props) => {
  // AI module Start
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const { id } = useParams(); // Accessing id parameter from URL
  const [book, setBook] = useState({
    title: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/getProduct/${id}`)
      .then((result) => {
        setBook(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function fetchContent() {
    try {
      setResult('Generating...');
      
      const response = await fetch(`http://localhost:8080/generateContent/Give me detail about the ${book.title}`);
      const text = await response.text();
      
      setResult(text);
    } catch (error) {
      console.error('Error during generation:', error.message);
      setResult('Error during generation. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // AI module end
  // Scroll reset
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  // Context
  const { product } = props;
  const {
    cartItems,
    prodType,
    data_product,
    new_collections,
    itemId,
    addToCart,
    all_product,
  } = useContext(ShopContext);

  // Function to render product item
  const renderProductItem = (item) => (
    <div key={item.id} className="product-card mb-4">
      <div className="card h-100">
        <Item
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
        <div className="card-body">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              if (cartItems.some((element) => element.id === item.id)) {
                alert("Item Already Exist");
              } else {
                addToCart(item);
              }
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center mt-2">
        <img src={star_icon} className="star mr-1" alt="star" />
        <img src={star_icon} className="star mr-1" alt="star" />
        <img src={star_icon} className="star mr-1" alt="star" />
        <img src={star_icon} className="star mr-1" alt="star" />
        <img src={star_dull_icon} className="star mr-1" alt="star" />
        <p className="mb-0">(122)</p>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-4">
          {prodType === "saleProd" &&
            new_collections.map((item) => {
              if (item.id === itemId) {
                return renderProductItem(item);
              }
              return null; // Return null if the item.id does not match itemId
            })}

          {prodType === "dataProd" &&
            data_product.map((item) => {
              if (item.id === itemId) {
                return renderProductItem(item);
              }
              return null; // Return null if the item.id does not match itemId
            })}

          {prodType === "ficProd" &&
            all_product.map((item) => {
              if (item.id === itemId) {
                return renderProductItem(item);
              }
              return null; // Return null if the item.id does not match itemId
            })}
          {prodType === "nonficProd" &&
            all_product.map((item) => {
              if (item.id === itemId) {
                return renderProductItem(item);
              }
              return null; // Return null if the item.id does not match itemId
            })}

          {prodType === "bioProd" &&
            all_product.map((item) => {
              if (item.id === itemId) {
                return renderProductItem(item);
              }
              return null; // Return null if the item.id does not match itemId
            })}
        </div>
        
        <div className="col-md-8">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
          />
          <button onClick={fetchContent} disabled={loading}>Get More Info</button>
          {loading && <div style={{ display: 'block', height: '20px' }}>Loading...</div>}
          <textarea id="result" readOnly value={result} className="result-textarea" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Product;
