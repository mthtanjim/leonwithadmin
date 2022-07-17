import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnr1 = require('./../../images/background/bg3.jpg');

class Video1 extends React.Component {
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
                <div className="section-full video2-counter-section p-t80 p-b40  overlay-wraper bg-cover bg-no-repeat bg-parallax" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main bg-white opacity-04" />
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>All Solutions</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Get A Solution For All Industries</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="counter2-section-outer-top">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-12 m-b30 ">
                                    <div className="video2-section-info site-bg-secondry site-text-white">
                                        <h3 className="wt-tilte site-text-primary">The Best Solution For all industries</h3>
                                        <p>Seving an impressive list of long-term clients with experience and expertise in industries.</p>
                                        <NavLink to={"/services-powerenergy"} className="site-button site-btn-effect">Read More</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 m-b30">
                                    <div className="video-section2-outer mfp-gallery">
                                        <div className="video-section">
                                            <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="video-section-blockquote2">
                                        <i className="fa fa-quote-left" />
                                        <span className="q-author-detail site-text-secondry title-style-2">Many of Our SELF registered employees are requested an main preferred temporary staff when all service</span>
                                        <div className="q-author-name site-text-secondry title-style-2">Farnandoz Biki, CEO</div>
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

export default Video1;