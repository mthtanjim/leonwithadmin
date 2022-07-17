import React from 'react';
import CountUp from 'react-countup';

var bnr1 = require('./../../images/background/bg-2.jpg');

class Statistics12 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b40  overlay-wraper bg-cover bg-no-repeat" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main site-bg-secondry opacity-09" />
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center text-white">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>All Solutions</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Get A Solution For All Industries</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="counter3-section-outer-top">
                            <div className="counter-outer">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-6 m-b30 ">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={35} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">Projects Completed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={1435} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">Work Employed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={750} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">Work facilities</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={26} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">Winning Awards</span>
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

export default Statistics12;