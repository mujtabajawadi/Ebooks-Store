import React, { useContext, useEffect, useState } from "react";
import "./Popular.css";
import { ShopContext } from "./ShopContext";
import Item from "./Item";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Popular = () => {
  const { setProdType, setItemId, setTitle } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
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
    <div className="popular">
      <div className="container">
        <h1 className="h1">Popular Books</h1>
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

export default Popular;
