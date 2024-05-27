import React, { useContext, useEffect } from "react";
//import dropdown_icon from "../components/assets/dropdown_icon.png";
import { ShopContext } from "./ShopContext";
//import ShopCategory from "./ShopCategory";
import Item from "./Item";
import "./NonFiction.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NonFiction(props) {
  const { type, setType, all_product,setProdType,setItemId  } = useContext(ShopContext);
  useEffect(() => {
    setType("women");
    document.title = "Non-Fiction";
  }, []);
  return (
    <div className="bg-white">
      <Navbar></Navbar>
    <div className="container">
      <img src={props.banner} style={{height:"350px",width:"100%"}}/>
      <div className="shopcategory-products row">
      <h1 className="nonfictionHeading">Non-Fiction Books</h1>

        {all_product.map((item, i) => {
          // console.log(item.category);
          if (type === item.category) {
            // console.log(type);
            return (
              <div key={i} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" onClick={() =>{ setItemId(item.id);setProdType("nonficProd")}}>
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
