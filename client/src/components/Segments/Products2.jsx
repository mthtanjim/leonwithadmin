import React from 'react';
import { NavLink } from 'react-router-dom';

const products = [
    {
        title: 'We Care About Envirement',
        image: require('./../../images/oil-gas/icon-2/1.png'),
        description: 'Sample discription one.',
    },
    {
        title: 'We Think About Consumer',
        image: require('./../../images/oil-gas/icon-2/2.png'),
        description: 'This product is ........ sample.',
    },
    {
        title: 'Oil Resources',
        image: require('./../../images/oil-gas/icon-2/3.png'),
        description: 'sample 4444444444444.',
    },
    {
        title: 'We Fight Polution',
        image: require('./../../images/oil-gas/icon-2/4.png'),
        description: 'Sample 3244 leon pharma limited.',
    },
    {
        title: 'Chimical Analysis',
        image: require('./../../images/oil-gas/icon-2/5.png'),
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    },
    {
        title: 'Awesome Employees',
        image: require('./../../images/oil-gas/icon-2/6.png'),
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    }
]

var bnr1 = require('./../../images/background/bg-5.png');

class Products2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-white  bg-bottom-right bg-no-repeat" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>We Provide Energy</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>To many clients like government, homes and offices</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="row d-flex justify-content-center">
                            {products.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6 animate_line">
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
            </>
        );
    }
};

export default Products2;