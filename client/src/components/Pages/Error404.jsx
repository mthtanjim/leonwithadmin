import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-3.jpg');

class Error404 extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    {/* Error SECTION START */}
                    <div className="error-full-page bg-cover overlay-wraper" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                        <div className="overlay-main bg-black opacity-07" />
                        <div className="error-full-page-inner">
                            <div className="error-full-page-inner-info">
                                <div className="error-media">
                                    <img src={require('./../../images/error/404.png').default} alt="" />
                                </div>
                                <h3 className="title-style-2">Error</h3>
                                <strong>404</strong>
                                <h4 className="title-style-2">
                                    <img src={require('./../../images/error/404-sep.png').default} alt="" className="e-left-img" />
                                    Oops! Looks like the page is gone.
                                    <img src={require('./../../images/error/404-sep.png').default} alt="" className="e-right-img" />
                                </h4>
                                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <NavLink to={"/"} className="site-button site-btn-effect">GO TO HOME</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Error  SECTION END */}
                </div>
            </>
        );
    };
};

export default Error404;