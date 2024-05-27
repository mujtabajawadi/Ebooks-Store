import React, { useContext, useLayoutEffect } from "react";
import { ShopContext } from "./ShopContext";
import { useLocation } from "react-router-dom";
import Item from "./Item";
import "./Products1.css";
import star_icon from "../assets/Images/star_icon.png";
import star_dull_icon from "../assets/Images/star_dull_icon.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
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
    <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
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
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
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
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <img src={star_icon} className="star mr-1" alt="star" />
            <img src={star_icon} className="star mr-1" alt="star" />
            <img src={star_icon} className="star mr-1" alt="star" />
            <img src={star_icon} className="star mr-1" alt="star" />
            <img src={star_dull_icon} className="star mr-1" alt="star" />
            <p className="mb-0">(122)</p>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            molestias aliquam quos explicabo fuga nihil in voluptate perferendis
            consequatur nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;