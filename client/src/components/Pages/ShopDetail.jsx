import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Header6 from "../Parts/Header2";
var bnrimg = require("./../../images/banner/5.jpg");

const ShopDetail = () => { 
  
  const {title} = useParams()
  
  console.log('this is from the parems: ', title)
  return (
    <div>
      <Header6 />
        <h1>{title}</h1>
        <h2>Shop Title</h2>
    </div>
  )
}

export default ShopDetail



