import "./Sale.css";
import React, { useContext, useState, useEffect } from "react";
import new_collection from "../assets/new_collections";
import Item from "./Item";
import { ShopContext } from "./ShopContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Sale = () => {
  const { setItemId, setProdType, setTitle } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const type = "saleProd";

  useEffect(() => {
    fetchProducts();
    document.title = "Sale";
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://ebooks-store.onrender.com/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(products);

  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div className="container">
        <h1 className="h1 ">SALES</h1>
        <hr />
        <div className="collections row">
          {products.map((item, i) => (
            <div
              key={i}
              className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
              onClick={() => {
                setItemId(item._id);
                setTitle(item.title);
              }}
            >
              <Item
                id={item._id}
                name={item.title}
                image={item.thumbnail}
                new_price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sale;
