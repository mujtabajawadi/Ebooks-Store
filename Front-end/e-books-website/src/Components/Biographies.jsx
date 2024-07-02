import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import Item from "./Item";
import "./Biographies.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Biographies = (props) => {
  const { type, setType, all_product, setProdType, setItemId, setTitle } =
    useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
    setType("kid");
    document.title = "Biographies";
  }, []);

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
          <h1 className="biographiesHeading">Biographies</h1>
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

export default Biographies;
