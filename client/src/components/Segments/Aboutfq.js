import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/8.jpg');

class Aboutfq extends React.Component {
    render() {
        return (
            <>
                <div className="page-content">
                    {/* FAQ SECTION START */}
                    <div className="section-full p-t80 p-b50 bg-white">
                        <div className="container">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    {/* <div>Frequently Asked Questions?</div> */}
                                    <div className="sep-leaf-right" />
                                </div>
                                {/* <h2>Find informative answers to all your questions about Industrial products below.</h2> */}
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
                                                           Vision 
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse show">
                                                    <div className="acod-content p-a20 bg-gray">
                                                        <p>
                                                        To be regarded and recognized as one of the technological most advanced, the most value driven in the world.</p>
                                                        </div>
                                                </div>
                                            </div>
                                            
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                           Mission
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">
                                                    We are dedicated to the development and manufacture of advanced pharmaceutical products with meet healthcare requirement and patient expectation. Company is committed to the following guiding principle.
                                                    -	Innovation
                                                    -	Efficiency
                                                    -	Responsibility

                      </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                        Corporate social Responsibilities
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">
                                                    As part of our Corporate Social Responsibility (CSR), we are committed to the Interests of the society by taking responsibility for the impact of our activities on customers, employees, shareholders, communities and the environment in all aspects of our operations.
                                                    The company is committed to improving the quality of life for employees and their families as well as for the local community and society at large.


                    </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                        R & D Capabilities
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">
                                                    At Leon Pharmaceuticals Ltd, R&D is a major strength. Our dedicated research team is committed to developing arrange of formulation and products as per customer specifications and for positively impacting health and well-being.
                                                    Our R&D center is active across almost all facets of the business, which includes:
                                                    Developing generic products and pharmaceutical formulations Identifying niche areas (such as Cardiovascular diseases, Diabetes, and Neuroscience), for product development
                                                    Post Patent filing for regulated and emerging markets. Collaborating with our partners for developing drugs, which are going Off Patent.


                    </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                            Values
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">We are committed to building responsibilities with the patients and our customers. To fulfill our vision, we follow enduring principles that built the foundation of our growing business.
                                                -	Customer focus
                                                -	Team work
                                                -	Innovation
                                                -	Integrity
                                                -	Performance
                                                -	Quality 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                            Quality
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseFour5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">Giving utmost importance to Quality, Leon Pharma has developed well atomization in system and procedure throughout the organization to minimize the risk & to produce world-class quality products. Leon employs the best of industry's technical officials in its QC, QA, and ‘Production & Product Development Department. Their continuous proactive efforts on the present and future needs of market are dedicated to meeting the customer requirements through consistent development of Technology, Quality, drug delivery systems, Packaging and more.</div>
                                                </div>
                                            </div>
                                            <div className="panel wt-panel">
                                                <div className="acod-head">
                                                    <h3 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                        Quality Policy
                      <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div id="collapseFive5" className="acod-body collapse">
                                                    <div className="acod-content p-a20 bg-gray">We continue to work to ensure the safety, quality and efficacy of medicines, harmonization of legal procedures related to drug registration, monitoring and ensuring compliance. With our primary focus on patients, we are highly committed to fulfill their needs driven by continuous research, innovation, & improvement.</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="faq-sidebar">
                                            <div className="service-side-btn m-b30 site-bg-secondry p-a20 text-white">
                                                <h2 className="wt-title">Products</h2>
                                                {/* <p>View our 2020 financial prospectus brochure for an easy to read guide on all of the services offer.</p> */}
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


            </>
        );
    };
};

export default Aboutfq;