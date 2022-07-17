import React from 'react';

class WhatWeDo5 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray what-we-do-section2">
                    <div className="container">
                        <div className="section-content what-we-do-content">
                            <div className="row d-flex justify-content-center flex-wrap">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="whatWedo-media-section">
                                        <div className="wt-media">
                                            <img src={require('./../../images/what-we/pic1.jpg').default} alt=""/>
                                        </div>
                                        <div className="whatWedo-media-content text-white">
                                            <div className="whatWedo-media-inner">
                                                <h3>Team Working Dedicatedly</h3>
                                                <p>We have 26+ years of experience with providing wide area of specialty services works listed below</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b40">
                                    <div className="whatWedo-info-section">
                                        {/* TITLE START*/}
                                        <div className="left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>What We do</div>
                                                <div className="sep-leaf-right" />
                                            </div>
                                            <h2>Providing Full Range of High Services Solution Worldwide</h2>
                                            <p>Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide</p>
                                        </div>
                                        {/* TITLE END*/}
                                        <div className="wt-icon-card-outer">
                                            <div className="wt-icon-card bg-white shadow">
                                                <div className="wt-card-header"><i className="flaticon-robotic-arm site-text-primary" /><span className="title-style-2 site-text-secondry">A Full Services</span></div>
                                                <div className="wt-card-content"><p>We are Providing different services in this sector to wide area of world</p></div>
                                            </div>
                                            <div className="wt-icon-card bg-white shadow">
                                                <div className="wt-card-header"><i className="flaticon-repair site-text-primary" /><span className="title-style-2 site-text-secondry">All Maintenance</span></div>
                                                <div className="wt-card-content"><p>We are Prous to Protect your organization with our award-winning products</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-large-title title-style-2">
                        <span>What we do</span>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo5;