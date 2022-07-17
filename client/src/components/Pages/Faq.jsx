import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/8.jpg');

class Home3 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="FAQ'S" pagename="FAQ'S" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* FAQ SECTION START */}
                    <div className="section-full p-t80 p-b50 bg-white">
                        <div className="container">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    <div>Frequently Asked Questions?</div>
                                    <div className="sep-leaf-right" />
                                </div>
                                <h2>Find informative answers to all your questions about Industrial products below.</h2>
                            </div>
                            {/* TITLE END*/}

                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                        {/* Accordian */}
                                        <div className="wt-accordion acc-bg-gray faq-accorfion" id="accordion5">
                                            <div className="panel wt-panel">
                                                <div className="acod-head  acc-actives">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                            What is your cancellation policy?
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse show">
                                                    <div className="acod-content p-a20 bg-gray">
                                                        <p>
                                                            Providing outstanding service is the core of our business. Because spa services reserv especially for you, we ask that you notify us 24 hours in advance to change or cancel appointments without penalty. Without 24 hour notice, we will charge a fee of 50% of the price of the cancelled service, and 100% of the service in the event of a “no-show.” We thank you in advance for cooperation and understanding. Spa packages and groups must give a minimum 48 hour cancellation notice.</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                            What are your hours?
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">
                                                        Monday – Friday: 9 to 7pm Saturday: 8 to 6pm Sunday: Closed
                  </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                            How do I schedule an appointment?
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">You can schedule your appointment by phone, in person or online. Reservations for your appointment are held with a credit card or gift certificate.</div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                            What should I wear for a spa or salon treatment?
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseFour5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">No special clothing is required; come as you are! If you are enjoying several services, you will be provided with a robe and slippers. Towels for the eucalyptus steam shower are available. Your personal comfort is always most important to us!</div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                            What if I have lost my gift certificate?
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseFive5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">Your certificate is considered the same as cash. It is necessary to keep track of this valuable property.</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="faq-sidebar">
                                            <div className="service-side-btn m-b30 site-bg-secondry p-a20 text-white">
                                                <h2 className="wt-title">Brochures</h2>
                                                <p>View our 2020 financial prospectus brochure for an easy to read guide on all of the services offer.</p>
                                                <div className="wt-icon-box-wraper left ">
                                                    <NavLink to={"#"} className="btn-block  p-a15 m-tb10">
                                                        <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                        <strong className="text-uppercase text-black">Download .PDF</strong>
                                                    </NavLink>
                                                </div>
                                                <div className="wt-icon-box-wraper left">
                                                    <NavLink to={"#"} className="btn-block  p-a15 m-tb10">
                                                        <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                        <strong className="text-uppercase text-black"> Download .DOC</strong>
                                                    </NavLink>
                                                </div>
                                                <div className="wt-icon-box-wraper left">
                                                    <NavLink to={"#"} className="btn-block p-a15 m-t10">
                                                        <span className="text-black m-r10"><i className="fa fa-file-powerpoint-o" /></span>
                                                        <strong className="text-uppercase text-black">Download .PPT</strong>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="wt-box p-a30 need-help site-bg-primary text-white m-b30">
                                                <h2 className="m-t0">Need any help!</h2>
                                                <p>Find answers to frequently asked questions about Bizipress, contacts and general customer account information </p>
                                                <NavLink to={"/contactus"} className="site-button-secondry site-btn-effect">Contact Us</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FAQ SECTION END */}
                </div>

                <Footer />

            </>
        );
    };
};

export default Home3;