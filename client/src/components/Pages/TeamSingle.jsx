import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/7.jpg');

class TeamSingle extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Team Single" pagename="Team Single" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* OUR TEAM SINGLE SECTION START */}
                    <div className="section-full p-t80 p-b50 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="section-content">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-4 m-b30">
                                            <div className="wt-team-1">
                                                <div className="wt-media">
                                                    <img src={require('./../../images/team/pic1.jpg').default} alt="" />
                                                    <div className="team-social-center">
                                                        <ul className="team-social-bar">
                                                            <li><NavLink to={"#"}><i className="fa fa-facebook" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-twitter" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-instagram" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-linkedin" /></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wt-info p-a30  p-b0">
                                                    <div className="team-detail  text-center">
                                                        <h3 className="m-t0 team-name"><NavLink to={"/team"} className="site-text-secondry">Malcolm Franzcrip</NavLink></h3>
                                                        <span className="title-style-2 team-position site-text-primary">Contractor</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 m-b30">
                                            <div className="wt-team-1-single">
                                                <h3 className="m-t0">About Me</h3>
                                                <p>The Chief Operating Officer (COO) is responsible for the corporate improvement programme and for driving operational efficiency across Equinor’s eight business areas. The COO also plays a key role in the further development of Equinor. The role of the COO organisation is to drive consistent long term safe and efficient operational performance and value creation.</p>
                                                <ul className="wt-team-1-single-info bg-white">
                                                    <li><span>Position</span><span>Electrical engineering</span></li>
                                                    <li><span>Level</span><span>High</span></li>
                                                    <li><span>Experience</span><span>5 Year</span></li>
                                                    <li><span>Phone</span><span>987 765 4321</span></li>
                                                    <li><span>Email</span><span>malcolm-franzcrip@example.com</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR TEAM SINGLE SECTION END */}
                    <div className="section-full p-t80 p-b50 bg-white">
                        <div className="container">
                            <div className="section-content">
                                <div className="section-content">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-lg-8 col-md-12 col-sm-12">
                                            <div className="home-contact-section site-bg-primary m-b30 p-a40">
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
                        </div>
                    </div>
                </div>

                <Footer />

            </>
        );
    };
};

export default TeamSingle;