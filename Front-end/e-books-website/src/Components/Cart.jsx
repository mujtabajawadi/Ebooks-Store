import React, { useContext } from "react";
import Item from "./Item";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";

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
                id={item._id}
                name={item.title}
                image={item.thumbnail}
                new_price={item.price}
              />
              <div className="card-body">
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                >
                  Remove
                </button>
                <Link className="checkout" to="/checkout">
                <button
                  className="btn btn-danger btn-block"
                >
                  Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row mt-4">
        <div className="col-12 text-right">
          <h1>Total Amount: ${totalAmount}</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;