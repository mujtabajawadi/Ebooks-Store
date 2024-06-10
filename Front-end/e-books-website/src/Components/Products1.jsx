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
    author: ""
  });

  useEffect(() => {
    console.log(id)
    axios
      .get(`http://localhost:8080/products/getProduct/${id}`)
      .then((result) => {
        setBook(result.data.title);
        console.log(result.data.title);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function fetchContent() {
    try {
      setResult('Generating...');
      
      const response = await fetch(`http://localhost:8080/generateContent/Give me detail about the book ${book}`);
      const text = await response.text();
      console.log(text)
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
    newTitle
  } = useContext(ShopContext);

  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };
  console.log(newTitle)
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  // Function to render product item
  const renderProductItem = (item) => (
    <div key={item._id} className="product-card mb-4">
      <div className="card h-100">
        <Item
          id={item._id}
          name={item.title}
          image={item.thumbnail}
          new_price={item.price}
        />
        <div className="card-body">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              if (cartItems.some((element) => element._id == item._id)) {
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
    <div>
      <Navbar></Navbar>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          

          {
            products.map((item) => {
              if (item._id == itemId) {
                console.log(item._id)
                return renderProductItem(item);
              }
              return null; 
            })
            }

          
        </div>
        
        <div className="col-md-8">
          <button onClick={fetchContent} disabled={loading}>Get More Info</button>
          {loading && <div style={{ display: 'block', height: '20px' }}>Loading...</div>}
          <textarea id="result" readOnly value={result} className="result-textarea" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
