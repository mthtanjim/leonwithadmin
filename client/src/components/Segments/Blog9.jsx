import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/ui-9/latest-blog/bg-1.jpg'),
        title: 'Everyone wants to make a profit from their business, for that all of them',
        day: '15',
        date: 'Jan 2021',
        author: 'Admin',
        comments: '2 Comment'
    },
    {
        image: require('./../../images/ui-9/latest-blog/bg-2.jpg'),
        title: 'build the industry and manufacturing the best quality of products',
        day: '15',
        date: 'Jan 2021',
        author: 'Admin',
        comments: '2 Comment'
    }
]

class Blog9 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b50  bg-gray-light">
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-6 col-md-7 wt-separator-two-part-left">
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
                                <div className="col-lg-6 col-md-5 wt-separator-two-part-right text-right">
                                    <NavLink to={"/blog-grid"} className="site-button site-btn-effect">More Detail</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* BLOG SECTION START */}
                        <div className="section-content">
                            <div className="row d-flex justify-content-center">
                                {blogs.map((item, index) => (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="latest-blog-3-pattern">
                                            <div className="blog-post latest-blog-3 overlay-wraper post-overlay  large-date bg-cover bg-no-repeat bg-top-center" style={{ backgroundImage: "url(" + item.image.default + ")" }}>
                                                <div className="overlay-main opacity-05 bg-black" />
                                                <div className="wt-post-info p-a30 text-white">
                                                    <div className="post-overlay-position">
                                                        <div className="post-content-outer">
                                                            <div className="wt-post-meta ">
                                                                <ul>
                                                                    <li className="post-date"><strong>{item.day}</strong><span>{item.date}</span></li>
                                                                    <li className="post-author"><i className="fa fa-user-o" />By <NavLink to={"/blog-post"}>{item.author}</NavLink> </li>
                                                                    <li className="post-comment"><i className="fa fa-comments-o" /> <NavLink to={"/blog-post"}>{item.comments}</NavLink> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="wt-post-title ">
                                                                <h3 className="post-title"><NavLink to={"/blog-post"} className="text-white text-capitalize">{item.title}</NavLink></h3>
                                                            </div>
                                                            <div className="wt-post-readmore ">
                                                                <NavLink to={"/blog-post"} className="site-button-link white">Read More</NavLink>
                                                            </div>
                                                        </div>
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

export default Blog9;