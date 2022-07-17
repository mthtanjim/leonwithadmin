import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        flaticon: 'flaticon-oil',
        title1: 'Oil &',
        title2: 'Gas Engineering',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '02',
        flaticon: 'flaticon-conveyor',
        title1: 'Mechanical',
        title2: 'Engineering',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '03',
        flaticon: 'flaticon-robotic-arm',
        title1: 'Automotive',
        title2: 'Manufacturing',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '04',
        flaticon: 'flaticon-industry',
        title1: 'Chemical',
        title2: 'Research',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '05',
        flaticon: 'flaticon-scythe',
        title1: 'Agricultural',
        title2: 'Automation',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '06',
        flaticon: 'flaticon-helmet',
        title1: 'Civil',
        title2: 'Engineering',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
]

var bnr1 = require('./../../images/background/bg-7.jpg');

class Services13 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b40 bg-no-repeat bg-bottom-right bg-cover" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    <div>The Best Industry services</div>
                                    <div className="sep-leaf-right" />
                                </div>
                                <h2>High Performance Services For Multiple Insdustries And Technologies!</h2>
                            </div>
                            {/* TITLE END*/}
                            <div className="row d-flex justify-content-center">
                                {services.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b50">
                                        <div className="service-border-box">
                                            <div className="wt-box service-box-1 bg-white">
                                                <div className="service-box-title title-style-2 site-text-secondry">
                                                    <span className="s-title-one">{item.title1}</span>
                                                    <span className="s-title-two">{item.title2}</span>
                                                </div>
                                                <div className="service-box-content">
                                                    <p>{item.description}</p>
                                                    <NavLink to={"/services-mechanical"} className="site-button-link">Read More</NavLink>
                                                </div>
                                                <div className="wt-icon-box-wraper">
                                                    <div className="wt-icon-box-md site-bg-primary">
                                                        <span className="icon-cell text-white"><i className={item.flaticon} /></span>
                                                    </div>
                                                    <div className="wt-icon-number"><span>{item.count}</span></div>
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

export default Services13;