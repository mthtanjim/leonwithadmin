import React from "react";
import GoogleMaps from "simple-react-google-maps";
import Header from "./../Parts/Header6";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import DisAddress from "./../Segments/DisAddress";
import PageSidebar from "./../Segments/PageSidebar";

var bnrimg = require("./../../images/banner/5.jpg");
var bnr1 = require("./../../images/background/bg-7.jpg");
var bgimg = require("./../../images/background/bg-map2.png");

const ContactUs = () => {
 
    return (
      <>
        <Header />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Contact Us"
            pagename="Contact Us"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          {/* SECTION CONTENTG START */}
          {/* CONTACT FORM */}
          {/* <div className="section-full  p-t80 p-b50 bg-cover" style={{ backgroundImage: "url(" + bnr1.default + ")" }}> */}
          <div
            className="section-full  p-t80 p-b50 bg-cover"
            style={{ backgroundColor: "rgb(39, 39, 41)" }}
          >
            <div className="section-content">
              <div className="container">
                <div className="contact-one">
                  {/* CONTACT FORM*/}
                  <div className="row  d-flex justify-content-center flex-wrap">
                    <div className="col-lg-6 col-md-6 m-b30">
                      <form
                        className="cons-contact-form"
                        method="post"
                        action="#"
                      >
                        {/* TITLE START */}
                        <div className="section-head left wt-small-separator-outer">
                          <div className="wt-small-separator site-text-primary">
                            <div className="sep-leaf-left" />
                            <div>Contact Form</div>
                            <div className="sep-leaf-right" />
                          </div>
                          {/* <h2>Get In Touch</h2> */}
                        </div>
                        {/* TITLE END */}
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                name="username"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                name="email"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                name="phone"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                name="subject"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message" className="form-control" rows={4} placeholder="Message" defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="button" className="site-button site-btn-effect"
                            >
                              Submit Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="contact-info">
                        <div className="contact-info-inner">
                          {/* TITLE START*/}
                          <div className="section-head left wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                              <div className="sep-leaf-left" />
                              <div>Contact info</div>
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
                                  Phone number
                                </h3>
                                <p>88-02-48958329</p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Email address
                                </h3>
                                <p>info@leonbd.com</p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Address info
                                </h3>
                                <p>
                                  House # 13, Road # 02, Section #04, Uttara,
                                  Dhaka-1230
                                </p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Opening Hours
                                </h3>
                                <ul className="list-unstyled m-b0">
                                  <li>Sat-Thu: 9 am – 6 pm</li>
                                  <li>Friday: Closed</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                            {/* Distributin channel Start */}
                  <h2
                    style={{
                      color: "silver",
                      textAlign: "center",
                      paddingTop: "100px",
                    }}
                  >
                    Distribution Network
                  </h2>
                  <div className="section-full p-t80 p-b50">
                    <div className="container">
                      <div className="section-content">
                        <div className="row d-flex justify-content-center">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 m-b30">
                            <DisAddress />
                          </div>

                          {/* SIDE BAR START */}
                          
                            {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
                                        <PageSidebar />
                                    </div>
                                     */}
                          {/* SIDE BAR END */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Distributin channel Ends */}
                </div>
              </div>
            </div>
          </div>
          {/* GOOGLE MAP */}
          <div className="section-full bg-white p-tb80">
            <div className="section-content">
              <div className="container">
                <div className="gmap-outline">
                  <GoogleMaps
                    apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                    style={{ height: "400px", width: "100%" }}
                    zoom={12}
                    center={{ lat: 23.777176, lng: 90.399452 }}
                    // markers={{ lat: 34.073280, lng: -118.251410 }} //optional
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

export default ContactUs;
