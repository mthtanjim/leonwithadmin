import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        title: 'Explain to you why they work and what makes people click them',
        category: 'Materials',
        date: 'February 28, 2021',
        comments: '24 Comment'
    },
    {
        title: 'Explain to you why they work and what makes people click them',
        category: 'Oil & Gas',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        title: 'Explain to you why they work and what makes people click them',
        category: 'Chemical',
        date: 'February 10, 2021',
        comments: '24 Comment',
    }
]

class Blog2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-white blog-post-outer-2">
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
                                <NavLink to={"/blog-post"} className="site-button site-btn-effect">More Detail</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* BLOG SECTION START */}
                        <div className="section-content">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 m-b30">
                                    {/*Block one*/}
                                    <div className="blog-post date-style-2">
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <NavLink to={"/blog-post"}><img src={require('./../../images/blog/default/thum1.jpg').default} alt="" /></NavLink>
                                        </div>
                                        <div className="wt-post-info bg-white p-t30">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-category"><span>Materials</span> </li>
                                                    <li className="post-date">February 28, 2020</li>
                                                    <li className="post-comment">24 Comment</li>
                                                </ul>
                                            </div>
                                            <div className="wt-post-title ">
                                                <h3 className="post-title">Technology is important for your business, you use technology makes</h3>
                                            </div>
                                            <div className="wt-post-readmore ">
                                            <NavLink to={"/blog-post"} className="site-button-link black">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    {blogs.map((item, index) => (
                                        <div key={index} className="blog-post date-style-2 blog-without-image">
                                            <div className="wt-post-info bg-white">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-category"><span>{item.category}</span> </li>
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

export default Blog2;