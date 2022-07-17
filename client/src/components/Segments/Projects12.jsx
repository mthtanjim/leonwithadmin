import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Oil & Gas", filter: ".cat-1", flaticon: "flaticon-oil" },
    { label: "Construction", filter: ".cat-2", flaticon: "flaticon-helmet" },
    { label: "Chemical", filter: ".cat-3", flaticon: "flaticon-healthcare-and-medical" },
    { label: "Industrial", filter: ".cat-4", flaticon: "flaticon-conveyor" },
    { label: "Agriculture", filter: ".cat-5", flaticon: "flaticon-scythe" }
];

const projects = [
    {
        image: require('./../../images/project/square/1.jpg'),
        title: 'Oil & Gas',
        filter: 'cat-1'
    },

    {
        image: require('./../../images/project/square/2.jpg'),
        title: 'Automotive Manufacturing',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/project/square/3.jpg'),
        title: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/project/square/4.jpg'),
        title: 'Chemical',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/project/square/5.jpg'),
        title: 'Industrial',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/project/square/6.jpg'),
        title: 'Industrial',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/project/square/7.jpg'),
        title: 'Agriculture',
        filter: 'cat-1'
    }
]

var bnr1 = require('./../../images/background/bg-7.jpg');

class Projects12 extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray  bg-cover" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Explore Recent Work</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>We've Done Lot's Projects Let's Check Some Here</h2>
                        </div>

                        {/* TITLE END*/}
                        <div className="section-content">
                            <div className="masonry-wrap row mfp-gallery project-stamp clearfix d-flex justify-content-center">
                                {/* COLUMNS 1 */}
                                <div className="stamp col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30">
                                    <div className="project-stamp-list bg-white">
                                        <div className="filter-wrap">
                                            <ul className="filter-navigation masonry-filter text-uppercase">
                                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All"><i className="flaticon-layers" />All Cases</NavLink></li>
                                                {filters.map((item, index) => (
                                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}><i className={item.flaticon} />{item.label}</NavLink></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30`}>
                                        <div className="wt-box bg-white  p-a10 project-2-block">
                                            <div className="wt-thum-bx">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="wt-info">
                                                <h4 className="wt-title m-b0 m-t15"><NavLink to={"/project-detail"}>{item.title}</NavLink></h4>
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

export default Projects12;