import React, { useContext, useEffect } from "react";
//import dropdown_icon from "../components/assets/dropdown_icon.png";
import { ShopContext } from "./ShopContext";
import "./Home.css";
import Item from "./Item";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Popular from "./Popular";
import Offers from "./Offers";
import NewCollections from "./NewCollections";
import NewsLetter from "./NewsLetter";
import Reviews from "./Reviews";
import Footer from "./Footer";


const Home = (props) => {
  const { type, setType, all_product, setProdType, setItemId } =
    useContext(ShopContext);
  useEffect(() => {
    setType("men");
    document.title = "Home";
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
