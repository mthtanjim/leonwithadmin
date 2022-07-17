import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/home-11/blog12/thum1.jpg'),
        title: 'Heating and cooling ductless  heat pump',
        date: '05 April 2021',
        author: 'By Sophia Varner'
    },
    {
        image: require('./../../images/home-11/blog12/thum2.jpg'),
        title: 'How does a Humi-difier  Maintenance Checklist',
        date: '06 April 2021',
        author: 'By Sophia Varner'
    },
    {
        image: require('./../../images/home-11/blog12/thum3.jpg'),
        title: 'How you can Improve Air Conditioning Efficiency',
        date: '08 April 2021',
        author: 'By Sophia Varner'
    }
]

class Blog12 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-8 col-md-7 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>From the blog</div>
                                        </div>
                                        <h2>News &amp; Articles</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                                <div className="col-lg-4 col-md-5 wt-separator-two-part-right text-right">
                                    <NavLink to={"/blog-grid"} className="site-button site-btn-effect">More Detail</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* BLOG SECTION START */}
                        <div className="section-content">
                            <div className="row d-flex justify-content-center">
                                {blogs.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="blog-post post-style-12">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <NavLink to={"/blog-post"}><img src={item.image.default} alt="" /></NavLink>
                                            </div>
                                            <div className="wt-post-info text-center">
                                                <div className="wt-post-content">
                                                    <div className="wt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><span>{item.date}</span> </li>
                                                            <li className="post-user"><NavLink to={"/blog-post"}> {item.author}</NavLink> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="wt-post-title ">
                                                        <h3 className="post-title"><NavLink to={"/blog-post"}>{item.title}</NavLink></h3>
                                                    </div>
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

export default Blog12;