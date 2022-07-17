import React from "react";
import { NavLink } from "react-router-dom";

class About2 extends React.Component {
  render() {
    return (
      <>  
        <div className="section-full welcome-section-outer">
          <div className="welcome-section-top bg-white p-t80 p-b50">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="welcom-to-section">
                    {/* TITLE START*/}
                    <div className="left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div className="sep-leaf-left" />
                        <div>Welcome to</div>
                        <div className="sep-leaf-right" />
                      </div>
                    </div>
                    <h3>Leon Pharmaceuticals limited</h3>
                    {/* TITLE END*/}
                    <p>
                      Company Profile: Leon Pharmaceuticals limited (LPL) is one
                      of the Fastest growing & leading Pharmaceuticals in
                      Bangladesh manufacturing branded generic products for
                      local and overseas market in Georgia.(intersection of
                      Europe & Asia). Leon pharmaceuticals Ltd began its journey
                      in the year 2013 in Bangladesh by introducing lifesaving
                      and innovative Pharmaceuticals products from world class
                      pharmaceutical companies like Grunenthal, Biotest, Abbott,
                      Janssen and Vifor. <br /> <br />
                      Our communication slogan, "Colors of good time". This is a
                      phrase that expresses our pledge to develop new medicines
                      that are vital to patients. At the same time, this means
                      that LEON hopes to share in the bravery, hope and desires
                      of patients.  <br /> <br />Leon pharmaceuticals organized professional
                      marketing with focused promotion through dedicated well
                      trained teams and supplied the products throughout the
                      country with own developed distribution network.  <br /> <br /> Leon
                      pharmaceuticals believes and adheres to values like
                      Quality, Knowledge and Responsibility in all aspects of
                      its operation and earned respect and recognition of its
                      valued customers in the healthcare sector of Bangladesh.
                    </p>

                    <h3> Managing Director </h3>
                    <p>
                      One of the pioneer architects in Bangladesh. Graduated
                      from BUET in 1993. He very soon shaped up his very own
                      style in his all-business units. The “Dream come true”
                      project of Architect Abdus Salam.
                      <br /> <br />
                      <p>
                        <button
                          onClick={() =>
                            window.open(
                              "https://www.profilelimited.com/",
                              "_blank"
                            )
                          }
                        >
                          Learn More
                        </button>
                      </p>
                    </p>

                    <div className="welcom-to-section-bottom d-flex justify-content-between">
                      {/* <div className="welcom-btn-position"><NavLink to={"/about-1"} className="site-button-secondry site-btn-effect">More About</NavLink></div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="img-colarge2">
                    <div className="colarge-2 slide-right">
                      <img
                        src={require("./../../images/colarge/s2.jpg").default}
                        alt=""
                      />
                    </div>
                    <div className="colarge-2-1">
                      <img
                        src={require("./../../images/colarge/s3.jpg").default}
                        alt=""
                      />
                    </div>
                    {/* <div className="since-year-outer2"><div className="since-year2"><span>Since</span><strong>2015</strong></div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About2;
