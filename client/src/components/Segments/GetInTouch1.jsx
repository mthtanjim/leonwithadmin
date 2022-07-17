import React from 'react';
import { NavLink } from 'react-router-dom';

class GetInTouch1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t0 p-b50 bg-white get-in-touch-wraper">
                    <div className="container">
                        <div className="get-in-touch">
                            <div className="row justify-content-between d-flex align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="get-in-touch-pic">
                                        <img src={require('./../../images/home-11/intro-pic4.png').default} alt="" />
                                        {/* Circle Animation Start*/}
                                        <div className="ripple-background">
                                            <div className="ls-circle ls-xxlarge ls-shade1" />
                                            <div className="ls-circle ls-xlarge ls-shade2" />
                                            <div className="ls-circle ls-large ls-shade3" />
                                            <div className="ls-circle ls-medium ls-shade4" />
                                            <div className="ls-circle ls-small ls-shade5" />
                                        </div>
                                        {/* Circle Animation End*/}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="get-in-touch-info">
                                        <h2 className="wt-title">Quality and reliability services to
                                            provide a solution to your project,
                                            we do it all and fast
                                        </h2>
                                        <NavLink to={"/about-1"} className="site-button site-btn-effect">Download PDF</NavLink>
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

export default GetInTouch1;