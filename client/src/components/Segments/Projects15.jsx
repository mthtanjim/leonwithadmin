import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/gallery/pic1.jpg'),
        title: 'Metal Industry',
        description: 'Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries',
    },
    {
        image: require('./../../images/gallery/pic2.jpg'),
        title: 'Alternative Energy',
        description: 'Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries',
    },
    {
        image: require('./../../images/gallery/pic3.jpg'),
        title: 'Areb Oil Rigs',
        description: 'Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries',
    },
    {
        image: require('./../../images/gallery/pic4.jpg'),
        title: 'Gothia Mining Factory',
        description: 'Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries',
    },
    {
        image: require('./../../images/gallery/pic5.jpg'),
        title: 'Warehouse Industry',
        description: 'Committed to delivering high quality projects and innovate business solutions.high Performance Services For Multiple Insdustries',
    }
];

class Projects15 extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            nav:false,
            dots: true,	
            margin:30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                640:{
                    items:2,
                },			
                767:{
                    items:2,
                },				
                991:{
                    items:3,
                },
                1024:{
                    items:3,
                }
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-gray">
                    <div className="section-content container-fluid">
                    <OwlCarousel className="owl-carousel gallery-slider2 owl-btn-vertical-center mfp-gallery" {...options}>
                            {projects.map((item, index) => (
                                <div key={index} className="item">
                                <div className="project-img-effect-1">
                                    <img src={item.image.default} alt="" />
                                    <div className="wt-info">
                                        <h3 className="wt-tilte m-b10 m-t0">{item.title}</h3>
                                        <p>{item.description}</p>
                                        <NavLink to={"/project-detail"}  className="site-button-link">Read More</NavLink>
                                    </div>
                                    <a href={item.image.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
                                </div>
                                </div>
                            ))}
                        </OwlCarousel>
                     </div>
                </div>
            </>
        );
    }
};

export default Projects15;