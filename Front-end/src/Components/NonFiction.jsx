import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import Item from "./Item";
import "./NonFiction.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function NonFiction(props) {
  const { setType, setItemId, setTitle } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
    setType("women");
    document.title = "Non-Fiction";
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
        <img src={props.banner} style={{ height: "350px", width: "100%" }} />
        <div className="shopcategory-products row ">
          <h1 className="nonfictionHeading">Non-Fiction Books</h1>
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
}
