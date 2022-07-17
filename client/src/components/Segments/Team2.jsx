import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/team/pic1.jpg'),
        membername: 'Architect Abdus Salam',
        position: 'Owner & Managing Director'
    },
    {
        image: require('./../../images/team/pic2.jpg'),
        membername: 'Rezwona Islam',
        position: 'Director'
    },

]

var bnr1 = require('./../../images/background/bg-map.png');

class Team2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white team-bg-section-outer bg-no-repeat bg-center" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    <div>Management</div>
                                    <div className="sep-leaf-right" />
                                </div>
                            </div>
                            {/* TITLE END*/}
                            <div className="section-content">
                                <div className="row justify-content-center">
                                    {teamMembers.map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                            <div className="wt-team-1">
                                                <div className="wt-media">
                                                    <img src={item.image.default} alt="" />
                                                    <div className="team-social-center">
                                                        <ul className="team-social-bar">
                                                            <h3>More Details</h3>
                                                            {/* <li><NavLink to={"#"}><i className="fa fa-facebook" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-twitter" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-instagram" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-linkedin" /></NavLink></li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wt-info p-a30  p-b0">
                                                    <div className="team-detail  text-center">
                                                        <h3 className="m-t0 team-name"><NavLink to={"/team-single"} className=" site-text-secondry">{item.membername}</NavLink></h3>
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
            </>
        );
    }
};

export default Team2;