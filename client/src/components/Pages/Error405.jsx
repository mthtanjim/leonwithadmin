import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';

class Error405 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* Error SECTION START */}
                    <div className="section-full p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound error-405 text-center">
                                    <h3>Http Error </h3>
                                    <strong className="site-text-primary title-style-2">405</strong>
                                    <h4 className="title-style-2">Method Not Allowed</h4>
                                    <p>The page you are looking for cannot be displayed beacause an invalid method(HTTP web) is being used.</p>
                                    <NavLink to={"/"} className="site-button site-btn-effect">GO TO HOME</NavLink>
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

export default Error405;