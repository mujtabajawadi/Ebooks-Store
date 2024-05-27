import React, { useContext, useEffect } from "react";
//import dropdown_icon from "../components/assets/dropdown_icon.png";
import { ShopContext } from "./ShopContext";
import "./Fiction.css";
import Item from "./Item";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Fiction(props) {
  const { type, setType, all_product, setProdType, setItemId } =
    useContext(ShopContext);
  useEffect(() => {
    setType("men");
    document.title = "Fiction";
  }, []);
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <div className="container">
        <img src={props.banner} style={{ height: "350px", width: "100%" }} />
        <div className="shopcategory-products row ">
          <h1 className="fictionHeading">Fiction Books</h1>
          {all_product.map((item, i) => {
            if (type === item.category) {
              return (
                <div
                  key={i}
                  className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                  onClick={() => {
                    setItemId(item.id);
                    setProdType("ficProd");
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
            } else {
              return null;
            }
          })}
        </div>
       
      </div>
      <Footer></Footer>
    </div>
  );
}
