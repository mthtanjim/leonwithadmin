import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";

const products = [
  {
    image: require("./../../images/products/Leon(1).jpeg"),
    title: "Dipicard Plus",
    price: "Amlodipine + Atenolol",
  },
  {
    image: require("./../../images/products/Leon(2).jpeg"),
    title: "Perigut",
    price: "Generic: Domperidone",
  },
  {
    image: require("./../../images/products/Leon(3).jpeg"),
    title: "Perizol",
    price: "Generic : Omeprazole",
  },
  {
    image: require("./../../images/products/Leon(4).jpeg"),
    title: "Novaxen",
    price: "Generic : Naproxen",
  },
  {
    image: require("./../../images/products/Leon(5).jpeg"),
    title: "Polyxim",
    price: "Generic Name : Cefixime",
  },
  {
    image: require("./../../images/products/Leon(6).jpeg"),
    title: "Novacal D",
    price: "Generic : Calcium + Vitamin D3",
  },
];

class FeaturedProducts extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      margin: 30,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        640: {
          items: 2,
        },
        767: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1024: {
          items: 3,
        },
      },
    };
    return (
      <>
        <div className="section-full p-t80 p-b50 bg-gray">
          <div className="container">
            <div className="section-content">
              {/* TITLE START */}
              <div className="wt-separator-two-part">
                <div className="row wt-separator-two-part-row">
                  <div className="col-lg-8 col-md-6 wt-separator-two-part-left">
                    {/* TITLE START*/}
                    <div className="section-head left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div className="sep-leaf-left" />
                        <div>Our Best Products</div>
                        <div className="sep-leaf-right" />
                      </div>
                      {/* <div className="sep-leaf-left" />
                                            <div><h3>Our Best Products</h3></div>
                                            <div className="sep-leaf-right" /> */}
                    </div>
                    {/* TITLE END*/}
                  </div>
                  <div className="col-lg-4 col-md-6 wt-separator-two-part-right text-right">
                    <NavLink to={"#"} className="site-button site-btn-effect">
                      More Detail
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <OwlCarousel
                className="owl-carousel featured-products owl-btn-vertical-center"
                {...options}
              >
                {products.map((item, index) => (
                  <div key={index} className="item">
                    <div className="wt-box wt-product-box   overflow-hide">
                      <div className="wt-thum-bx wt-img-overlay1 wt-img-effect zoom">
                        <img src={item.image.default} alt="" />
                        {/* <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                    <NavLink to={"#"}>
                                                            <i className="fa fa-cart-plus wt-icon-box-xs" />
                                                        </NavLink>
                                                        <NavLink to={"#"} className="mfp-link">
                                                            <i className="fa fa-heart wt-icon-box-xs" />
                                                        </NavLink>
                                                    </div>
                                                </div> */}
                      </div>
                      <div className="wt-info  text-center">
                        <div className="p-a20 bg-white">
                          <h3 className="wt-title">
                            <NavLink to={"/#"}>{item.title}</NavLink>
                            {/* <NavLink to={"/shop-detail"}>{item.title}</NavLink> */}
                          </h3>
                          <span className="price">
                            <ins>
                              <span>
                                <span className="Price-currencySymbol"></span>
                                {item.price}
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FeaturedProducts;
