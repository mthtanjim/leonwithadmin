import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Header6 from "../Parts/Header6";
import Footer from "../Parts/Footer";
import Banner from "../Segments/Banner";
import FeaturedProducts from "../Segments/FeaturedProducts";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ProductData from '../../data/ProductData';

const images = [
  {
    original: require("./../../images/products/pic-1.jpg").default,
    thumbnail: require("./../../images/products/thumb/pic1.jpg").default,
  },
  {
    original: require("./../../images/products/pic-2.jpg").default,
    thumbnail: require("./../../images/products/thumb/pic2.jpg").default,
  },
  {
    original: require("./../../images/products/pic-5.jpg").default,
    thumbnail: require("./../../images/products/thumb/pic5.jpg").default,
  },
];

var bnrimg = require("./../../images/banner/5.jpg");

const copy_ShopDetail = () => {

  
  const {title} = useParams()
  console.log(title)

  // renderRightNav = (onClick, disabled) => {
  //   return (
  //     <button
  //       className="image-gallery-icon image-gallery-right-nav owl-next"
  //       onClick={onClick}
  //     >
  //       <i class="fa fa-chevron-right"></i>
  //     </button>
  //   );
  // };

  // renderLeftNav = (onClick, disabled) => {
  //   return (
  //     <button
  //       className="image-gallery-icon image-gallery-left-nav owl-prev"
  //       onClick={onClick}
  //     >
  //       <i class="fa fa-chevron-left"></i>
  //     </button>
  //   );
  // };

    return (
      <>
        <Header6 />
        <div className="page-content">
          <h1>{title}</h1>
          {/* INNER PAGE BANNER */}
          <Banner title="Product Detail" pagename="Shop" bgimage={bnrimg.default}/>
          {/* INNER PAGE BANNER END */}
          {/* SECTION CONTENT START */}
          <div className="section-full p-t80 p-b80">
            {/* PRODUCT DETAILS */}
            <div className="container woo-entry">
              <div className="row m-b30">
                <div className="col-lg-3 col-md-4  m-b30">
                  <div className="wt-box wt-product-gallery on-show-slider">
                    <ImageGallery renderLeftNav={this.renderLeftNav} renderRightNav={this.renderRightNav} items={images} showPlayButton={false}
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="product-detail-info bg-gray p-a30">
                    <div className="wt-product-title ">
                      <h2 className="post-title">
                        <NavLink to={"#"}>Plastic Helmate</NavLink>
                      </h2>
                    </div>
                    <h3 className="m-tb10">TK99.00 </h3>
                    <div className="wt-product-text">
                      <p>
                        Hundreds of thousands a still more glorious nights
                        around art table Nov 28
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* TABS CONTENT START */}
              <div className="row">
                <div className="col-md-12">
                  <div className="wt-tabs border bg-tabs">
                    <ul className="nav nav-tabs">
                      <li>
                        <a
                          data-toggle="tab"
                          href="#web-design-19"
                          className="active"
                        >
                          Description
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#graphic-design-19">
                          Specification
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#graphic-design-18">
                          More Details
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#developement-19">
                          Review
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="web-design-19" className="tab-pane active">
                        <div className=" p-a10">
                          <p className="m-b10">
                            Hundreds of thousands a still clouds hearts of the
                            stars stirred by starlight sky culture
                          </p>
                          <ul className="site-list-style-two m-b0">
                            <li>
                              Quality Control System , 100% Satisfaction
                              Guarantee
                            </li>
                            <li>
                              Unrivalled Workmanship, Professional and Qualified
                            </li>
                            <li>
                              Environmental Sensitivity, Personalised Solutions
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="graphic-design-19" className="tab-pane">
                        <table className="table m-b0 no-border">
                          <tbody>
                            <tr>
                              <td>
                                <b>Size</b>
                              </td>
                              <td>Small, Medium, Large &amp; Extra Large</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Color</b>
                              </td>
                              <td>Read, Blue, Green &amp; Black</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Length</b>
                              </td>
                              <td>35 cm</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Fabric</b>
                              </td>
                              <td>Cotton, Silk &amp; Synthetic</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Warranty</b>
                              </td>
                              <td>6 Months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div id="graphic-design-18" className="tab-pane">
                        <table className="table m-b0 no-border">
                          <tbody>
                            <tr>
                              <td>
                                <b>Size</b>
                              </td>
                              <td>Small, Medium, Large &amp; Extra Large</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Color</b>
                              </td>
                              <td>Read, Blue, Green &amp; Black</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Length</b>
                              </td>
                              <td>35 cm</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Warranty</b>
                              </td>
                              <td>6 Months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Brosure start (custom by Tanjim) */}
              <div className="service-side-btn m-b30 site-bg-secondry p-a20 text-white">
                <h2 className="wt-title">Brochures</h2>
                <p>View This product detials</p>
                <div className="wt-icon-box-wraper left ">
                  <NavLink to={"#"} className="btn-block  p-a15 m-tb10">
                    <span className="text-black m-r10">
                      <i className="fa fa-file-pdf-o" />
                    </span>
                    <strong className="text-uppercase text-black">
                      Download .PDF
                    </strong> 
                  </NavLink>
                </div>
              </div>
              {/* Brosure ends (custom by Tanjim) */}
              {/* TABS CONTENT START */}
            </div>
            {/* PRODUCT DETAILS */}
          </div>
          {/* CONTENT CONTENT END */}
          <FeaturedProducts />
        </div>
        <Footer />
      </>
    );

}

export default copy_ShopDetail;










// {/* <div>
//       <Link to="/">Back to result</Link>
//       <div className="row top">
//         <div className="col-2">
//           <img className="large" src={product.image} alt={product.name}></img>
//         </div>
//         <div className="col-1">
//           <ul>
//             <li>
//               <h1>{product.name}</h1>
//             </li>
//             <li>
//               <Rating
//                 rating={product.rating}
//                 numReviews={product.numReviews}
//               ></Rating>
//             </li>
//             <li>Pirce : ${product.price}</li>
//             <li>
//               Description:
//               <p>{product.description}</p>
//             </li>
//           </ul>
//         </div>
//         <div className="col-1">
//           <div className="card card-body">
//             <ul>
//               <li>
//                 <div className="row">
//                   <div>Price</div>
//                   <div className="price">${product.price}</div>
//                 </div>
//               </li>
//               <li>
//                 <div className="row">
//                   <div>Status</div>
//                   <div>
//                     {product.countInStock > 0 ? (
//                       <span className="success">In Stock</span>
//                     ) : (
//                       <span className="error">Unavailable</span>
//                     )}
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <button className="primary block">Add to Cart</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div> */}