import React, { createContext, useState, useEffect } from "react";
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
  const [newTitle, setTitle] = useState();
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (newItemAdd) => {
    const prev = cartItems;
    const updatedCart = [...prev, newItemAdd];
    setCartItems(updatedCart);

    // updateTotal(updatedCart);
    alert("Item Added");
  };
  //Setting Cart Data to the Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(contextvalue.cartItems));
  }, [cartItems]);
  //Getting Cart Data from Local Storage
  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cart");
    if (localCartData == []) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
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
    setTitle,
    setSelectedItems,
    selectedItems,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
