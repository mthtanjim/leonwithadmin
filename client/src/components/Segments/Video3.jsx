import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

class Video3 extends React.Component {
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
                <div className="section-full  p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-9 col-md-12 m-b30">
                                {/* TITLE START*/}
                                <div className="section-head center wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div className="sep-leaf-left" />
                                        <div>Vision &amp; Mission Statement</div>
                                        <div className="sep-leaf-right" />
                                    </div>
                                    <h2>Serving Impressive List Of Long Term Clients!</h2>
                                    <p>Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met. Serving with experience aNd expertise in multiple industries, as one of the World's leading Corporation! .</p>
                                </div>
                                {/* TITLE END*/}
                                <div className="video-3-section-outer-bottom">
                                    <div className="video-section2-outer mfp-gallery">
                                        <div className="video-section">
                                            <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="video3-section-blockquote">
                                        <i className="fa fa-quote-left" />
                                        <span className="q-author-detail site-text-secondry title-style-2">Many of Our SELF registered employees are requested an main preferred temporary staff when all service</span>
                                        <div className="q-author-name site-text-primary title-style-2">Farnandoz Biki, CEO</div>
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

export default Video3;