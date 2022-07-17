import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        title: 'Research Fundamental',
        description: 'It is a long established fact that a reader will be distracted by the readable content.',
        date: '20 Jan 2021',
        comments: '5 Comment'
    },
    {
        title: 'Mechanical Evolution',
        description: 'It is a long established fact that a reader will be distracted by the readable content.',
        date: '22 Jan 2021',
        comments: '5 Comment'
    },
    {
        title: 'Future of Manufacturing',
        description: 'It is a long established fact that a reader will be distracted by the readable content.',
        date: '24 Jan 2021',
        comments: '5 Comment',
    },
    {
        title: 'Smart Factory Solutions',
        description: 'It is a long established fact that a reader will be distracted by the readable content.',
        date: '26 Jan 2021',
        comments: '5 Comment',
    }
]

var bnr1 = require('./../../images/ui-9/latest-blog/bg-1.jpg');

class Blog10 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b50  bg-gray-light latest-blog-2-wraper">
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
                                    <NavLink to={"/blog-post"} className="site-button site-btn-effect">More Detail</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* BLOG SECTION START */}
                        <div className="section-content">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-12">
                                    {/*Block one*/}
                                    <div className="latest-blog-3-pattern">
                                        <div className="blog-post latest-blog-3 overlay-wraper post-overlay  large-date bg-cover bg-no-repeat bg-top-center" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                                            <div className="overlay-main opacity-05 bg-black" />
                                            <div className="wt-post-info p-a30 text-white">
                                                <div className="post-overlay-position">
                                                    <div className="post-content-outer">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-date"><strong>15</strong><span>Jan 2021</span></li>
                                                                <li className="post-author"><i className="fa fa-user-o" />By <NavLink to={"/blog-post"}>Admin</NavLink> </li>
                                                                <li className="post-comment"><i className="fa fa-comments-o" /> <NavLink to={"/blog-post"}>2 comment</NavLink> </li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title"><NavLink to={"/blog-post"} className="text-white text-capitalize">Everyone wants to make a profit from their business, for that all of them</NavLink></h3>
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
                                <div className="col-lg-7 col-md-12">
                                    <div className="row latest-blog-2-outer justify-content-center">
                                        {blogs.map((item, index) => (
                                            <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="blog-post latest-blog-2 bg-white bdr-1 bdr-solid bdr-gray p-a20">
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-date">{item.date}</li>
                                                                <li className="post-comment"><i className="fa fa-comments-o" /> <NavLink to={"/blog-post"}>{item.comments}</NavLink> </li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title"><NavLink to={"/blog-post"} className="site-text-secondry">{item.title}</NavLink></h3>
                                                        </div>
                                                        <div className="wt-post-text ">
                                                            <p>{item.description}</p>
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
                    </div>
                </div>
            </>
        );
    }
};

export default Blog10;