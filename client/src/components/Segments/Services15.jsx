import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        image: require('./../../images/services/1.jpg'),
        title: 'Oil & Gas Engineering',
        description: 'Progressively maintain extensive info mediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        image: require('./../../images/services/2.jpg'),
        title: 'Mechanical Engineering',
        description: 'Progressively maintain extensive info mediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        image: require('./../../images/services/3.jpg'),
        title: 'Automotive Manufacturing',
        description: 'Progressively maintain extensive info mediaries via extensible nich. Capitalize on low hanging fruit.'
    },
]

class Services15 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b40">
                    <div className="container">
                        <div className="section-content">
                            <div className="wt-separator-two-part">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-lg-8 col-md-7 wt-separator-two-part-left">
                                        {/* TITLE START*/}
                    
                                        {/* TITLE END*/}
                                    </div>
                                    <div className="col-lg-4 col-md-5 wt-separator-two-part-right text-right">
                                        <NavLink to={"/about-1"} className="site-button site-btn-effect">More Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                {services.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b50">
                                        <div className="service-border-box service-image-box">
                                            <div className="wt-box service-box-1 bg-white">
                                                <div className="service-box-1-media m-b20">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="service-box-title title-style-2 site-text-secondry">
                                                    <span className="s-title-one">{item.title}</span>
                                                    <span className="s-title-two" />
                                                </div>
                                                <div className="service-box-content">
                                                    <p>{item.description}</p>
                                                    <NavLink to={"/services-mechanical"} className="site-button-link">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services15;