import React, { useContext } from "react";
import Item from "./Item";
import { ShopContext } from "./ShopContext";

const Cart = () => {

  const { totalAmount, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(cartItems);

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
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
              <div className="card-body">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-4">
        <div className="col-12 text-right">
          <h1>Total Amount: ${totalAmount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;