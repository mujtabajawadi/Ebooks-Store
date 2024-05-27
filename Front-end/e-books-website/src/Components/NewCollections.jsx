import React, { useContext } from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections";
import Item from "./Item";
import { ShopContext } from "./ShopContext";



const NewCollections = () => {
  const { setItemId , setProdType} = useContext(ShopContext);
  return (
    <div className="new-collections">
      <div className=" container">
        <h1 className="h1">New Collection</h1>
        <hr />
        <div className="collections row">
          {new_collection.map((item, i) => {
            return (
              <div key={i} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" onClick={() => {setItemId(item.id);setProdType("saleProd")} }>
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
    </div>
  );
};

export default NewCollections;
