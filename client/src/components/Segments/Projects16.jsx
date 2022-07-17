import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/gallery/thumb/pic1.jpg'),
        title: 'Metal Industry',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
    },
    {
        image: require('./../../images/gallery/thumb/pic2.jpg'),
        title: 'Alternative Energy',
        description: 'Committed to delivering high quality projects and innovate business.',
    },
    {
        image: require('./../../images/gallery/thumb/pic3.jpg'),
        title: 'Areb Oil Rigs',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
    },
    {
        image: require('./../../images/gallery/thumb/pic4.jpg'),
        title: 'Gothia Mining Factory',
        description: 'Committed to delivering high quality projects and innovate business.',
    },
    {
        image: require('./../../images/gallery/thumb/pic5.jpg'),
        title: 'Warehouse Industry',
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
    },
    {
        image: require('./../../images/gallery/thumb/pic6.jpg'),
        title: 'Machine Engineering',
        description: 'Committed to delivering high quality projects and innovate business.',
    }
];

var bnr1 = require('./../../images/background/bg-3.jpg');

class Projects16 extends React.Component {
    
    render() {
        const options = {
            loop:true,
            autoplay:false,
            nav:true,
            dots: false,	
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
                },	
                
                1200:{
                    items:4,
                },					
                1366:{
                    items:4,
                },			
                1400:{
                    items:5
                }		
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 overlay-wraper  bg-cover" style={{ backgroundImage: 'url(' + bnr1.default + ')', backgroundColor: '#dff6fc' }}>
                    <div className="overlay-main bg-black opacity-07" />
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-white">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>The Best Industry services</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>High Performance Services For Multiple Insdustries And Technologies!</h2>
                        </div>
                        {/* TITLE END*/}
                    </div>
                    <div className="section-content container-fluid">
                        <OwlCarousel className="owl-carousel gallery-slider owl-btn-vertical-center mfp-gallery" {...options}>
                            {projects.map((item, index) => (
                                <div key={index} className="item">
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
                        </OwlCarousel>
                     </div>
                </div>
            </>
        );
    }
};

export default Projects16;