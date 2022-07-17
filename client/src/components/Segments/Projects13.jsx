import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Chemical", filter: ".cat-1" },
    { label: "Construction", filter: ".cat-2" },
    { label: "Industrial", filter: ".cat-3" },
    { label: "Oil & Gas", filter: ".cat-4" },
    { label: "Agriculture", filter: ".cat-5" }
];

const projects = [
    {
        image: require('./../../images/gallery/thumb/pic1.jpg'),
        title: 'Metal Industry',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/thumb/pic2.jpg'),
        title: 'Alternative Energy',
        description: 'Committed to delivering high quality projects and innovate business.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/thumb/pic4.jpg'),
        title: 'Areb Oil Rigs',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/thumb/pic3.jpg'),
        title: 'Gothia Mining Factory',
        description: 'Committed to delivering high quality projects and innovate business.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/thumb/pic5.jpg'),
        title: 'Warehouse Industry',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/gallery/thumb/pic6.jpg'),
        title: 'Machine Engineering',
        description: 'Committed to delivering high quality projects and innovate business.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/thumb/pic7.jpg'),
        title: 'Gear Manufacturing',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/thumb/pic8.jpg'),
        title: 'Oil Pipeline Project',
        description: 'Committed to delivering high quality projects and innovate business.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/thumb/pic9.jpg'),
        title: 'Industry Complex',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
        filter: 'cat-1'
    }
];

class Projects13 extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white">
                    <div className="container">
                        {/* PAGINATION START */}
                        <div className="filter-wrap work-grid p-b30 text-center">
                            <ul className="masonry-filter link-style ">
                                <li className="active"><NavLink to={"#"} data-filter="*">All Cases</NavLink></li>
                                {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter}>{item.label}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                        <div className="masonry-wrap mfp-gallery  row clearfix d-flex justify-content-center flex-wrap">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                    <div className="project-img-effect-1">
                                        <img src={item.image.default} alt="" />
                                        <div className="wt-info">
                                            <h3 className="wt-tilte m-b10 m-t0">{item.title}</h3>
                                            <p>{item.description}</p>
                                            <NavLink to={"/project-detail"} className="site-button-link">Read More</NavLink>
                                        </div>
                                        <a href={item.image.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                </div>
            </>
        );
    }
};

export default Projects13;