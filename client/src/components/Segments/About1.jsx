import React from 'react';

import { NavLink } from 'react-router-dom';

class About1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full welcome-section-outer">
                    <div className="welcome-section-top bg-white p-tb80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="img-colarge">
                                        <div className="colarge-1"><img src={require('./../../images/colarge/s3.jpg').default} alt="" className="slide-righ" /></div>
                                        <div className="since-year-outer"><div className="since-year"><span>Since</span><strong>2013</strong></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="welcom-to-section">
                                        {/* TITLE START*/}
                                        <div className="left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left"/>
                                                <div>Welcome to Leonbd</div>
                                                <div className="sep-leaf-right"/>
                                            </div>
                                        </div>
                                        <h2>A Leding Pharmaceutical Industry in Bangladesh</h2>
                                        {/* TITLE END*/}
                                        <ul className="site-list-style-one">
                                            <li>	Innovation</li>
                                            <li>	Efficiency</li>
                                            <li>	Responsibility</li>
                                        </ul>
                                        <p>Leon Pharmaceuticals limited (LPL) is one of the Fastest growing & leading Pharmaceuticals in Bangladesh manufacturing branded generic products for local and overseas market in Georgia.(intersection of Europe & Asia). Leon pharmaceuticals Ltd began its journey in the year 2013 in Bangladesh by introducing lifesaving and innovative Pharmaceuticals products from world class pharmaceutical companies like Grunenthal, Biotest, Abbott, Janssen and Vifor.</p>
                                        <div className="welcom-to-section-bottom d-flex justify-content-between">
                                            <div className="welcom-btn-position"><NavLink to={"/about"} className="site-button-secondry site-btn-effect">More About</NavLink></div>
                                            {/* <div className="welcom-sign-pic"><img src={require('./../../images/sign.png').default} alt="" /></div> */}
                                            {/* <div className="welcom-sign-info"><strong>Brayden</strong><span>( CEO &amp; Founder )</span></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About1;