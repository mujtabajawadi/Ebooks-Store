import "./Sale.css";
import React, { useContext } from "react";
import new_collection from "../assets/new_collections";
import Item from "./Item";
import { ShopContext } from "./ShopContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Sale = () => {
  const { setItemId, setProdType } = useContext(ShopContext);
  const type = "saleProd";
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div className="container">
        <h1 className="h1 ">SALES</h1>
        <hr />
        <div className="collections row">
          {new_collection.map((item, i) => {
            return (
              <div
                key={i}
                className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                onClick={() => {
                  setItemId(item.id);
                  setProdType("saleProd");
                }}
              >
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sale;
