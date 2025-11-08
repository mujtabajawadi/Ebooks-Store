import React, { useContext, useState } from "react";
import Item from "./Item";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Cart = () => {
  const {
    localCart,
    cartItems,
    removeFromCart,
    setSelectedItems,
    selectedItems,
  } = useContext(ShopContext);

  const handleCheckout = (id) => {
    const wantToBuy = cartItems.find((item) => item._id == id);
    setSelectedItems([
      { id: wantToBuy._id, price: wantToBuy.price, title: wantToBuy.title },
    ]);
    console.log(selectedItems);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <h1 className="text-center">Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {cartItems.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <Item
                id={item._id}
                name={item.title}
                image={item.thumbnail}
                new_price={item.price}
              />
              <div className="card-body">
                <button
                  className="btn m-1 btn-danger btn-block"
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                >
                  Remove
                </button>
                <button
                  className="btn m-1 btn-primary btn-block"
                  onClick={() => handleCheckout(item._id)}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItems.length > 0 && <Checkout items={selectedItems} />}
    </div>
  );
};

export default Cart;
