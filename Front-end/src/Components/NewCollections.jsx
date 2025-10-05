import React, { useContext, useState, useEffect } from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections";
import Item from "./Item";
import { ShopContext } from "./ShopContext";
import axios from "axios";

const NewCollections = () => {
  const { setProdType, setItemId, setTitle } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
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
    <div className="new-collections">
      <div className="container">
        <h1 className="h1">New Collection</h1>
        <hr />
        <div className="popular-item row">
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
    </div>
  );
};

export default NewCollections;
