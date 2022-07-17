import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./InternalLoading";

const ShopProducts = (props) => {
const currentProducts = props.currentItems
  console.log('23 no products', currentProducts)


  return (
    <>
      <div className="row">
        
      {currentProducts.map((item, index) => {
          const { image, title, price } = item;
          
          return (
            <div key={index} className="col-lg-6 col-md-6 m-b30">
              <div className="wt-box wt-product-box block-shadow  overflow-hide">
                <div className="wt-thum-bx wt-img-overlay1 wt-img-effect zoom">
                  <img src={image} alt="" />
                </div>
                <div className="wt-info text-center">
                  <div className="p-a20 bg-white">
                    <h3 className="wt-title">
                      {/* <NavLink to={"/shop-detail"}>{item.title}</NavLink> */}
                      <Link to={title}>{title}</Link>
                    </h3>
                    <span className="price">
                      <ins>
                        <span>
                          <span className="Price-currencySymbol"> </span>
                          {price}
                        </span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopProducts;
