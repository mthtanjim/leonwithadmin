import React from 'react';

var bnr1 = require('./../../images/background/bg-6.jpg');

class SelfIntro1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full self-intro-section-outer overlay-wraper" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main site-bg-secondry opacity-09" />
                    <div className="self-intro-top bg-gray p-t80 p-b50">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-6 col-md-12">
                                    {/* TITLE START*/}
                                    <div className="left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Call Us And get it done!</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>We Have 30+ Years Industrial Experiences</h2>
                                        <p>Dramatically disseminate standardized metrics after resource leveling processes for change for interoperable</p>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-intro-bottom p-t80 p-b80">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-6 col-md-6">
                                    <div className="self-info-detail">
                                        <div className="wt-icon-box-wraper p-b10 left">
                                            <div className="icon-md m-b20">
                                                <span className="icon-cell site-text-primary"><i className="flaticon-call" /></span>
                                            </div>
                                            <div className="icon-content text-white">
                                                <h3 className="wt-tilte">Have a question? call us now</h3>
                                                <p>+(06) 0205 783 5586</p>
                                            </div>
                                        </div>
                                        <div className="wt-icon-box-wraper p-b10  left">
                                            <div className="icon-md m-b20">
                                                <span className="icon-cell site-text-primary"><i className="flaticon-mail" /></span>
                                            </div>
                                            <div className="icon-content text-white">
                                                <h3 className="wt-tilte">Need support? Drop us an Email</h3>
                                                <p>info@thewebmax.com</p>
                                            </div>
                                        </div>
                                        <div className="wt-icon-box-wraper  left">
                                            <div className="icon-md m-b20">
                                                <span className="icon-cell site-text-primary"><i className="flaticon-history" /></span>
                                            </div>
                                            <div className="icon-content text-white">
                                                <h3 className="wt-tilte">We are open on</h3>
                                                <p>Mon - Sat  07:00 - 21:00 </p>
                                                <p>Sunday - Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="self-intro-pic-block">
                            <div className="wt-media"><img src={require('./../../images/self-pic.png').default} alt="" /></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default SelfIntro1;