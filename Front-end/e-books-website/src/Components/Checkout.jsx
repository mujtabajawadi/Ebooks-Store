import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

const Checkout = () => {
  const { cartItems, selectedItems } = useContext(ShopContext);

  const checkout = async () => {
    try {
      const res = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: selectedItems.map((item) => ({
            id: item.id,
            price: item.price,
            name: item.title,
          })),
        }),
      });
      console.log(selectedItems);

      if (!res.ok) {
        throw new Error("Failed to initiate checkout");
      }

      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.error("Checkout error:", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Checkout</h1>
      <button className="btn btn-primary" onClick={checkout}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
