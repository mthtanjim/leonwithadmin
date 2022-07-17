import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-1.jpg');

class Video4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-white  bg-bottom-right bg-no-repeat" style={{ backgroundImage: 'url(images/background/bg-5.png)' }}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-md-12 m-b30">
                                {/* TITLE START*/}
                                <div className="left wt-small-separator-outer">
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
                                            <a href="https://www.youtube.com/watch?v=fgExvIUYg5w" className="mfp-video play-now">
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="video3-section-blockquote">
                                        <i className="fa fa-quote-left" />
                                        <span className="q-author-detail site-text-secondry title-style-2">Many of Our SELF registered employees are requested an main preferred temporary staff when all service</span>
                                        <div className="q-author-name site-text-primary title-style-2">Farnandoz Biki, CEO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="home-contact-section site-bg-primary p-a40">
                                    <form className="cons-contact-form" method="post" action="form-handler2.php">
                                        {/* TITLE START*/}
                                        <div className="wt-small-separator-outer text-white">
                                            <h2>Feel free to get in touch!</h2>
                                        </div>
                                        {/* TITLE END*/}
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" rows={4} placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="site-button-secondry site-btn-effect">Send us a message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Video4;