import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Team2 from './../Segments/Team2';

const teamMembers = [
    {
        image: require('./../../images/team/pic1.jpg'),
        membername: 'Malcolm Franzcrip',
        position: 'Contractor'
    },
    {
        image: require('./../../images/team/pic2.jpg'),
        membername: 'Froster Collings',
        position: 'Contractor'
    },
    {
        image: require('./../../images/team/pic3.jpg'),
        membername: 'Melena Marshall',
        position: 'Contractor'
    },
    {
        image: require('./../../images/team/pic2.jpg'),
        membername: 'Froster Collings',
        position: 'Contractor'
    },
]

var bnrimg = require('./../../images/banner/7.jpg');
var bnr1 = require('./../../images/background/bg-map2.png');

class Team extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Team" pagename="Team" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* OUR TEAM START */}
                    <div className="section-full p-t80 p-b50 bg-white team-bg-section-outer">
                        <div className="team-bg-map site-bg-secondry bg-repeat-x" style={{ backgroundImage: "url(" + bnr1.default + ")" }}/>
                        <div className="container">
                            <div className="section-content">
                                {/* TITLE START*/}
                                <div className="section-head center wt-small-separator-outer text-center">
                                    <div className="wt-small-separator site-text-primary">
                                        <div className="sep-leaf-left" />
                                        <div>Our Experts</div>
                                        <div className="sep-leaf-right" />
                                    </div>
                                    <h2>We will serve you with the best of our capacity by expert team</h2>
                                </div>
                                {/* TITLE END*/}
                                <div className="section-content">
                                    <div className="row justify-content-center">
                                        {teamMembers.map((item, index) => (
                                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 m-b30">
                                                <div className="wt-team-1">
                                                    <div className="wt-media">
                                                        <img src={item.image.default} alt="" />
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
                                                            <h3 className="m-t0 team-name"><NavLink to={"/team-single"} className=" site-text-white">{item.membername}</NavLink></h3>
                                                            <span className="title-style-2 team-position site-text-primary">{item.position}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR TEAM SECTION END */}
                    {/* OUR TEAM START */}
                    <Team2 />
                    {/* OUR TEAM SECTION END */}
                </div>

                <Footer />

            </>
        );
    };
};

export default Team;