import React, { useContext, useEffect } from "react";
import { ShopContext } from "./ShopContext";
// import ShopCategory from "./ShopCategory";
// import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "./Item";
import "./Biographies.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Biographies = (props) => {
  const { type, setType, all_product ,setProdType,setItemId } = useContext(ShopContext);
  useEffect(() => {
    setType("kid");
    document.title = "Biographies";
  }, []);
  return (
    <div className="bg-white">
      <Navbar></Navbar>
    <div className="container">
      <img src={props.banner} style={{height:"350px",width:"100%"}}/>
      <div className="shopcategory-products row">
      <h1 className="biographiesHeading">Non-Fiction Books</h1>

        {all_product.map((item, i) => {
          console.log(item.category);
          if (type === item.category) {
            console.log(type);
            return (
              <div key={i} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" onClick={() =>{setItemId(item.id);setProdType("bioProd");}}>
              <Item
                
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              /></div>
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
};

export default Biographies;
