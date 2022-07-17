import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import PageSidebar from './../Segments/PageSidebar';

const blogs = [
    {
        image: require('./../../images/blog/default/thum1.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum2.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum3.jpg'),
        title: 'Explain to you why they work and what makes people click them',
        category: 'Manufacturing',
        date: 'February 10, 2021',
        comments: '24 Comment',
    },
    {
        image: require('./../../images/blog/default/thum4.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum5.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum6.jpg'),
        title: 'Explain to you why they work and what makes people click them',
        category: 'Manufacturing',
        date: 'February 10, 2021',
        comments: '24 Comment',
    },
    {
        image: require('./../../images/blog/default/thum7.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum8.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    }
]

var bnrimg = require('./../../images/banner/2.jpg');

class BlogList extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Blog List" pagename="Blog List" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* OUR BLOG START */}
                    <div className="section-full  p-t80 p-b50 bg-white">
                        <div className="container">
                            {/* BLOG SECTION START */}
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                        {blogs.map((item, index) => (
                                            <div className="blog-post date-style-2" key={index}>
                                                <div className="wt-post-media wt-img-effect zoom-slow">
                                                    <NavLink to={"/blog-post"}><img src={item.image.default} alt="" /></NavLink>
                                                </div>
                                                <div className="wt-post-info bg-white p-t30">
                                                    <div className="wt-post-meta ">
                                                        <ul>
                                                            <li className="post-category"><span>{item.category}</span> </li>
                                                            <li className="post-date">{item.date}</li>
                                                            <li className="post-comment">{item.comments}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="wt-post-title ">
                                                        <h3 className="post-title"><NavLink to={"/blog-post"} className="site-text-secondry">{item.title}
                                                        </NavLink></h3>
                                                    </div>
                                                    <div className="wt-post-readmore ">
                                                        <NavLink to={"/blog-post"} className="site-button-link black">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* SIDE BAR START */}
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
                                        <PageSidebar />
                                    </div>
                                    {/* SIDE BAR END */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR BLOG END */}
                </div>

                <Footer />

            </>
        );
    };
};

export default BlogList;