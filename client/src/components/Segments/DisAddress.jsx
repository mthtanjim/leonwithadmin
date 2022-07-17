import React from 'react';
import { NavLink } from 'react-router-dom';
import AddressData from '../../data/AddressData';


var bgimg = require("./../../images/background/bg-map2.png");


class DisAddress extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                

                {AddressData.Products.map((item, index) => (
                <div key={index} className="col-lg-6 col-md-6 m-b50">
                      <div className="contact-info">
                        <div className="contact-info-inner">
                          {/* TITLE START*/}
                          <div className=" left wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                              <div className="sep-leaf-left" />
                              <div>{item.Location}</div>
                              <div className="sep-leaf-right" />
                            </div>
                            {/* <h2>Our Full Info</h2> */}
                          </div>
                          {/* TITLE END*/}
                          <div
                            className="contact-info-section"
                            style={{
                              backgroundImage: "url(" + bgimg.default + ")",
                            }}
                          >
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Phone Number
                                </h3>
                                <p>{item.Phone}</p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Address info
                                </h3>
                                <p>
                                  {item.Address}
                                </p>
                              </div>
                            </div>     
                          </div>
                        </div>
                      </div>
                </div>

))}

{/* 

                    {products.map((item, index) => (
                        <div key={index} className="col-lg-6 col-md-6 m-b30">
                            
                            <div className="wt-box wt-product-box block-shadow  overflow-hide">
                                
                                <div className="wt-thum-bx wt-img-overlay1 wt-img-effect zoom">
                                    <img src={item.image.default} alt="" />
                                </div>
                                <div className="wt-info  text-center">
                                    <div className="p-a20 bg-white">
                                        <h3 className="wt-title">
                                            <NavLink to={"/shop-detail"}>{item.title}</NavLink>
                                        </h3>
                                        <span className="price">
                                            <ins>
                                                <span><span className="Price-currencySymbol">The </span>{item.price}</span>
                                            </ins>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
 */}


                </div>
            </>
        );
    }
};

export default DisAddress;