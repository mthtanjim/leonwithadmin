import React from 'react';
import { NavLink } from 'react-router-dom';

const Achievements = [
    {
        count: '01',
        title: 'Consecutive Award winning',
        faicon: 'fa fa-angellist',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    },
    {
        count: '02',
        title: 'We are creative designers',
        faicon: 'fa fa-object-group',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    },
    {
        count: '03',
        title: 'Heigh quality products',
        faicon: 'fa fa-diamond',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    }, 
    {
        count: '04',
        title: 'Heigh quality products',
        faicon: 'fa fa-diamond',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    },
    {
        count: '05',
        title: 'Heigh quality products',
        faicon: 'fa fa-diamond',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    }, 
    {
        count: '06',
        title: 'Heigh quality products',
        faicon: 'fa fa-diamond',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting.',
    }
]

class Achievements1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full bg-white p-t80 p-b50">
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content clearfix">
                            <div className="top-half2-section">
                                <div className="row d-flex justify-content-center">
                                    {Achievements.map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 animate_line">
                                            <div className="service-border-box3 shadow">
                                                <div className="wt-icon-box-wraper bg-white p-tb50 p-lr20">
                                                    <div className="icon-lg inline-icon	 m-b50 text-left">
                                                        <span className="icon-cell site-text-primary"><i className={item.faicon} /></span>
                                                    </div>
                                                    <div className="icon-content bold-title">
                                                        <h3 data-title={item.count} className="wt-tilte m-b20">{item.title}</h3>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/about-1"} className="site-button-link">More Detail</NavLink>
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

export default Achievements1;