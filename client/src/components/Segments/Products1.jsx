import React from 'react';
import { NavLink } from 'react-router-dom';

const products = [
    {
        title: 'Solar Wind',
        image: require('./../../images/solar-icon/1.png'),
        description: 'This product is the one of the best product.',
    },
    {
        title: 'PV Solar Panel',
        image: require('./../../images/solar-icon/2.png'),
        description: 'Sample discription.',
    },
    {
        title: 'Solar Water Heater',
        image: require('./../../images/solar-icon/4.png'),
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    },
    {
        title: 'Solar Plates',
        image: require('./../../images/solar-icon/3.png'),
        
        description: 'Prodcucts Description.',
    }
]

class Products1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full bg-white p-t80 p-b50 full-container-margin">
                    <div className="container-fluid">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content clearfix">
                            <div className="top-half2-section">
                                <div className="row d-flex justify-content-center">
                                    {products.map((item, index) => (
                                        <div key={index} className="col-xl-3 col-lg-6 col-md-6 animate_line">
                                            <div className="service-border-box3 shadow text-center">
                                                <div className="wt-icon-box-wraper bg-white p-tb50 p-lr20">
                                                    <div className="icon-lg inline-icon	 m-b50">
                                                        <img src={item.image.default} alt="" />
                                                    </div>
                                                    <div className="icon-content">
                                                        <h3 className="wt-tilte m-b20">{item.title}</h3>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/shop-detail"} className="site-button-link">More Detail</NavLink>
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

export default Products1;