import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/solar-icon/default/thum1.jpg'),
        title: 'Avoid Solar Panels Damage Your Top Roof',
        date: '14, March',
        comments: '24 Comment',
    },
    {
        image: require('./../../images/solar-icon/default/thum2.jpg'),
        title: 'How To Get Your Expected Solar Production',
        date: '15, March',
        comments: '24 Comment',
    },
    {
        image: require('./../../images/solar-icon/default/thum3.jpg'),
        title: 'Home Solar Power, Reuse, By Maintainance',
        date: '28, March',
        comments: '24 Comment',
    }
]

class Blog6 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b0 bg-white blog-post-outer-2">
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row d-flex justify-content-center">
                                <div className="col-lg-8 col-md-7 wt-separator-two-part-left m-b30">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Latest Articles Updated Daily</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>We Are Here To Learn You More From Blog</h2>
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
                                    <div key={index} className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="blog-post date-style-2">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <NavLink to={"/blog-post"}><img src={item.image.default} alt="" /></NavLink>
                                            </div>
                                            <div className="wt-post-info bg-gray p-a30">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-date">{item.date}</li>
                                                        <li className="post-comment">{item.comments}</li>
                                                    </ul>
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title">{item.title}</h3>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <NavLink to={"/blog-post"} className="site-button-link black">Read More</NavLink>
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

export default Blog6;