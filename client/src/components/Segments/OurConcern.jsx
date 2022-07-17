import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        image: require('./../../images/concern/6.jpg'),
        title: 'Leon Pharmaceuticals Ltd',     
    },
    {
        image: require('./../../images/concern/4.jpg'),
        title: 'DOM-INNO Ltd',     
    },
    {
        image: require('./../../images/concern/5.jpg'),
        title: 'DOM-INNO Concrete Ltd',     
    },
    {
        image: require('./../../images/concern/3.jpg'),
        title: 'Profile Ltd',     
    },
    {
        image: require('./../../images/concern/1.jpg'),
        title: 'Affix Consumer Products Ltd',     
    },
    {
        image: require('./../../images/concern/2.jpg'),
        title: 'Thema Fila Ltd',     
    },
]

class urConcern extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b40 bg-gray-light">
                    <div className="container">
                        <div className="section-content">
                            <div className="wt-separator-two-part">
                                {/* TITLE START*/}
                                <div className="section-head center wt-small-separator-outer text-center">
                                    <h2 class=" p-b50 custom-mth" > Our Concern</h2>
                                </div>
                                {/* TITLE END*/}
                            </div>
                            <div className="row d-flex justify-content-center">
                                {services.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b50">
                                        <div className="shadow service-border-box service-image-box card1">
                                            <div className="concern-border-box">
                                                <div className="m-b20">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="service-box-title title-style-2 site-text-secondry">
                                                    <span className="s-title-one">{item.title}</span>
                                                    <span className="s-title-two" />
                                                </div>
                                                {/* <div className="service-box-content">
                                                    <NavLink to={"#"} className="site-button-link">Details</NavLink>
                                                </div> */}
                                            </div>
                                        </div>
                                         {/* old start
                                         <div className="service-border-box concern-border-box service-image-box">
                                            <div className="wt-box service-box-1 bg-white">
                                                <div className="service-box-1-media m-b20">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="service-box-title title-style-2 site-text-secondry">
                                                    <span className="s-title-one">{item.title}</span>
                                                    <span className="s-title-two" />
                                                </div>
                                                <div className="service-box-content">
                                                    <NavLink to={"#"} className="site-button-link">Details</NavLink>
                                                </div>
                                            </div>
                                        </div>

                                         old ends old ends */}


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

export default urConcern;