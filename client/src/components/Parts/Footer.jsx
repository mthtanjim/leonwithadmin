import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../Segments/Switcher";

var bgimage = require("./../../images/background/footer-bg.png");

class Footer extends React.Component {
  constructor(props) {
    super(props);

    var homepage4 = /\/home-transport/i;
    var homepage5 = /\/home-agriculture/i;

    if (homepage4.test(window.location.href)) {
      this.currentstate = {
        logo: require("./../../images/logo-2-light.png").default,
      };
    } else if (homepage5.test(window.location.href)) {
      this.currentstate = {
        logo: require("./../../images/logo-4-light.png").default,
      };
    } else {
      this.currentstate = {
        logo: require("./../../images/logo-light.png").default,
      };
    }
  }

  updateFooterLogo = (updatedlogo) => {
    this.currentstate.logo = updatedlogo.default;
  };

  render() {
    return (
      <>
        <footer className="site-footer footer-large footer-dark text-white footer-style1">
          {/* FOOTER BLOCKES START */}
          <div
            className="footer-top bg-no-repeat bg-bottom-right"
            style={{ backgroundImage: "url(" + bgimage.default + ")" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="footer-h-left">
                    <div className="widget widget_about">
                      <div className="logo-footer clearfix">
                        <NavLink to={"./"}>
                          <img src={this.currentstate.logo} alt="" />
                        </NavLink>
                      </div>
                      <p>Leon Pharmaceutical Limited</p>
                    </div>
                    <div className="widget recent-posts-entry">
                      <ul className="widget_address">
                        <li>
                          <i className="fa fa-map-marker" />
                          House # 13, Road # 02, Section #04, Uttara, Dhaka-1230
                        </li>
                        <li>
                          <i className="fa fa-envelope" />
                          info@leonbd.com
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-phone" /> 88-02-48958329
                        </li>
                      </ul>
                    </div>
                    <ul className="social-icons  wt-social-links footer-social-icon">
                      <li>
                        <NavLink to={"#"} className="fa fa-google" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-rss" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-facebook" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-twitter" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-linkedin" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="row footer-h-right">
                    <div className="col-lg-5 col-md-4">
                      <div className="widget widget_services">
                        <h3 className="widget-title">Useful links</h3>
                        <ul>
                          <li>
                            <NavLink to={"/about-1"}>About</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/about-1"}>Management</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>News & Media</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8">
                      <div className="widget widget_services">
                        <h3 className="widget-title">Our Products</h3>
                        <ul>
                          <li>
                            <NavLink to={"/#"}>Antibiotics</NavLink>
                            <NavLink to={"/#"}>Anthelmintic</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Antifungal</NavLink>
                            <NavLink to={"/#"}>Antiulcerents</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Antiprotozoal</NavLink>
                            <NavLink to={"/#"}>Gastroprokinetic & Laxative</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Antiemetic</NavLink>
                            <NavLink to={"/#"}>Cough Expectorants</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Antihistamines & Antiasthmatics</NavLink>
                            <NavLink to={"/#"}>Analgesics, Antipyretics & Anti inflammatory</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Cardiovascular Agents</NavLink>
                            <NavLink to={"/#"}>Vitamin & Minerals</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Anthelmintic</NavLink>
                            <NavLink to={"/#"}>Antidiabetics</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="widget widget_newsletter">
                                        <h3 className="widget-title">Newsletter</h3>
                                        <p>Subscribe to our newsletter to receive latest news on our services.</p>
                                        <div className="newsletter-input">
                                            <div className="input-group">
                                                <input id="email" type="text" className="form-control" name="email" placeholder="Enter your email" />
                                                <div className="input-group-append">
                                                    <button type="button" className="input-group-text nl-search-btn text-black site-bg-primary title-style-2">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom">
            <div className="container">
              <div className="wt-footer-bot-left d-flex justify-content-between">
                <span className="copyrights-text">
                  Copyright © 2022{" "}
                  <span className="site-text-primary">Leonbd</span>
                </span>
                <ul className="copyrights-nav">
                  <li>
                    <NavLink to={"#"}>Terms &amp; Condition</NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contactus"}>Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />
      </>
    );
  }
}

export default Footer;
