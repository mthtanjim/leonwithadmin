import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

const blogs = [
    {
        image: require('./../../images/blog/default/portrait/1.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/portrait/2.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/portrait/3.jpg'),
        title: 'Explain to you why they work and what makes people click them',
        category: 'Manufacturing',
        date: 'February 10, 2021',
        comments: '24 Comment',
    },
    {
        image: require('./../../images/blog/default/portrait/4.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/portrait/5.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/portrait/6.jpg'),
        title: 'Explain to you why they work and what makes people click them',
        category: 'Manufacturing',
        date: 'February 10, 2021',
        comments: '24 Comment',
    },
    {
        image: require('./../../images/blog/default/portrait/7.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/portrait/8.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/portrait/9.jpg'),
        title: 'Explain to you why they work and what makes people click them',
        category: 'Manufacturing',
        date: 'February 10, 2021',
        comments: '24 Comment',
    }
]

var bnrimg = require('./../../images/banner/1.jpg');

class BlogGrid extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Blog Grid" pagename="Blog Grid" bgimage={bnrimg.default} />
                    {/* OUR BLOG START */}
                    <div className="section-full  p-t80 p-b50 bg-white ">
                        <div className="container">
                            {/* BLOG SECTION START */}
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    {blogs.map((item, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                            <div className="blog-post date-style-2">
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
                                        </div>
                                    ))}
                                </div>
                                <ul className="pagination m-b0 p-b0">
                                    <li className="page-item"><NavLink className="page-link" to={"#"}>Previous</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to={"#"}>1</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to={"#"}>2</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to={"#"}>3</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to={"#"}>Next</NavLink></li>
                                </ul>
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

export default BlogGrid;