import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";
import new_collections from "../assets/new_collections";
import data_product from "../assets/data";
import Products1 from "./Products1";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [type, setType] = useState();
  const [itemId, setItemId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [prodType, setProdType] = useState();
  const [newTitle,setTitle] = useState()

  // const updateTotal = (cartItems) => {
  //   let newTotal = 0;
  //   if (cartItems.length > 0) {
  //     cartItems.forEach((product) => {
  //       const price = parseInt(product.new_price);
  //       newTotal += price;
  //     });
  //   }
  //   setTotalAmount(newTotal);
  // };

  const addToCart = (newItemAdd) => {
    const prev = cartItems;
    const updatedCart = [...prev, newItemAdd];
    setCartItems(updatedCart);

    // updateTotal(updatedCart);
    alert("Item Added");
  };
  console.log(cartItems);
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((product) => product._id != itemId);
    setCartItems(updatedCart);
    // updateTotal(updatedCart);
    alert("Item Removed");
  };
  console.log(cartItems);
  const contextvalue = {
    new_collections,
    all_product,
    type,
    setType,
    data_product,
    itemId,
    setItemId,
    addToCart,
    removeFromCart,
    cartItems,
    totalAmount,
    prodType,
    setProdType,
    newTitle,
    setTitle
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
