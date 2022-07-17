import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnr1 = require('./../../images/background/h-bg-5.jpg');

class Statistics1 extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <>
                <div className={`${this.props.bgclass} section-full video-counter-section p-t80`}>
                    <div className="video-counter-bg-white">
                        <div className="container">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    {/* <div className="sep-leaf-left" />
                                    <div>All Solutions</div>
                                    <div className="sep-leaf-right" /> */}
                                </div>
                                <h3>Leon BD</h3>
                            </div>
                            {/* TITLE END*/}
                        </div>
                    </div>
                    <div className="video-counter-bg-image overlay-wraper bg-cover bg-no-repeat" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                        <div className="overlay-main site-bg-secondry opacity-09" />
                        <div className="video-section-outer mfp-gallery">
                            <div className="video-section">
                                {/* <NavLink to={"#"} className="play-now" onClick={this.openModal}> */}
                                <NavLink to={"#"} className="play-now">
                                    <i className="icon fa fa-play" />
                                    <span className="ripple" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="container">
                            <div className="counter-section-outer-top">
                                <div className="counter-outer">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-4 m-b30 ">
                                            <div className="wt-icon-box-wraper center">
                                                <h2 className="counter site-text-primary"><CountUp end={150} duration={5} /></h2>
                                                <span className="site-text-white title-style-2">Total Products</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 m-b30">
                                            <div className="wt-icon-box-wraper center">
                                                <h2 className="counter site-text-primary"><CountUp end={1000} duration={5} /></h2>
                                                <span className="site-text-white title-style-2">Work Employed</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 m-b30">
                                            <div className="wt-icon-box-wraper center">
                                                <h2 className="counter site-text-primary"><CountUp end={750} duration={5} /></h2>
                                                <span className="site-text-white title-style-2">Work Facilities</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="counter-section-outer-bottom">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-6 m-b30 ">
                                        {/* <div className="video-section-info site-bg-primary site-text-white">
                                            <h3 className="wt-tilte site-text-white">The Best Solution For all industries</h3>
                                            <p>Seving an impressive list of long-term clients with experience and expertise in industries.</p>
                                            <NavLink to="/services-mechanical" className="site-button-link">Read More</NavLink>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-7 col-md-6 m-b30">
                                        {/* <div className="video-section-blockquote">
                                            <i className="fa fa-quote-left" />
                                            <span className="q-author-detail site-text-white title-style-2">Many of Our SELF registered employees are requested an main preferred temporary staff when all service</span>
                                            <div className="q-author-name site-text-primary title-style-2">Farnandoz Biki, CEO</div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='fgExvIUYg5w' onClose={() => this.setState({ isOpen: false })} />
                
            </>
        );
    }
};

export default Statistics1;