import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';

class Error403 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* Error SECTION START */}
                    <div className="section-full p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound error-403">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="error-303">
                                                <img src={require('./../../images/error/404.png').default} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <form method="post">
                                                <strong className="site-text-primary title-style-2">403</strong>
                                                <h4 className="title-style-2">Access Denied/ Forbidden</h4>
                                                <p>The page or resource you were trying to reach is absolutely forbidden for some reason.</p>
                                                <div className="error-input">
                                                    <div className="input-group">
                                                        <input id="seaarch" type="text" className="form-control" name="search" placeholder="Search Here...!" />
                                                        <span className="input-group-addon"><button type="button" className="error-search-btn">Search</button></span>
                                                    </div>
                                                </div>
                                                <NavLink to={"/"} className="site-button site-btn-effect">GO TO HOME</NavLink>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Error  SECTION END */}
                </div>

                <Footer />

            </>
        );
    };
};

export default Error403;