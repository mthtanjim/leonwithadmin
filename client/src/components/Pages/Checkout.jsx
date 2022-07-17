import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class Checkout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Checkout" pagename="Wishlist" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-t80 p-b80">
                        {/* PRODUCT DETAILS */}
                        <div className="container woo-entry">
                            {/* SECTION CONTENT START */}
                            <div className="section-content">
                                <div className="row">
                                    {/* FROM STYEL 1 WITH ICON */}
                                    <div className="col-lg-4 col-md-12 m-b30">
                                        <div className="left wt-small-separator-outer">
                                            <h2>Your Order</h2>
                                        </div>
                                        <div className="wt-box your-order-list bdr-4 bdr-gray-light bdr-solid p-a30 site-bg-secondry">
                                            <ul>
                                                <li>Item One<strong className="pull-right site-text-primary">$15.00</strong></li>
                                                <li>Item Two<strong className="pull-right site-text-primary">$150.00</strong></li>
                                                <li><b> Cart Subtotal</b><strong className="pull-right site-text-primary">$165.00</strong></li>
                                                <li><b> Shipping</b><strong className="pull-right site-text-primary">$50.00</strong></li>
                                                <li><b> Cart Total</b><strong className="pull-right site-text-white">$215.00</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* FROM STYEL 1 */}
                                    <div className="col-lg-8 col-md-12">
                                        <div className="left wt-small-separator-outer">
                                            <h2>Billing Information</h2>
                                        </div>
                                        <div className="wt-box bdr-4 bdr-gray-light bdr-solid p-a30 bg-gray">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" className="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" className="form-control" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Company Name</label>
                                                    <input type="text" className="form-control" placeholder="Company Name" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Email Address</label>
                                                            <input type="email" className="form-control" placeholder="Enter email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <select className="form-control selectpicker">
                                                                <option>Usa</option>
                                                                <option>China</option>
                                                                <option>india</option>
                                                                <option>australia</option>
                                                                <option>japan</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>State / City</label>
                                                            <select className="form-control selectpicker">
                                                                <option>Los Angeles</option>
                                                                <option>Chicago</option>
                                                                <option>Phoenix</option>
                                                                <option>San Diego</option>
                                                                <option>Dallas</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Town</label>
                                                            <select className="form-control selectpicker">
                                                                <option>Columbia</option>
                                                                <option>Berkeley</option>
                                                                <option>The Woodlands</option>
                                                                <option>Plano</option>
                                                                <option>Boulder</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>EZIP / Post Code</label>
                                                            <input type="text" className="form-control" placeholder="EZIP / Post Code" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control m-b30" placeholder="Address 1" />
                                                    <input type="text" className="form-control" placeholder="Address 2" />
                                                </div>
                                                <div className="form-group form-inline">
                                                    <div className="radio">
                                                        <input id="checkmeout1" name="Public" defaultValue="checkmeout" type="checkbox" />
                                                        <label htmlFor="checkmeout1">Ship to the same address</label>
                                                    </div>
                                                </div>
                                                <button type="button" value="submit" className="site-button site-btn-effect">Save and Deliver Here</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SECTION CONTENT END */}
                        </div>
                        {/* PRODUCT DETAILS */}
                    </div>
                    {/* CONTENT CONTENT END */}
                </div>

                <Footer />

            </>
        );
    };
};

export default Checkout;